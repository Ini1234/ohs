import React from 'react';

const Features = () => {
  return (
    <div className='justify-center mt-5'>
      <h2 className='text-[inter] font-bold text-base sm:text-lg mb-1'>
        Have 24/7 Access To Your Records
      </h2>
      <p className='font-medium mb-8'>
        Lorem ipsum lgdkjg dfjgndfg i lfdg Lorem ipsum lgdkjg
        <br className='hidden sm:block' /> dfjgndfg i lfdg Lorem ipsum lgdkjg
        dfjgndfg i lfdg.
      </p>
      <h2 className='text-[inter] font-bold text-base sm:text-lg mb-1'>
        Secure Platform for Record Storing
      </h2>
      <p className='font-medium mb-8'>
        HIPPA compliance by using security software that
        <br /> ensures patient information is shared safely.
      </p>
      <h2 className='text-[inter] font-bold text-base sm:text-lg text-lg mb-1'>
        Cross-Provider Collaboration
      </h2>
      <p className='font-medium mb-8'>
        Send results from one service provider to another
        <br /> allowing seamless collaboration between your services.
      </p>
      <button className='w-full md:w-auto active:scale-[.95] active:duration-75 transition-all bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-6 rounded-full hover:scale-[1.01] duration-500'>
        Get Started
      </button>
    </div>
  );
};

export default Features;
