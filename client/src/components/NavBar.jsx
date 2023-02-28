import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Button from './Button';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='sm:flex items-center justify-between bg-primary py-4 sm:pdx-10 px-7'>
        <div className='font-normal text-xl cursor-pointer flex items-center font-[Rufina]'>
          <img src={logo} alt='ohs' className='w-[40px] h-[36px]' />
          OneHealthSpace
        </div>
        <ul
          className={`hidden sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in`}
        >
          {' '}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-[Rufina] font-normal cursor-pointer text-[16px] sm:my-0 my-7 ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-5'
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <Button>My Space</Button>
        </ul>
      </div>
      <div className='absolute right-8 top-6 cursor-pointer sm:hidden'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[22px] h-[22-px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <ul
        className={`${
          toggle ? '' : 'hidden'
        } sm:hidden pb-12 absolute z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in bg-white`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-[Rufina] font-normal cursor-pointer text-[16px] my-7 sm:hidden`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <Button>My Space</Button>
      </ul>
    </nav>
  );
};

export default NavBar;
