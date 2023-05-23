import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col align-middle mt-14 w-full px-5 text-indigo-700 '>
      <div className='flex flex-col md:flex-row justify-around md:text-center uppercase pb-6'>
        <a href='mailto:zeeshanahmed959@gmail.com' className='flex-1 font-bold text-indigo-700'>zeeshanahmed959@gmail.com</a>
        <a className='text-indigo-700 flex-1 font-bold' href='https://www.linkedin.com/in/zeeshanahmed959/' target='_blank' rel="noreferrer">LINKEDIN</a>
        <a className='text-indigo-700 flex-1 font-bold' href="https://www.martin-laxenaire.fr/" target='_blank' rel="noreferrer">INSPIRED BY MARTIN LAXENAIRE's PORTFOLIO</a>
      </div>
      <h1 className='text-7xl md:text-9xl md:text-center font-black pb-12'>GET IN TOUCH</h1>
    </div>
  )
}

export default Footer