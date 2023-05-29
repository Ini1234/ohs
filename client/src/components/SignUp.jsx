import { useState } from 'react';
import { googleIcon, or } from '../assets';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/api/v1/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const [show, setShow] = useState(false);
  return (
    <div className='flex flex-col p-8 justify-center items-center'>
      <h1 className='text-center  text-base md:text-3xl font-[Rufina] font-light mb-2 md:mb-6 leading-extra-loose'>
        Sign up to create your
        <br />
        <span className='md:mt-3'> personal health space</span>
      </h1>
      <div className=' bg-alittleDim w-[200px] md:w-[350px] p-2 md:p-6'>
        <div className='mt-2 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mt-2 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='mt-2 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
            placeholder='Email Adress'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-2 md:mt-5 relative'>
          <div className='w-full'>
            <input
              className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-[0.5rem] md:text-[0.8rem]'
              placeholder='Password'
              type={`${show ? 'Text' : 'Password'}`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className='font-[Inter] text-[0.5rem] md:text-[0.8rem] absolute top-2.5 right-2 cursor-pointer'
            onClick={() => setShow((prev) => !prev)}
          >
            {`${show ? 'Hide' : 'Show'}`}
          </div>
        </div>
        <div>
          <button
            className='active:scale-[.95] active:duration-75 transition-all mt-6 w-full bg-greenPalette text-white font-[Poppins] font-normal text-[0.5rem] md:text-[0.8rem] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'
            onClick={handleRegister}
          >
            Sign up
          </button>
        </div>
        <div className='md:flex w-full mt-3 md:mt-6'>
          <img src={or} alt='ohs' />
        </div>
        <div className='mt-3 md:mt-6 flex flex-col gap-y-2'>
          <button className='flex justify-center gap-2 items-center active:scale-[.95] active:duration-75 transition-all w-full border border-1 border-black border-solid text-secondaryTextColor font-[Poppins] font-normal text-[0.5rem] md:text-[0.8rem] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'>
            <img
              src={googleIcon}
              alt='ohs'
              className='w-[10px] h-10[px]md:w-[15px] md:h-[15px]'
            />
            Continue with Google
          </button>
          <button className='text-[0.5rem] md:text-[0.8rem] font-[Inter] font-medium active:scale-[.95] active:duration-75 transition-all hover:scale-[1.01]'>
            Already on OneHealthSpace? Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
