import React from 'react'
import CoursePage from './CoursePage'
import ViewCourse from './viewCourses/ViewCourse'
import { Route ,Outlet} from 'react-router-dom'

const Courses = () => {
  return (
   
    <div>  
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Courses
