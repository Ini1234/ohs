import React from 'react';
import { Link } from 'react-router-dom';
import TestResultCard from './TestResultCard';
import EmptyRecord from './EmptyRecord';

const TestResults = () => {
  const testResults = [
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
    {
      doc_name: 'Some Test',
      recieved_by: 'Slim John',
    },
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
        <p className='font-inter font-medium'>Test Results</p>
        <Link
          to='/testsresults'
          className='underline underline-offset-2 text-xs font-inter font-semibold'
        >
          View more
        </Link>
      </div>
      {testResults.length === 0 ? (
        <EmptyRecord />
      ) : (
        <ul className='grid grid-cols-1 divide-y'>
          {testResults.map((testResult, index) => (
            <li key={index} className='grid grid-cols-1 divide-y'>
              <TestResultCard testResult={testResult} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestResults;
