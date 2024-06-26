import { useState, useEffect, useContext } from 'react';
import { googleIcon, or } from '../assets';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // Handle Login. TODO. Migrate this to the login
  const handleChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/api/v1/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/myspace');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };
  return (
    <div className='flex flex-col p-8'>
      <h1 className='text-center sm:text-start text-lg sm:text-2xl md:text-4xl font-[Rufina] font-light mb-2 md:mb-6 leading-extra-loose'>
        Welcome to your <br className='hidden sm:block' />
        <span className='sm:mt-3'>personal health space</span>
      </h1>
      <div className='w-full'>
        <div className='mt-5 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
            placeholder='Email or Phone Number'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div className='mt-2 relative'>
          <div className='w-full'>
            <input
              className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              type={`${show ? 'Text' : 'Password'}`}
            />
          </div>
          <div
            className='font-[Inter] text-xs absolute top-2.5 right-2 cursor-pointer'
            onClick={() => setShow((prev) => !prev)}
          >
            {`${show ? 'Hide' : 'Show'}`}
          </div>
        </div>
        <div>
          <button className='text-xs font-[Inter] font-medium active:scale-[.95] active:duration-75 transition-all hover:scale-[1.01]'>
            Forgot password?
          </button>
          <button
            className='active:scale-[.95] active:duration-75 transition-all mt-6 w-full bg-greenPalette text-white font-[Poppins] font-normal text-[13px] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
        <div className='sm:flex w-full mt-6'>
          <img src={or} alt='ohs' />
        </div>
        <div className='mt-6 flex flex-col gap-y-2'>
          <button className='flex justify-center gap-2 items-center active:scale-[.95] active:duration-75 transition-all w-full border border-1 border-black border-solid text-secondaryTextColor font-[Poppins] font-normal text-[13px] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'>
            <img src={googleIcon} alt='ohs' className='w-[15px] h-[15px]' />
            Sign in with Google
          </button>
          <Link to='/signup'>
            <button className='active:scale-[.95] active:duration-75 transition-all w-full border border-1 border-black border-solid text-secondaryTextColor font-[Poppins] font-normal text-[13px] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'>
              New to OneHealthSpace? Join now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
