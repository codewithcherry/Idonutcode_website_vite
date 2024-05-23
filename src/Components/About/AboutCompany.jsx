import React from 'react'
import {aboutpage1} from './images/aboutpage1'

const AboutCompany = () => {
  return (
    <div>
      <div>
        <div className='flex justify-center'>
            <div>
                <h1>Our Company</h1>
                <p>THis is the paragraph were will be talking about the idonutcode website to make the design look more apppealing to the users and make sense while designing and coding the project</p>
            </div>
            <div>
                <img src={aboutpage1} alt="" />
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default AboutCompany
