import React from 'react'
import { useState } from 'react'

const SettingsProjects = () => {

const intialValue={
  projectTitle:"",
  shortDescription:'',
  technologies:null,
  projectUrl:''
}

const [formInput,setFormInput]= useState(intialValue)
const [projects,setProjects]=useState([])

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormInput({...formInput,[name]:value})
}

const handletechnologies=(e)=>{

  const {name,value}= e.target
  setFormInput({...formInput,[name]:value.split(",")})

}

  return (
    <div className='bg-white overflow-y-scroll'>
      <div className='p-2 m-2'>
        <h1 className='text-xl text-slate-600 font-semibold text-center'>Projects</h1>
        <p className='text-sm text-red-500 text-center'>You can edit your projects from here, click on edit to update</p>
      </div>
      <div>
        <div className='p-4 m-2 border-2 rounded-md shadow-md'>
           <form >
            <div className='relative m-2 p-2'>
              <label htmlFor="projectname" className='absolute top-0 left-5 text-md px-1 bg-white'>Project Name</label>
              <input className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' type="text" id='projectTitle' name='projectTitle' placeholder='Title of the project' value={formInput.projectTitle} onChange={handleChange} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="shortDescription" className='absolute top-0 left-5 text-md px-1 bg-white'>Short Project Description </label>
              <textarea className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' rows={5} cols={50} maxLength={200} type="text" id='shortDescription' name='shortDescription' placeholder='short description of the project' value={formInput.shortDescription} onChange={handleChange} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="projectname" className='absolute top-0 left-5 text-md px-1 bg-white'>Technologies</label>
              <input className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' type="text" id='technologies' name='technologies' placeholder='add technolgoies used in this project' value={formInput.technologies} onChange={handletechnologies} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="projectUrl" className='absolute top-0 left-5 text-md px-1 bg-white'>Project url</label>
              <input className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' type="url" id='projectUrl' name='projectUrl' placeholder='project link' value={formInput.projectUrl} onChange={handleChange} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="projectname" className='p-2 text-md px-1 bg-white'>Project Cover</label>
              <div className="flex items-center">
              <img src="" alt="" className='m-2 p-2 h-36 w-1/2 shadow-md rounded-md' />
              <input className='m-2 p-2 rounded ' type="file" id='technologies' name='technologies'  />
              </div>
            </div>
            <div className='relative'>
              <input type="submit" value={"Add Project"}  className=' absolute right-0 bottom-1 m-2 p-2 bg-blue-400 font-semibold text-white rounded-2xl shadow-md hover:bg-blue-500'/>
            </div>

           </form>
        </div>
      </div>
    </div>
  )
}

export default SettingsProjects
