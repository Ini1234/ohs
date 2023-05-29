import React from 'react';

const ContactFields = () => {
  return (
    <div className='flex flex-col justify-center items-center p-6 w-full'>
      <div className='w-full ss:w-[80%] ss:max-w-xl'>
        <div className='mt-5 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
            placeholder='First Name'
          />
        </div>
        <div className='mt-5 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
            placeholder='Last Name'
          />
        </div>
        <div className='mt-5 md:mt-5'>
          <input
            className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
            placeholder='Email'
          />
        </div>
        <div className='mt-2 relative'>
          <div className='w-full'>
            <textarea
              className='w-full border border-1 border-black border-solid p-2 rounded font-[Inter] text-xs'
              placeholder='Message'
              rows='6'
              cols='50'
            />
          </div>
        </div>
        <div>
          <button className='active:scale-[.95] active:duration-75 transition-all mt-6 w-full bg-greenPalette text-white font-[Poppins] font-normal text-[13px] py-2 px-4 rounded-full hover:scale-[1.01] duration-500'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFields;
