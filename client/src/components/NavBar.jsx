import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Button from './Button';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='shadow-md w-full relative'>
      <div className='sm:flex items-center justify-between bg-primary py-4 sm:pdx-10 px-7'>
        <div className='font-normal text-base ss:text-xl cursor-pointer flex items-center font-[Rufina]'>
          <img src={logo} alt='ohs' className='w-[40px] h-[36px]' />
          <Link to='/'>OneHealthSpace</Link>
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
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <Link to='/login'>
            <button className='active:scale-[.95] active:duration-75 transition-all bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-4 rounded-full sm:ml-8 hover:scale-[1.01] duration-500'>
              My Space
            </button>
          </Link>
        </ul>
      </div>
      <div className='absolute right-8 top-6 cursor-pointer sm:hidden'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[15px] h-[15px] ss:w-[22px] ss:h-[22-px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <ul
        className={`${
          toggle ? '' : 'hidden'
        } sm:hidden pb-12 absolute left-0 w-full pl-9 transition-all duration-500 ease-in bg-white`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-[Rufina] font-normal cursor-pointer text-[14px] ss:text-[16px] my-7 sm:hidden`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <Link to='/login'>
          <button className='active:scale-[.95] active:duration-75 transition-all bg-greenPalette text-white font-[Inter] font-normal text-[13px] py-2 px-4 rounded-full sm:ml-8 hover:scale-[1.01] duration-500'>
            My Space
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
