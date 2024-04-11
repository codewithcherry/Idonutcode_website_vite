import React from 'react'
import { useState } from 'react'
import SettingsPersonalInfo from './SettingsPersonalInfo'
import SettingsSkillLanguages from './SettingsSkillLanguages'
import SettingProfileInfo from './SettingProfileInfo'
import SettingsWorkExperience from './SettingsWorkExperience'
import SettingsProjects from './SettingsProjects'

const Settings = () => {
    const intialValue={
        profile:true,
        skills:false,
        PersonalInfo:false,
        workExperience:false,
        projects:false
    }
    const [activeMenuItem,setActiveMenuItem]=useState(intialValue)
  return (
    <div className='h-screen'>
      <div className='flex h-full'>
        <div className='flex flex-col  bg-pink-400 w-1/5 h-full m-0  shadow-lg '>
            <div className='h-full'>
            <div>
                <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150' 
                onClick={()=>setActiveMenuItem(intialValue)}
                >Profile Info</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:true,
                PersonalInfo:false,
                workExperience:false,
                projects:false
            })}>Skills and Languages</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:true,
                workExperience:false,
                projects:false
            })}>Personal Information</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:false,
                workExperience:true,
                projects:false
            })}>Work Experience</button>
            </div>
            <div>
            <button className='text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:false,
                workExperience:false,
                projects:true
            })}>Projects</button>
            </div>
            </div>
            <div className='w-full bg-pink-300'>
                <div className='flex p-2 items-center'>
                    <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/i4tco5mevgo92sf4uj6qa3kfjq._SY450_CR112%2C0%2C450%2C450_.jpg" alt="" className='h-12 w-12 shadow-lg rounded-full'/>
                    <p className='mx-2 text-lg text-white'>Jhon Doe</p>
                </div>
            </div>
            
        </div>
        <div className='h-full w-4/5'>
            {
                activeMenuItem.profile && <SettingProfileInfo />
            }
            {
                activeMenuItem.skills && <SettingsSkillLanguages />
            }
            {
                activeMenuItem.PersonalInfo && <SettingsPersonalInfo />
            }
            {
                activeMenuItem.workExperience && <SettingsWorkExperience />
            }
            {
                activeMenuItem.projects && <SettingsProjects />
            }
        </div>
      </div>
    </div>
  )
}

export default Settings
