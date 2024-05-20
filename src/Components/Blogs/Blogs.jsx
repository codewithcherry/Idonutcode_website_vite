import React from 'react'

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
          {
            blogs? <p className='text-xl text-center font-medium text-slate-600 bg-white p-2 m-2 rounded-md shadow-sm'>No blogs to show</p>:"blogs will be shown here"
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs
