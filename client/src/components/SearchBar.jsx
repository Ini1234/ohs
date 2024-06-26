// 'use client';
// import React, { ChangeEvent, useState } from 'react';

// export type SearchProps = {
//   onSearch: (value: string) => void,
// };

const SearchBar = () => {
  //   const { onSearch } = props;
  // const [value, setValue] = useState('Enter search...');

  //   const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { target } = event;
  //     setValue(target.value);
  //   };

  //   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (event.key === 'Enter') {
  //       // Here, we call the onSearch function and pass the value
  //       onSearch(value);
  //     }
  //   };

  return (
    <div className='relative w-1/2 text-gray-600'>
      <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
        <svg
          className='h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <input
        type='search'
        name='search'
        placeholder='Search'
        className='bg-white h-10 px-5 pr-10 w-full rounded-lg border border-gray-300 text-sm focus:outline-none'
        // onChange={(event) => searchHandler(event)}
        // onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
