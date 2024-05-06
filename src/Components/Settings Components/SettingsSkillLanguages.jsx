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
        <h1 className='text-center text-xl font-semibold text-slate-600 my-2'>Skills and Languages</h1>
      </div>
      <div className='relative'>
      {edit &&  <button className='flex p-2 m-2 absolute top-2 right-4 z-[5] bg-slate-300 rounded-2xl font-medium' 
            onClick={()=>setEdit(false)}>
                <span> 
              <svg width="24px" height="24px" viewBox="-5.28 -5.28 34.56 34.56" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 21H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </span>
              edit 
            </button>}
      </div>
     <div className='m-4 p-2'>
     <div className='mt-4'>
        <form onSubmit={handleAddSkill}>
            <div>
                <h1 className='text-lg text-slate-600 font-semibold'>Skills</h1>
                <div className='border-2 rounded-md p-2  '>
                <input className='p-2 m-2 border rounded focus:outline-none focus:ring-blue-300 focus:ring-2 focus:rounded-md ring-2 ring-slate-300 placeholder:lg' placeholder='enter skill' type="text" onChange={handleSkills} value={skillsInput}  disabled={edit}/>
                <button className='p-2 m-2 bg-pink-300 rounded-md text-white font-semibold hover:bg-pink-500' disabled={edit} >add skill</button>
                </div>
            </div>   
        </form>
      </div>
      <div className='my-5 p-4'>
      {(skills.length === 0) ? (
    <p className='flex flex-wrap justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'> No skills added</p>
) : (
    <ul className='flex flex-wrap justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'>
        {skills.map((item, index) => (
            <li className='p-2 m-2 bg-pink-300 rounded-2xl' key={index}>{item}</li>
        ))}
    </ul>
)}  
      </div>
     </div>
     <div className='m-4 p-2 mt-6'>
      <div >
        <form onSubmit={handleAddLanguage}>
            <div>
                <h1 className='text-lg text-slate-600 font-semibold'>Languages</h1>
                <div className='p-2 border-2 rounded-md'>
                <input className='p-2 m-2 border rounded focus:outline-none focus:ring-blue-300 focus:ring-2 focus:rounded-md ring-2 ring-slate-300 placeholder:lg' placeholder='enter language' type="text" onChange={handleLanguageInput} value={languageInput}  disabled={edit}/>
                <button className='p-2 m-2 bg-pink-300 rounded-md text-white font-semibold hover:bg-pink-500' disabled={edit} >add Language</button>
                </div>
            </div>   
        </form>
      </div>
      <div className='my-5 p-4'>
      {(languages.length === 0) ? (
    <p className='flex  flex-wrap justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'> No Languages added</p>
) : (
    <ul className='flex flex-wrap justify-center rounded-lg shadow-lg bg-slate-300 w-1/2 p-4'>
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
