import React from 'react'

const Blog = ({blogdata}) => {
  return (
    <div className='m-4 p-2 bg-white w-2/3 border-2 shadow-md rounded-md'>
      <div>
        <h1 className='text-3xl text-left font-medium text-slate-600 m-2'>{blogdata.title}</h1>
        <p className='text-lg m-2 text-slate-400'>{blogdata.description}</p>
      </div>
      <div className='flex items-center m-2'>
        <div>
            <img src="https://img.freepik.com/free-photo/side-view-ofserious-man_23-2148946213.jpg" alt="" className='h-12 w-12 rounded-full'/>
        </div>
        <div className='flex text-slate-600 m-2 font-medium'>
            <h2>{blogdata.author}</h2>
            <span className='mx-1'>|</span>
            <p>{blogdata.date}</p>
        </div>
      </div>
      <div className='text-right'>
        <button className='m-2 p-2 text-lg font-medium text-white bg-pink-400 rounded-lg shadow-sm hover:bg-pink-500'> Read more</button>
      </div>
    </div>
  )
}

export default Blog
