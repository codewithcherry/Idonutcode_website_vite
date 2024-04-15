import { set } from 'firebase/database'
import React from 'react'
import { useState } from 'react'

const SettingsProjects = () => {

const intialValue={
  projectTitle:"",
  shortDescription:'',
  technologies:'',
  projectUrl:''
}

const [formInput,setFormInput]= useState(intialValue)
const [projects,setProjects]=useState([])

const [edit,setEdit]=useState(false)

const handleEdit=()=>{
  setEdit(true)
}

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormInput({...formInput,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  setProjects((prev)=>prev=[...projects,formInput])
  setFormInput(intialValue)
  
}

  return (
    <div className='bg-white overflow-y-scroll h-screen'>
      <div className='p-2 m-2'>
        <h1 className='text-xl text-slate-600 font-semibold text-center'>Projects</h1>
        <p className='text-sm text-red-500 text-center'>You can edit your projects from here, click on edit to update</p>
      </div>
      <div className='relative '>
         {!edit && <button onClick={handleEdit} className='absolute -top-4 right-2 p-2 rounded-2xl bg-slate-300 font-semibold text-white shadow-md'>edit <span></span></button>
}
      </div>
      <div>
        {edit && <div className='p-4 m-2 border-2 rounded-md shadow-md'>
           <form onSubmit={handleSubmit}>
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
              <input className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' type="text" id='technologies' name='technologies' placeholder='add technolgoies used in this project' value={formInput.technologies} onChange={handleChange} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="projectUrl" className='absolute top-0 left-5 text-md px-1 bg-white'>Project url</label>
              <input className='m-2 p-2 ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded ' type="url" id='projectUrl' name='projectUrl' placeholder='project link' value={formInput.projectUrl} onChange={handleChange} />
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="projectCover" className='m-2 p-2 text-md px-1 bg-white'>Project Cover</label>
              <div className="flex items-center">
              <img src="" alt="" className='m-2 p-2 h-36 w-1/2 shadow-md rounded-md ring-1 ring-slate-600 shadow-md' />
              <input className='m-2 p-2 rounded ' type="file" id='projectCover' name='projectCover'  />
              </div>
            </div>
            <div className='relative'>
              <input type="submit" value={"Add Project"}  className=' absolute right-0 bottom-1 m-2 p-2 bg-blue-400 font-semibold text-white rounded-2xl shadow-md hover:bg-blue-500'/>
            </div>

           </form>
        </div>}
      </div>

      <div>
        {edit && <div className='text-right m-2 p-2'>
          <button className="m-2 bg-green-400 font-semibold text-white rounded-md p-2 hover:bg-green-500 shadow-lg">apply changes</button>
          <button className="m-2 bg-red-400 font-semibold text-white rounded-md p-2 hover:bg-red-500 shadow-lg" onClick={()=>setEdit(false)}>cancel</button>
        </div>}
      </div>

      <div>
        <div className='m-2 p-2'>
          <h1 className='text-xl text-slate-600 font-semibold text-center'>Projects List</h1>
        </div>
        {projects.length!==0 ? <div className='border-2 m-2  rounded-md shadow-md'>
          <div className='grid grid-cols-2 w-full  p-6'>
            {projects.map((project,index)=>{
              return (
                <div key={index} className='m-4 p-2  border-2 border-pink-300 rounded-md shadow-lg'>
              <img src="" alt=""  className='h-40 w-full ' />
              <h1 className='text-xl text-slate-600 font-semibold p-2'>{project.projectTitle}</h1>
              <p className='text-left p-2 text-slate-400'>{project.shortDescription}</p>
              <div className='p-2'>
              <h2 className='text-xl text-slate-500 p-2'>Technologies used</h2>
              <ul className='flex flex-wrap'>
                {project.technologies.split(",").map((item,index)=>{
                  return (
                        <li key={index} className='m-1 p-1 rounded-lg bg-pink-300 text-white font-medium text-center'>{item}</li>
                  )
                })}
              </ul>
              </div>
              <div className='my-6 text-right'>
              <a href={project.projectUrl} className='my-2 p-2 rounded-lg '><span className='text-blue-400 font-bold p-2 m-2 bg-blue-200 rounded-lg'>project link</span></a>
              </div>
            </div>
              )
            })}
          </div>
        </div> : <div className='m-2 p-4 text-center text-xl bg-slate-300 rounded-lg'> <p> There are no projects added </p> </div>}
      </div>
    </div>
  )
}

export default SettingsProjects
