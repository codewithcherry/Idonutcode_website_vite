import './App.css'
import Courses from './Components/Courses/Courses'
import ViewCourse from './Components/Courses/viewCourses/ViewCourse'
import Home from './Components/Home/Home'

import Navbar from './Components/Navbar'



function App() {
  

  return (
    
     <div className='bg-slate-50 '>
      <Navbar /> 
      {/* <Home /> */}
      {/* <Courses /> */}
      <ViewCourse />
     </div>
 
  )
}

export default App
