import React from 'react';
import { Link } from 'react-router-dom';

import PendingRequestsCard from './PendingRequestsCard';
import EmptyRecord from './EmptyRecord';

const PendingRequests = () => {
  const pendingRequests = [
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
  ];

  return (
    <div className='bg-white p-6 rounded-md'>
      <div className='flex justify-between content-center '>
        <p className='text-xs sm:text-base font-inter font-medium'>
          Pending Requests
        </p>
        <Link
          to='/testsresults'
          className='underline underline-offset-2 text-xxs sm:text-xs font-inter font-semibold'
        >
          View more
        </Link>
      </div>
      {pendingRequests.length === 0 ? (
        <EmptyRecord />
      ) : (
        <ul className='grid grid-cols-1 divide-y'>
          {pendingRequests.map((pendingRequest, index) => (
            <li key={index} className='grid grid-cols-1 divide-y'>
              <PendingRequestsCard pendingRequest={pendingRequest} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingRequests;
