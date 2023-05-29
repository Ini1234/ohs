import React from 'react';
import { beltlogo } from '../assets';

const Belt = () => {
  return (
    <div className='bg-greenPalette text-white font-normal cursor-pointer flex flex-col ss:flex-row items-center p-4 justify-evenly lgl:px-0'>
      <p className='font-[Rufina] font-bold px-3 xs:px-5 ss:px-8 text-[14px] xs:text-[15px] md:text-[20px]'>
        Patients should have as easy of access to their medical records as{' '}
        <br className='hidden sm:block' />
        their healthcare providers; without the varying processing times
      </p>
      <img
        src={beltlogo}
        alt='ohs'
        className='hidden ss:flex w-[105px] h-[105px] py-1'
      />
    </div>
  );
};

export default Belt;
