import React from 'react';

const Edu = () => {
  return (
    <main className='mb-10 mt-5 w-full text-indigo-700 flex flex-row flex-wrap md:flex-nowrap'>
      <aside className='w-full md:w-1/3 mx-5 py-3 flex flex-col align-middle'>
        <h2 className='font-medium'>University Of Engineering &amp; Management, Kolkata <br/> (2015 - 2019)</h2>
        <p>Bachelors of Technology in Computer Science and Engineering, placed in first class with distinction. 8.04 CGPA.</p>
      </aside>
      <aside className='w-full md:w-1/3 mx-5 py-3 flex flex-col align-middle'>
        <h2 className='font-medium'>St Thomas' Day School <br/> (2013 - 2015)</h2>
        <p>Completed higher secondary education from Indian School Certificate.</p>
      </aside>
      <aside className='w-full md:w-1/3 mx-5 py-3 flex flex-col align-middle'>
        <h2 className='font-medium'>St Mary's School <br/> (2001 - 2013)</h2>
        <p>Completed secondary education from Indian Certificate of Secondary Education.</p>
      </aside>
    </main>
  )
}

export default Edu