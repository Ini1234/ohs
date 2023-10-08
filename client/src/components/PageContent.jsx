import React from 'react';
import { Link } from 'react-router-dom';

const PageContent = (props) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='py-5 text-2xl lg:text-lg font-bold'>
        {props.content.title}. {props.content.message}
      </h1>
      <h2>
        Please, return to{' '}
        <Link to='/' className='text-secondaryTextColor'>
          OneHealthSpace
        </Link>
      </h2>
    </div>
  );
};

export default PageContent;
