import React from 'react';
import { Link } from 'react-router-dom';

import TestResults from './TestResults';
import PopUpMenu from './PopUpMenu';
import SearchBar from './SearchBar';
import UploadedDocuments from './UploadedDocuments';
import PendingRequests from './PendingRequests';

import { questioncircleoutlined } from '../assets';
import { useAuthContext } from '../hooks/useAuthContext';

const MySpace = () => {
  const { user, loading, error, dispatch } = useAuthContext();
  const name = user.first_name + ' ' + user.last_name;
  return (
    <div className='flex-col justify-center w-full h-full bg-gray-100 py-10 px-5 md:px-20'>
      <Link to='/help' className='flex justify-end gap-x-2 '>
        <img src={questioncircleoutlined} className='w-4 h-4' />
        <p className='text-[#4E71D4] text-xxs sm:text-xs'>Help & Feedback </p>
      </Link>
      <p className='font-[Poppins] font-extralight text-sm sm:text-2xl'>
        Hello, {name}!
      </p>
      <PopUpMenu />
      <div className='hidden sm:flex pt-3 pr-12'>
        <SearchBar />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-8 gap-4 h-1/2'>
        <div className='grid sm:grid-rows-2 gap-5'>
          <UploadedDocuments />
          <PendingRequests />
        </div>
        <div className='row-span-2'>
          <TestResults />
        </div>
      </div>
    </div>
  );
};

export default MySpace;
