import React from 'react';

const Hero = () => {
  const date = new Date();
  const year = date.getFullYear() - 2019;
  const NumberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
  return (
    <div className='p-5 h-screen flex flex-col justify-center items-center text-indigo-700 uppercase'>
       <div className="blob"></div>
      <div className='text-5xl md:text-7xl lg:text-8xl  font-extrabold text-left leading-none ' >
        <h1 className=''>Zeeshan Ahmed</h1>
        <h1 className=''>Software engineer</h1>
        <h1 className=''>front-end Developer</h1>
      </div>
      <p className='font-semibold text-lg w-full lg:w-3/5 mt-5'>I hold a Bachelor's degree in Computer Science & Engineering, specializing in Technology. 
      With over {NumberArr[year]} years of industry experience, I have been working as a frontend developer primarily focusing on JavaScript.</p>
    </div>
  )
}

export default Hero