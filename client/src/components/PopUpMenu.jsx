import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PopUpMenu = () => {
  const [open, setOpen] = useState(true);
  const slides = [
    {
      title: 'Welcome to Onehealthspace Portal!',
      synopsis:
        'Lorem ipsum it sjf sfn ksljhf s Lorem ipsum it sjf sfn ksljhf s Lorem ipsum it sjf sfn ksljhf sLorem ipsum it sjf sfn ksljhf sLorem ipsum it sjf sfn ksljhf ',
      linkText: 'Watch a platform walkthrough tutorial',
      link: '/www.youtube.com',
    },
  ];
  return (
    <div className={`pt-4 ${open ? '' : 'hidden'}`}>
      <div className='bg-popupgreen border border-black rounded-lg'>
        {slides.map((slide, index) => (
          <div key={index} className='flex justify-between'>
            <div className='p-8'>
              <h1>{slide.title}</h1>
              <p className='mt-2 text-sm'>{slide.synopsis}</p>
              <Link to={slide.link} className='text-[#4E71D4] text-xs'>
                {slide.linkText}
              </Link>
            </div>
            <p
              className='cursor-pointer hover:scale-150 rounded-full h-2 w-2 md:h-4 md:w-4 bg-[#BCD71A] flex items-center justify-center m-2 text-xxs'
              onClick={() => setOpen(!open)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpMenu;
