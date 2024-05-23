import React from 'react'
import aboutpage1 from './images/aboutpage1.png'

const AboutCompany = () => {
  return (
    <div className=''>
       <div>
        <h1 className='text-3xl text-black font-medium text-center m-2 p-2'>
            About-Us
        </h1>
       </div>
      <div className='my-6'>
        <div className='flex justify-center items-center m-2 p-2 my-6'>
            <div className='w-2/5'>
                <h1 className='text-2xl font-medium text-center m-2 p-2 underline underline-offset-8 '>Our Company</h1>
                <p className='text-md text-slate-600 m-2 p-2 '>THis is the paragraph were will be talking about the idonutcode website to make the design look more apppealing to the users and make sense while designing and coding the project</p>
            </div>
            <div className='w-2/5'>
                <img className='h-80  rounded-md ' src="https://resources.owllabs.com/hubfs/Blog%20Images/Stock/Office/Office-3343205_1152px.jpg" alt="" />
            </div>
        </div>

        <div className='flex justify-center items-center m-2 p-2 my-6'>
            <div className='w-2/5'>
                <img className='h-80 rounded-md  ' src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg" alt="" />
            </div>
            <div className='w-2/5'>
                <h1 className='text-2xl font-medium text-center m-2 p-2 underline underline-offset-8'>Our mission</h1>
                <p className='text-md text-slate-600 m-2 p-2 '>THis is the paragraph were will be talking about the idonutcode website to make the design look more apppealing to the users and make sense while designing and coding the project</p>
            </div>   
        </div>
      
      </div>
    </div>
  )
}

export default AboutCompany
