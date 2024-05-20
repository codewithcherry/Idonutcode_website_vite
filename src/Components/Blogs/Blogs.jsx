import React from 'react'

const Blogs = () => {

  const blogs={}
  return (
    <div  className='h-screen'>
      <div className='text-2xl text-left font-medium'>
        <h1 className='m-4 text-black'>
          Blogs on Coding
        </h1>
      </div>
      <div>
        <div>
          {
            blogs? <p className='text-xl text-center font-medium text-slate-600 bg-white p-2 m-2 rounded-md shadow-sm'>No blogs to show</p>:"blogs will be shown here"
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs
