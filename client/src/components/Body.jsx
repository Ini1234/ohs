import React from 'react';
import About from './About';
import Belt from './Belt';
import Hero from './Hero';
import Contact from './Contact';

const Body = () => {
  return (
    <div className='bg-primary w-full h-screen'>
      <div className='mt-15 py-4'>
        <Hero />
      </div>
      <div className='mt-15 md:mt-28 py-4'>
        <About />
      </div>
      <div className='mt-15 md:mt-28 py-4'>
        <Belt />
      </div>
      <div className='mt-8 py-4'>
        <Contact />
      </div>
    </div>
  );
};

export default Body;
