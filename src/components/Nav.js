import React from 'react'

const Nav = () => {
  const date = new Date();
  return (
    <div>
      <p className='text-lg text-indigo-700 text-center pt-5 absolute right-0 left-0'>resume@{date.getFullYear()}</p>
    </div>
  )
}

export default Nav