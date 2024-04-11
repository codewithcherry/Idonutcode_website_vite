import React, { useRef, useState } from 'react'

const SettingProfileInfo = () => {

    const [edit,setEdit]=useState(true)
   

  return (
    <div className='bg-white m-0 shadow-md p-2 h-full'>
      <h1 className='text-xl text-black font-semibold text-center'>Profile Information</h1>
      <p className='text-red-500 text-center'>This information is public visibile to everyone</p>
        
        <div className='relative'>
           {edit &&  <button className='p-2 m-2 absolute top-4 right-4 bg-slate-300 rounded-2xl' 
            onClick={()=>setEdit(false)}>edit <span> </span>
            </button>}
        </div>

      <div className='p-6 mx-8 w-full'>
      <div>
        <label htmlFor="" className='text-lg text-slate-600 '>Username</label><br />
        <input className='p-2 m-2  placeholder:text-md rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-2 ring-gray-500'  type="text" value={"john Doe"} disabled={edit} />
      </div>
      <div>
        <label htmlFor="" className='text-lg text-slate-600 '>email</label> <br />
        <input type="email" className='p-2 m-2  placeholder:text-md rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-2 ring-gray-500' disabled={edit} value={"example@gmail.com"}/>
      </div>
      <div>
        <label htmlFor="" className='text-lg text-slate-600 '>Profile Picture</label>
        <img className='w-24 h-24 m-2 rounded-full shadow-lg' src="https://m.media-amazon.com/images/S/amzn-author-media-prod/i4tco5mevgo92sf4uj6qa3kfjq._SY450_CR112%2C0%2C450%2C450_.jpg" alt="" />
        <input className='p-2 ' type="file"  disabled={edit}/>
      </div>
      <div>
        <label htmlFor="" className='text-lg text-slate-600 '>Cover Picture</label>
        <img className='w-1/2 h-28 m-2 rounded-md shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCz19Qn1LXay4v_YHLX1_xQetpwsDvNoUQxySMJymoNEcpjj_RPXQ2_7y-VuA0nX-BFg&usqp=CAU" alt="" />
        <input className='p-2 ' type="file"  disabled={edit}/>
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

export default SettingProfileInfo
