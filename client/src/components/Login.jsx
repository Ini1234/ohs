import { useState, useEffect, useContext } from 'react';
import { googleIcon, or } from '../assets';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const { user, loading, error, dispatch } = useAuthContext();

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loginError, setLoginError] = useState({
    errStatus: undefined,
    errMessage: undefined,
  });

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
      setLoginError({
        errStatus: err.response.status,
        errMessage: err.response.data
          ? err.response.data
          : 'Unable to connect to the server. Please try again later.',
      });
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className='flex flex-col p-8 justify-center items-center'>
      <h1 className='text-center  text-base md:text-xl font-[Inter] font-semibold mb-2 md:mb-6 tracking-normal'>
        Sign in to your account
      </h1>
      <div className=' bg-alittleDim w-[200px] sm:w-[550px] p-2 sm:p-8 rounded-md'>
        <div className='bg-white p-10 rounded-md'>
          <div className='flex flex-col justify-between gap-y-2 mt-2 md:mt-5'>
            <p>Email Address</p>
            <input
              className='w-full border border-1 border-[#D1D5DB] border-solid shadow-lg p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-between gap-y-2 mt-2 md:mt-5'>
            <p>Password</p>
            <input
              className='w-full border border-1 border-[#D1D5DB] border-solid shadow-lg p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
              id='password'
              type='password'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-y-2 mt-2 md:mt-5'>
            <div className='flex gap-x-2'>
              <input
                className=''
                id='rememberMe'
                type='checkbox'
                onChange={handleChange}
              />
              <p className='font-light text-xs md:text-base'>Remember Me</p>
            </div>
            <div>
              <p className='text-greenPalette text-xs md:text-base'>Forgot Password?</p>
            </div>
          </div>
          <div>
            <button
              className='active:scale-[.95] active:duration-75 transition-all mt-6 w-full bg-greenPalette text-white font-[Poppins] font-normal text-[0.5rem] md:text-[0.8rem] py-2 px-4 rounded hover:scale-[1.01] duration-500'
              onClick={handleLogin}
            >
              Sign in
            </button>
            {/* {error && <span>{error.message}</span>} */}
            <p
              className={`${
                loginError.errStatus && loginError.errMessage
                  ? 'text-black'
                  : 'hidden'
              }`}
            >
              {loginError.errMessage}
            </p>
          </div>
          <div className='md:flex w-full mt-3 md:mt-6'>
            <img src={or} alt='ohs' />
          </div>
          <div className='mt-3 md:mt-6 flex flex-col gap-y-2 justify-center content-center'>
            <button className='flex justify-center gap-2 items-center active:scale-[.95] active:duration-75 transition-all w-full border border-1 border-black border-solid text-bold font-[Poppins] font-normal text-[0.5rem] md:text-[0.8rem] py-2 px-4 rounded hover:scale-[1.01] duration-500'>
              <img
                src={googleIcon}
                alt='ohs'
                className='w-[10px] h-10[px]md:w-[15px] md:h-[15px]'
              />
              Sign in with Google
            </button>
            <Link to='/signup' className='flex justify-center content-center'>
              <button className='text-[0.5rem] md:text-[0.8rem] font-[Inter] font-medium active:scale-[.95] active:duration-75 transition-all hover:scale-[1.01]'>
                Not a member?{' '}
                <span className='text-greenPalette'>Sign up here</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
