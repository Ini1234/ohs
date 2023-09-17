import React from 'react';
import { Link } from 'react-router-dom';
import EmptyRecord from './EmptyRecord';
import UploadedDocumentsCard from './UploadedDocumentsCard';

const UploadedDocuments = () => {
  const uploadedDocument = [
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
        <p className='font-inter font-medium'>Uploaded Documents</p>
        <Link
          to='/testsresults'
          className='underline underline-offset-2 text-xs font-inter font-semibold'
        >
          View more
        </Link>
      </div>
      {uploadedDocument.length === 0 ? (
        <EmptyRecord />
      ) : (
        <ul className='grid grid-cols-1 divide-y'>
          {uploadedDocument.map((uploadedDocument, index) => (
            <li key={index} className='grid grid-cols-1 divide-y'>
              <UploadedDocumentsCard uploadedDocument={uploadedDocument} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadedDocuments;
