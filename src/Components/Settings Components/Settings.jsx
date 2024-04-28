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
            <div className='flex items-center p-1 bg-pink-300 shadow-sm text-lg font-medium text-slate-600'>
                <svg width="26px" height="26px" viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"></circle> <path opacity="0.5" d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#1C274C" stroke-width="1.5"></path> </g></svg>
                <h1 className='text-left px-1'>
                Profile Settings
                </h1>
            </div>
            <div className='h-full'>
            <div className='flex items-center'>
                
                <button className='flex items-center text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150' 
                onClick={()=>setActiveMenuItem(intialValue)}
                >
                    <span>
                    <svg width="24px" height="24px" viewBox="-3.8 -3.8 27.60 27.60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2119.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978" id="profile_round-[#1346]"> </path> </g> </g> </g> </g></svg>
                </span>
                    Profile Info
                    </button>
            </div>
            <div>
            <button className='flex items-center text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:true,
                PersonalInfo:false,
                workExperience:false,
                projects:false
            })}>
                <span>
                <svg width="24px" height="24px" viewBox="-4.32 -4.32 32.64 32.64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>language_json</title> <rect width="24" height="24" fill="none"></rect> <path d="M5,3H7V5H5v5a2,2,0,0,1-2,2,2,2,0,0,1,2,2v5H7v2H5c-1.07-.27-2-.9-2-2V15a2,2,0,0,0-2-2H0V11H1A2,2,0,0,0,3,9V5A2,2,0,0,1,5,3M19,3a2,2,0,0,1,2,2V9a2,2,0,0,0,2,2h1v2H23a2,2,0,0,0-2,2v4a2,2,0,0,1-2,2H17V19h2V14a2,2,0,0,1,2-2,2,2,0,0,1-2-2V5H17V3h2M12,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1M8,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1m8,0a1,1,0,1,1-1,1A1,1,0,0,1,16,15Z"></path> </g></svg>
                </span>
                Skills and Languages</button>
            </div>
            <div>
            <button className='flex items-center text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:true,
                workExperience:false,
                projects:false
            })}>
                <span>
                <svg width="24px" height="24px" viewBox="-32.64 -32.64 257.28 257.28" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" stroke="#000000" stroke-width="12"> <path stroke-linecap="round" d="M151.8 144.5a74 74 0 0 1-85.59 19.21A74 74 0 0 1 22.42 87.7a74 74 0 0 1 59.55-64.42m28.03.06a74 74 0 0 1 50.06 35.61 74 74 0 0 1 5.915 61.15"></path> <path d="M76 92h40c4.432 0 8 3.568 8 8v22c0 4.432-3.568 8-8 8H76c-4.432 0-8-3.568-8-8v-22c0-4.432 3.568-8 8-8zm4 0V77.7C80 69.029 87.163 62 96 62s16 7.029 16 15.7V92"></path> </g> </g></svg>
                </span>
                Personal Information</button>
            </div>
            <div>
            <button className='flex items-center text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:false,
                workExperience:true,
                projects:false
            })}>
                <span>
                <svg width="24px" height="24px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
                Work Experience</button>
            </div>
            <div>
            <button className='flex items-center text-white text-lg p-2 hover:bg-white w-full text-left hover:text-slate-600 transition ease-in-out duration-150'
            onClick={()=>setActiveMenuItem({
                profile:false,
                skills:false,
                PersonalInfo:false,
                workExperience:false,
                projects:true
            })}>
                <span>
                <svg width="24px" height="24px" viewBox="-87.04 -87.04 686.08 686.08" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>project-new</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill="#000000" transform="translate(64.000000, 34.346667)"> <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"> </path> </g> </g> </g></svg>
                </span>
                Projects</button>
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
