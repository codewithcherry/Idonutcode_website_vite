import React from 'react'

const Blog = ({blogdata}) => {
  return (
    <div className='m-4 p-2 bg-white w-2/3 border-2 shadow-md rounded-md'>
      <div>
        <h1 className='text-3xl text-left font-medium text-slate-600 m-2'>Introduction to neuro palsma bases processor for super computing</h1>
        <p className='text-lg m-2 text-slate-400'>This is the description for the above given title which will be given on blog glance card for understanding the design metrics for the above given paragarph just writing the next lines to undersand teh given bussines of the issue</p>
      </div>
      <div className='flex items-center m-2'>
        <div>
            <img src="https://img.freepik.com/free-photo/side-view-ofserious-man_23-2148946213.jpg" alt="" className='h-12 w-12 rounded-full'/>
        </div>
        <div className='flex text-slate-600 m-2 font-medium'>
            <h2>Jhon Doe</h2>
            <span className='mx-1'>|</span>
            <p>12 jan, 2024</p>
        </div>
      </div>
      <div className='text-right'>
        <button className='m-2 p-2 text-lg font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500'> Read more</button>
      </div>
    </div>
  )
}

export default Blog
