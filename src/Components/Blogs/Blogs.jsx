import React from 'react'
import Blog from './Blog'

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
    <div  className='h-screen'>
      <div className='text-2xl text-left font-medium'>
        <h1 className='m-4 text-black'>
          Blogs on Coding
        </h1>
      </div>
      <div>
        <div>
          {blogs && 
                  blogs.map((item,index)=>{
                    return (<Blog blogdata={item} key={index}/>)
                  })          
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs
