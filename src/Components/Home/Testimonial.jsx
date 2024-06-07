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
                            <svg width="64px" height="64px" viewBox="-3.36 -3.36 30.72 30.72" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path> </g> </g></svg>
                            </span>
                                <h2 className='text-center text-lg text-slate-600'>"{item.title}"</h2>
                                <p className='text-md text-slate-400'>{item.desscription}</p>
                                <div className='flex justify-end'>
                                    <div className='m-1 my-2'>
                                        <p className='text-right text-lg text-slate-600 font-semibold'>{item.userName}</p>
                                        <p className='text-right text-sm text-slate-500'>{item.position}</p>
                                    </div>
                                    <div className='m-1'>
                                        <img className='h-12 w-12 rounded-full shadow-md' src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944" alt="" />
                                    </div>
                                </div>
                                
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
