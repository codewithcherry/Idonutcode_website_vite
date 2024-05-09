import React from 'react'
import banner from "./banner.png"
import { Link } from 'react-router-dom'

const LandingBanner = () => {
  return (
    <div >
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold m-2 '>Welcome to <span className=' text-pink-400'>IdonutCode</span></h1>
          <h2 className='text-2xl font-semibold m-2 '>Learn <span className='animate-changeword text-pink-400 text-2xl'></span></h2>
          <p className='m-2 text-lg text-slate-500'>Struggling to believe you can learn to code? Idonutcode is here to empower everyone, regardless of background, to embark on their coding journey. Our platform breaks down complex coding concepts into manageable steps,  making them accessible and engaging. </p>
          <div>
            <button className='bg-pink-300 hover:bg-pink-500 m-2 p-2 rounded-lg text-white font-bold shadow-md'>Explore Page</button>
            <Link to="/courses" className='bg-white  border-slate-400 border-2 m-2 p-2 rounded-lg text-slate-500 shadow-lg  font-bold hover:text-white hover:bg-slate-500 '>
              Courses</Link>
          </div>
        </div>
        <div>
          <img src={banner} className='h-80 w-80' alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingBanner
