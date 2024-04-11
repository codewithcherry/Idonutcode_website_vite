import React from 'react'

const ProfileExperience = () => {

  return (
    <div className='m-2'>
      <div className='flex'>
        
        <h1 className='text-xl'>Experience</h1>
      </div>
      <div className='flex justify-between p-4  rounded-md'>
        <div>
            <h2 className='text-xl'>Google solutions</h2>
            <p className='text-lg text-slate-600'>Senior Backend Developer</p>
            <p className='text-gray-500'>3 Years Experience</p>
        </div>
        <div className='flex text-slate-600'>
            <p>month/year</p>
            <span>-</span>
            <p>month/year</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileExperience
