import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  bell,
  chart_pie,
  clipboard_list,
  collection,
  document_report,
  inbox_in,
  lock_closed,
  shopping_bag,
  support,
} from '../assets';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const { user, loading, error, dispatch } = useAuthContext();

  console.log('user: ', user);

  const clientInitials = 'IE';
  const clientEmail = 'iniabasi.e@yahoo.com';

  const clientMenu = [
    { title: 'Home', linkTo: '/myspace', src: shopping_bag },
    { title: 'Chats', linkTo: '/myspace/chats', src: chart_pie },
    {
      title: 'Appointment',
      linkTo: '/myspace/appointments',
      src: document_report,
    },
    {
      title: 'Health providers ',
      linkTo: '/myspace/providers',
      src: inbox_in,
    },
    { title: 'Test results', linkTo: '/testsresults', src: lock_closed },
  ];

  const accountMenu = [
    { title: 'Payment', linkTo: '/myspace/payments', src: clipboard_list },
    {
      title: 'Profile Setting',
      linkTo: '/myspace/settings',
      src: collection,
    },
    {
      title: 'Terms & Conditions',
      linkTo: '/termsandconditions',
      src: support,
    },
  ];
  return (
    <div className='p-4 bg-white max-w-xs'>
      <div className=''>
        <div className='flex flex-col gap-y-2'>
          <div>
            <div className='flex justify-between'>
              <p className={`${!open && 'hidden'} text-md`}>OneHealthSpace</p>
              <div className='flex gap-x-2'>
                <p className='rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center'>
                  {clientInitials}
                </p>
                <img
                  src={bell}
                  className={`cursor-pointer duration-500 ${
                    open && 'rotate-[360deg]'
                  }`}
                />
              </div>
            </div>
            <p className={`text-xs mt-2 ${!open && 'hidden'}`}>Client</p>
            <p className={`text-xs ${!open && 'hidden'}`}>{clientEmail}</p>
          </div>
          {/* <div className='mt-6'>
            <img src='./src/assets/line_4.png' />
          </div> */}
          <div
            className={` ${
              open ? 'w-72' : 'w-20 '
            } bg-dark-purple h-screen  pt-8 relative duration-300`}
          >
            <img
              src='./src/assets/control.png'
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            />
            <div className='flex gap-x-4 items-center'>
              <h1
                className={`text-gray-400 origin-left font-medium text-sm duration-200 ${
                  !open && 'scale-0'
                }`}
              >
                CLIENT
              </h1>
            </div>
            <ul className=''>
              {clientMenu.map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={menu.linkTo}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-100 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 hover:bg-gray-100 visited:bg-gray-100'
                        : 'flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 hover:bg-gray-100 visited:bg-gray-100'
                    }
                    end
                  >
                    <img src={menu.src} />
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {menu.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className='flex gap-x-4 mt-6 items-center'>
              <h1
                className={`text-gray-400 origin-left font-medium text-sm duration-200 ${
                  !open && 'scale-0'
                }`}
              >
                MANAGE ACCOUNT
              </h1>
            </div>
            <ul className=''>
              {accountMenu.map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={menu.linkTo}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-100 flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 hover:bg-gray-100 visited:bg-gray-100'
                        : 'flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 hover:bg-gray-100 visited:bg-gray-100'
                    }
                    end
                  >
                    <img src={menu.src} />
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {menu.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
