import React from 'react'
import { useState } from 'react'

const SettingsSkillLanguages = () => {

    const [skillsInput,setSkillsInput]=useState("")
    const [skills,setSkills]=useState([])
    const [edit,setEdit]=useState(true)
    const [languageInput,setLanguageInput]=useState("")
    const [languages,setLanguages]=useState([])

    const handleSkills=(e)=>{
        setSkillsInput(e.target.value)
    }

    const handleAddSkill =(e)=>{
        e.preventDefault()
        setSkills([...skills,skillsInput])
        setSkillsInput("")
    }

    // below code is to handle languages
    const handleLanguageInput=(e)=>{
        setLanguageInput(e.target.value)
    }

    const handleAddLanguage =(e)=>{
        e.preventDefault()
        setLanguages([...languages,languageInput])
        setLanguageInput("")
    }

  return (
    <div>
      <div>
        <h1 className='text-center text-2xl font-semibold border-b-2 border-pink-200 shadow-md p-2'>Skills and Languages</h1>
      </div>
      <div className='relative'>
      {edit &&  <button className='p-2 m-2 absolute top-4 right-4 bg-slate-300 rounded-2xl' 
            onClick={()=>setEdit(false)}>edit <span> </span>
            </button>}
      </div>
     <div className='m-4 p-2'>
     <div >
        <form onSubmit={handleAddSkill}>
            <div>
                <h1 className='text-lg text-slate-600 font-semibold'>Skills</h1>
                <input className='p-2 m-2 border rounded focus:outline-none focus:ring-blue-300 focus:ring-2 focus:rounded-md ring-2 ring-slate-300 placeholder:lg' placeholder='enter skill' type="text" onChange={handleSkills} value={skillsInput}  disabled={edit}/>
                <button className='p-2 m-2 bg-pink-300 rounded-md text-white font-semibold' disabled={edit} >add skill</button>
            </div>   
        </form>
      </div>
      <div className='my-5 p-4'>
      {(skills.length === 0) ? (
    <p className='flex justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'> No skills added</p>
) : (
    <ul className='flex justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'>
        {skills.map((item, index) => (
            <li className='p-2 m-2 bg-pink-300 rounded-2xl' key={index}>{item}</li>
        ))}
    </ul>
)}  
      </div>
     </div>
     <div className='m-4 p-2'>
      <div >
        <form onSubmit={handleAddLanguage}>
            <div>
                <h1 className='text-lg text-slate-600 font-semibold'>Languages</h1>
                <input className='p-2 m-2 border rounded focus:outline-none focus:ring-blue-300 focus:ring-2 focus:rounded-md ring-2 ring-slate-300 placeholder:lg' placeholder='enter language' type="text" onChange={handleLanguageInput} value={languageInput}  disabled={edit}/>
                <button className='p-2 m-2 bg-pink-300 rounded-md text-white font-semibold' disabled={edit} >add Language</button>
            </div>   
        </form>
      </div>
      <div className='my-5 p-4'>
      {(languages.length === 0) ? (
    <p className='flex justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'> No Languages added</p>
) : (
    <ul className='flex justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'>
        {languages.map((item, index) => (
            <li className='p-2 m-2 bg-pink-300 rounded-2xl' key={index}>{item}</li>
        ))}
    </ul>
)}   
      </div>
     </div>
     {!edit && <div className='text-right m-2 p-2'>
        <button className='p-2 m-2 bg-green-400 text-white font-bold  shadow-md rounded-lg'>Apply Changes</button>
        <button className='p-2 m-2 bg-red-600 text-white font-bold  shadow-md rounded-lg' 
         onClick={()=>setEdit(true)}>Cancel</button>
      </div>}
    </div>
  )
}

export default SettingsSkillLanguages
