import React from 'react'
import Blog from './Blog'
import TrendingArticles from './TrendingArticles'

const Blogs = () => {

  const blogs=[
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
    {
      title:"How to host a Next.js app in Production on an Ubuntu VPS",
      description:"Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
      author:"Jhon Doe",
      date:"March 23, 2024"
    },
  ]
  return (
    <div  className=''>
      <div className='text-3xl text-left '>
        <h1 className='m-4 mx-5 text-black text-left border-b-2 p-2 border-pink-200'>
          Articles on Coding
        </h1>
      </div>
      <div className='flex justify-center'>
        <div className='w-2/3'>
          {blogs && 
                  blogs.map((item,index)=>{
                    return (<Blog blogdata={item} key={index}/>)
                  })          
          }
        </div>
        <div className='bg-white w-1/3 border-2 my-4 rounded-md'>
          <h1 className='text-center text-2xl m-2 p-2 font-medium '>Trending Articles</h1>
          <div>
             <TrendingArticles />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
