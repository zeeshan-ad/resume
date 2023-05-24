import React from 'react';

const ErrorPage = () => {
  return (
    <div className='p-5 h-screen flex flex-col justify-center items-center text-indigo-700 uppercase'>
      <div className="blob z-0"></div>
      <div className='text-5xl md:text-7xl lg:text-8xl  font-extrabold text-left leading-none ' >
        <h1 className=''>404</h1>
      </div>
      <p className='font-semibold text-lg mt-5 z-50'>Looks like you're lost<br/> Go back to &nbsp;
      <a href='/' className='underline text-indigo-700'>Homepage</a></p>
    </div>
  )
}

export default ErrorPage;