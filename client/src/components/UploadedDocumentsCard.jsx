import React from 'react';
import { Link } from 'react-router-dom';
import { testresultsicon } from '../assets';

const UploadedDocumentsCard = (props) => {
  const uploadedDocument = props.uploadedDocument;
  return (
    <div className='flex py-4 pl-2 justify-between'>
      <img src={testresultsicon} className='hidden sm:flex w-8 h-8' />
      <div className='flex flex-col px-2'>
        <p className='text-xs sm:text-md'>{uploadedDocument.doc_name}</p>
        <p className='text-xs'>Recieved By: {uploadedDocument.recieved_by}</p>
      </div>
      <div className=''>
        <Link
          to='/'
          className='flex items-center justify-center rounded text-xs py-1 px-4 bg-greenPalette text-white font-light'
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default UploadedDocumentsCard;
