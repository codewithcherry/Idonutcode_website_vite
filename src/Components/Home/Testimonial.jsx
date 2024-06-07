import React from 'react'

const Testimonial = () => {

    const reviews=[
        {
            title:"Awesome",
            desscription:'This website and courses in it are really very helpful to me in securing my first tech job. Highly recommend to learn from here. The best part is all the courses are for free.',
            userName:"Mark Philips",
            position:"Associate Software Developer"
        },
        {
            title:"Awesome",
            desscription:'This website and courses in it are really very helpful to me in securing my first tech job. Highly recommend to learn from here. The best part is all the courses are for free.',
            userName:"Mark Philips",
            position:"Associate Software Developer"
        },
        {
            title:"Awesome",
            desscription:'This website and courses in it are really very helpful to me in securing my first tech job. Highly recommend to learn from here. The best part is all the courses are for free.',
            userName:"Mark Philips",
            position:"Associate Software Developer"
        },
    ]

  return (
    <div>
      <div>
        <div className='text-center m-2 p-2'>
            <h1 className='text-2xl text-black font-semibold'>Testimonials</h1>
        </div>
        <div className='flex justify-center  m-4 p-2 s rounded-md'>
            {
                reviews.map((item,index)=>{
                        return (
                            <div key={index} className='w-1/4 mx-4 p-4 bg-white shadow-2xl rounded-lg'> 
                            <span>
                            <svg width="64px" height="64px" viewBox="-3 -3 26.00 26.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.04"></g><g id="SVGRepo_iconCarrier"> <title>quotes [#111]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7723.000000)" fill="#7d7d7c"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296,7563 L296,7571 L300,7571 L300,7575 L304,7575 L304,7563 L296,7563 Z M284,7563 L292,7563 L292,7575 L288,7575 L288,7571 L284,7571 L284,7563 Z" id="quotes-[#111]"> </path> </g> </g> </g> </g></svg>  
                            </span>
                                <h2 className='text-center text-lg text-slate-600'>"{item.title}"</h2>
                                <p className='text-md text-slate-400'>{item.desscription}</p>
                                
                                <p className='text-right text-lg text-slate-600 font-semibold'>{item.userName}</p>
                                <p className='text-right text-sm text-slate-500'>{item.position}</p>
                            </div>
                        )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonial
