import React from 'react'

const Settings = () => {
  return (
    <div className='h-screen'>
      <div className='flex h-full'>
        <div className='flex flex-col  bg-pink-400 w-1/5 h-full m-0  shadow-lg '>
            <div className='h-full'>
            <div>
                <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600'>Profile Info</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600'>Skills and Languages</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600'>Personal Information</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600'>Work Experience</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600'>Projects</button>
            </div>
            </div>
            <div className='w-full bg-pink-300'>
                <div className='flex p-2 items-center'>
                    <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/i4tco5mevgo92sf4uj6qa3kfjq._SY450_CR112%2C0%2C450%2C450_.jpg" alt="" className='h-12 w-12 shadow-lg rounded-full'/>
                    <p className='mx-2 text-lg text-white'>Jhon Doe</p>
                </div>
            </div>
            
        </div>
        <div className='h-full w-4/5 bg-slate-300'>
            this section for active menu components
        </div>
      </div>
    </div>
  )
}

export default Settings
