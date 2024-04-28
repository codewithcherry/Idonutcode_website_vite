import { limit } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';

const SettingsWorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
  });
  const [edit,setEdit]=useState(false)

  const handleEdit =()=>{
    setEdit(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiences([...experiences, formData]);
    setFormData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities:''
    });
  };

  return (
    <div className="h-screen overflow-scroll bg-white">
      <div>
      <div className="relative m-2 p-2">
          {
            !edit && <button className=" flex absolute top-0 right-5 bg-slate-300 p-2 m-2 rounded-2xl text-semibold" onClick={handleEdit}>
                  <span> 
              <svg width="24px" height="24px" viewBox="-5.28 -5.28 34.56 34.56" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 21H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </span>
              edit 
            </button>
          }
        </div>
        <div className='text-center m-2 p-2 '>
            <h1 className='text-xl font-semibold text-slate-600'>Work Experience</h1>
            <p className='text-red-500 text-sm'>
              You can edit and update your work experience here
            </p>
        </div>
        <div className='border-2 m-4 p-4 rounded-md'>
          <form onSubmit={handleSubmit}> 
           <div className='grid grid-cols-3'>
           <div className='relative m-2 p-2'>
              <label htmlFor="company" className='absolute -top-2 left-3 px-1 text-md bg-white  text-slate-600 '>Company</label>
              <input type="text" id='company' name='company' placeholder='Enter Company Name' value={formData.company} disabled={!edit} onChange={handleChange} className=' p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600 '/>
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="position" className='absolute -top-2 left-3 px-1 text-md bg-white  text-slate-600'>Position</label>
              <input type="text" id='position' name='position' placeholder='position/role' value={formData.position} disabled={!edit} onChange={handleChange} className=' p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600 '/>
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="startDate" className='absolute -top-2 left-3 px-1 text-md bg-white  text-slate-600'>Start Date</label>
              <input type="text" id='startDate' name='startDate' placeholder='joining date' value={formData.startDate} disabled={!edit} onChange={handleChange} className=' p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600 '/>
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="endDate" className='absolute -top-2 left-3 px-1 text-md bg-white  text-slate-600'>End Date</label>
              <input type="text" id='endDate' name='endDate' placeholder='last working date' value={formData.endDate} disabled={!edit} onChange={handleChange} className=' p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600 '/>
            </div>
            <div className='relative m-2 p-2'>
              <label htmlFor="responsibilties" className='absolute -top-2 left-3 px-1 text-md bg-white  text-slate-600'>Responsibilities</label>
              <input type="text" id='responsibilities' name='responsibilities' placeholder='enter your role responsibilties' disabled={!edit} onChange={handleChange} value={formData.responsibilities} className=' p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600 w-full'/>
            </div>
           </div>
           <div className='text-right'>
            <input type="submit" value={"Add Experience"} className='m-2 p-2 bg-blue-300 rounded-2xl text-white font-semibold hover:bg-blue-500 shadow-md' disabled={!edit}/>
           </div>
          </form>
        </div>
      </div>
      <div>
          {edit && <div className="text-right m-2 p-2">
            <button className="bg-green-400 p-2 m-2 rounded-xl text-white font-semibold">save changes</button>
            <button className="bg-red-500 p-2 m-2 rounded-xl text-white font-semibold" onClick={()=>setEdit(false)}>Cancel</button>
            </div>}
        </div>
      <div>
        <h1 className='text-xl text-slate-600 font-semibold m-2 p-2'>Work Experience List</h1>

        <div className='m-2'> 
          {
            experiences.length!==0 ? <div>
                 <div>
                  <ul className='border-2 m-2 rounded-md'>
                    {
                      experiences.map((item,index)=>{
                        return ( 
                          <li key={index} className=''>
                            <div className='border-b-2 p-2'>
                                <div className='flex justify-between '>
                                    <div>
                                    <h1 className='text-xl text-slate-600 p-2'>{item.company}</h1>
                                    <p className='text-sm text-slate-400 font-semibold p-2'>{item.position}</p>
                                    </div>
                                    <div>
                                      <p className='text-sm font-semibold text-slate-500 p-2'>(<span>{item.startDate}</span><span className='text-black text-xl mx-2'>-</span><span>{item.endDate}</span>)</p>
                                    </div>
                                </div>
                                <div className='flex mx-10'>
                                  <h2 className='text-md text-slate-400'>Responsibilities:</h2>
                                  <p className='mx-2 text-sm text-slate-500'>{item.responsibilities}</p>
                                </div>
                            </div>
                          </li> 
                        )
                      })
                    }
                  </ul>
                 </div>

               </div>  : <p className='text-md font-semibold text-slate-600 m-2 p-2 text-center bg-slate-300 rounded-md'>No working experience added</p>
          }
        </div>
      </div>
    </div>
  );
}

export default SettingsWorkExperience
