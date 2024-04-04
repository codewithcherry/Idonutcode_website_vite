import React from 'react'
import ProfileIntro from './ProfileComponents/ProfileIntro'
import ProfileContactInfo from './ProfileComponents/ProfileContactInfo'
import ProfileSkills from './ProfileComponents/ProfileSkills'
import ProfileLanguages from './ProfileComponents/ProfileLanguages'
import ProfileProjects from './ProfileComponents/ProfileProjects'

const Profile = () => {
  return (
    <div className='p-8 shadow-md'>
      <div className='shadow-md rounded-lg bg-white '>
        <ProfileIntro />
        <div className='bg-white rounded-lg p-2 flex justify-between'>
                <ProfileContactInfo />
            <div>
                <ProfileSkills />
                <ProfileLanguages />
            </div>
        </div>
        <ProfileProjects />
      </div>
    </div>
  )
}

export default Profile
