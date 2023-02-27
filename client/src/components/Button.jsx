import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-4 rounded-full sm:ml-8 hover:bg-dimBlue duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
