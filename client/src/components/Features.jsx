import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  // Handles Navigation to /signp
  const goToSignUp = (event) => {
    event.preventDefault();
    navigate('/signUp');
  };
  
  return (
    <div className='justify-center mt-5 px-4 xs:px-10 sm:px-0'>
      <h2 className='font-[Inter] font-bold text-sm sm:text-lg mb-1'>
        Have 24/7 Access To Your Records
      </h2>
      <p className='font-medium mb-8 text-xs sm:text-base'>
        Your data is always accessible to you, whenever you
        <br className='hidden md:block' /> need it.
      </p>
      <h2 className='font-[Inter] font-bold text-sm sm:text-lg mb-1'>
        Secure Platform for Record Storing
      </h2>
      <p className='font-medium mb-8 text-xs sm:text-base'>
        HIPPA compliance by using security software that
        <br className='hidden sm:block' /> ensures patient information is shared
        safely.
      </p>
      <h2 className='font-[Inter] font-bold text-sm sm:text-lg mb-1'>
        Cross-Provider Collaboration
      </h2>
      <p className='font-medium mb-8 text-xs sm:text-base'>
        Send results from one service provider to another
        <br className='hidden sm:block' /> allowing seamless collaboration
        between your services.
      </p>
      <button className='w-full md:w-auto active:scale-[.95] active:duration-75 transition-all bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-6 rounded-full hover:scale-[1.01] duration-500 text-xs sm:text-base '
      onClick= {goToSignUp}
      >
        Get Started
      </button>
    </div>
  );
};

export default Features;
