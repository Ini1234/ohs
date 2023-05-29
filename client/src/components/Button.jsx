import React from 'react';

const Button = (props) => {
  return (
    <button className='active:scale-[.95] active:duration-75 transition-all bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-4 rounded-full sm:ml-8 hover:scale-[1.01] duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
