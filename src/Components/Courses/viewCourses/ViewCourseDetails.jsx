import React from 'react'

const ViewCourseDetails = () => {
  return (
    <div>
      <div className='flex w-full '>
                    <ul className='flex justify-around w-full text-left text-xl '>
                        <li className='text-left font-medium text-slate-600 hover:border-b-2 hover:border-pink-500 p-2 hover:inset-2'>About</li>
                        <li className='text-left font-medium text-slate-600 hover:border-b-2 hover:border-pink-500 p-2'>Certificaion</li>
                        <li className='text-left font-medium text-slate-600 hover:border-b-2 hover:border-pink-500 p-2'>Q&A</li>
                        <li className='text-left font-medium text-slate-600 hover:border-b-2 hover:border-pink-500 p-2'>Notes</li>
                    </ul>
    </div>
    </div>
  )
}

export default ViewCourseDetails
