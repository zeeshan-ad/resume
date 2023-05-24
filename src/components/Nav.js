import React from 'react';
import './Nav.css';

const Nav = () => {
  const date = new Date();

  return (
    <div className='flex flex-row justify-center w-full px-5 pt-5 text-md md:text-lg text-indigo-700 text-center font-medium'>
      <a className='text-indigo-700' href='/'>resume@{date.getFullYear()}</a>
    </div>
  )
}

export default Nav