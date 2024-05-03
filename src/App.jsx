import './App.css'
import Courses from './Components/Courses/Courses'
import ViewCourse from './Components/Courses/viewCourses/ViewCourse'
import Home from './Components/Home/Home'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'
import Settings from './Components/Settings Components/Settings'

import { Routes,Route, Outlet } from 'react-router-dom'



function App() {
  

  return (
    
     <div className='bg-slate-50 '>
      <Navbar /> 

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home />} />
        <Route path='/courses' element={<Courses />} >
           {/* <Route path='/view_course' element={ <ViewCourse />} /> */}
        </Route>
        <Route path='/profile' element={ <Profile />} />
        <Route path='/settings' element={ <Settings />} />
      </Routes>
      
     </div>
 
  )
}

export default App
