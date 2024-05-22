import React from 'react'

const TrendingArticles = () => {
  
    const topArticles=[
        {
            title:"Discovery of UseContext() hook in react",
        },
        {
            title:"MongoDB Atlas drivers update",
        },
        {
            title:"MaterialUI new components using API Context",
        },
        {
            title:"Importance Express library in Web_development",
        },
        {
            title:"How prompt Engineering will be overtaken by many other jobs.",
        },
        {
            title:"Facebook released new framework for webdeveloped and going to scrap React.js?",
        },
        {
            title:"OpenAI is going start AI lead Workforce from 2027",
        },
        {
            title:"Next.js for full stack developement made easy?",
        },
        {
            title:"DataScience is the new trending and most hired position in the year 2024.",
        },
        {
            title:"Idonutcode added to top 10 unicorns in tech edtech bussiness",
        },
    ]

    const mostViewed=[
        {
            title:"Discovery of UseContext() hook in react",
        },
        {
            title:"MongoDB Atlas drivers update",
        },
        {
            title:"MaterialUI new components using API Context",
        },
        {
            title:"Importance Express library in Web_development",
        },
        {
            title:"How prompt Engineering will be overtaken by many other jobs.",
        },
    ]

  return (
    <div className='h-screen overflow-auto '>
      <div className=''>
        <ul>
            <h2 className='text-2xl text-slate-700 font-medium text-left m-2 p-2 border-b-4 border-pink-200'>Top 10 Articles</h2>
            {
                topArticles &&

                topArticles.map((item,index)=>{
                    return (
                        <div className='flex mx-1'>
                            <span>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </span>
                            <li className='text-md font-medium text-left text-slate-400 hover:cursor-pointer hover:text-blue-700' key={index}>{item.title}</li>
                        </div>
                    )
                })
            }
        </ul>
      </div>
      <div className=''>
        <ul>
            <h2 className='text-2xl text-slate-700 font-medium text-left m-2 p-2 border-b-4 border-pink-200'>Most Read Articles</h2>
            {
                mostViewed &&

                mostViewed.map((item,index)=>{
                    return (
                        <div className='flex mx-1'>
                            <span>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </span>
                            <li className='text-md font-medium text-left text-slate-400 hover:cursor-pointer hover:text-blue-700' key={index}>{item.title}</li>
                        </div>
                    )
                })
            }
        </ul>
      </div>
    </div>
  )
}

export default TrendingArticles
