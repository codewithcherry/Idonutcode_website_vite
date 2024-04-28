import React, { useRef, useState } from 'react'

const SettingProfileInfo = () => {

    const [edit,setEdit]=useState(true)
   

  return (
    <div className='bg-white m-0 shadow-md p-2 h-full'>
      <h1 className='text-xl text-black font-semibold text-center'>Profile Information</h1>
      <p className='text-red-500 text-center'>This information is public visibile to everyone</p>
        
        <div className='relative'>
           {edit &&  <button className=' flex p-2 m-2 absolute top-4 right-4 bg-slate-300 rounded-2xl' 
            onClick={()=>setEdit(false)}>
              <span> 
              <svg width="24px" height="24px" viewBox="-5.28 -5.28 34.56 34.56" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 21H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </span>
              edit 
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
