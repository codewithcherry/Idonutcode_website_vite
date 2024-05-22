import React from 'react'

const TrendingArticles = () => {
  
    const topArticles=[]

  return (
    <div>
      <div className='bg-slate-50'>
        <ul>
            <h2 className='text-2xl text-slate-700 font-medium text-left'>Top 10 Articles</h2>
            {
                topArticles &&

                topArticles.map((item,index)=>{
                    return (
                        <div className='flex mx-1'>
                            <span>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </span>
                            <li className='text-lg text-left text-slate-600 hover:cursor-pointer' key={index}>{item.title}</li>
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
