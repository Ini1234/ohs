import React from 'react';
import Features from './Features';
import { features } from '../constants';
import { mobilephone1 } from '../assets';

const About = () => {
  return (
    <section className='p-8'>
      <div className='text-center mb-1 sm:mb-14'>
        <p>
          <span className='text-[rufina] font-normal text-lg'>
            Providing users access to their digital health records
          </span>
          <br />
          <span className='underline text-[rufina] font-normal text-lg'>
            One One Platform
          </span>
        </p>
      </div>
      <div className='flex flex-col ss:flex-row mt-0 sm:mt-10 justify-center items-center'>
        <div className='m-7'>
          <img
            src={mobilephone1}
            alt='mobile phone'
            className='object-contain no-repeat p-2 w-full'
          />
        </div>
        <Features />
      </div>
    </section>
  );
};

export default About;
