import React from 'react'
import LandingBanner from './LandingBanner'
import Courses from './Courses'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <div>
            <LandingBanner />
        </div>
        <div>
            <Courses />
        </div>
        <div>
          <Testimonial />
        </div>
    </div>
  )
}

export default Home
