import './App.css'
import Courses from './Components/Courses/Courses'
import Home from './Components/Home/Home'

import Navbar from './Components/Navbar'



function App() {
  

  return (
    
     <div className='bg-slate-50 '>
      <Navbar /> 
      {/* <Home /> */}
      <Courses />
     </div>
 
  )
}

export default App
