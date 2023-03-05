import React from 'react';
import { GetStarted, LearnMore } from '../components';

const GreenPalette = () => {
  return (
    <div className='w-full bg-greenPalette rounded-palette flex flex-col justify-center items-center h-[200px] bg-opacity-80 px-10 py-12'>
      <h1 className='font-rufina leading-3 text-[20px] text-white ss:leading-[43px] mb-2'>
        Create Your <br className='sm:block hidden' /> Personal Health Space
      </h1>
      <p className='flex-1 font-inter font-normal text-primary text-[12px] mt-0.5 mb-2'>
        {' '}
        A secure electronic portal that allows you to receive, store, and stay
        <br /> informed of your interactions with your healthcare providers.
      </p>
      <div className='flex flex-col space-y-4 items-center md:mr-4 mr-0'>
        <GetStarted />
        <LearnMore />
      </div>
    </div>
  );
};

export default GreenPalette;
