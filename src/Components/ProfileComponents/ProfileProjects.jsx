import React from 'react'
import { useState } from 'react'

const ProfileProjects = () => {
    const [readmore,setReadnore]=useState({container:"h-[60%] overflow-hidden",button:"absolute top-[52%] left-0" ,show:true})
    let projectdata=[
        { title:"Project Name",
          Description:"This is the short desc about the project which i have worked on",
          cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFRym5g30yB1IHk3HKpvMRbsDsr2BAiVR7-g-RNHS0Q&s",
          technologies:["HTML","JS","react","Mongodb","DSA"],
          projeclink:"https://github/username/repository.github/"
        },
        { title:"Project Name",
          Description:"This is the short desc about the project which i have worked on",
          cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFRym5g30yB1IHk3HKpvMRbsDsr2BAiVR7-g-RNHS0Q&s",
          technologies:["HTML","JS","react","Mongodb","DSA"],
          projeclink:"https://github/username/repository.github/"
        },
        { title:"Project Name",
          Description:"This is the short desc about the project which i have worked on",
          cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFRym5g30yB1IHk3HKpvMRbsDsr2BAiVR7-g-RNHS0Q&s",
          technologies:["HTML","JS","react","Mongodb","DSA"],
          projeclink:"https://github/username/repository.github/"
        },
    ]

    const handleReadmore=()=>{
        setReadnore({
            container:"",
            button:"",
            show:false

        })
    }
  return (
    <div>
      <div className='bg-white'>
            <div className='flex items-center m-2'>
            <svg width="28px" height="28px" viewBox="-122.88 -122.88 757.76 757.76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="9.216"></g><g id="SVGRepo_iconCarrier"> <title>project-new</title> <g id="Page-1" strokeWidth="0.00512" fill="none" fillRule="evenodd"> <g id="Combined-Shape" fill="#000000" transform="translate(64.000000, 34.346667)"> <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"> </path> </g> </g> </g></svg>
                <h1 className='text-xl'>Projects</h1>
            </div>
            <div className='flex justify-center'>
                {projectdata.map((item,index)=>{
                    return (<div className="m-2 w-1/4"  key={index}>
                    <div className={readmore.container}>
                    <div className='shadow-lg p-4 m-2  rounded-lg bg-slate-300 relative'>
                        <img src={item.cover} alt=""  className='w-full h-32 rounded-md'/>
                        <h2 className='text-xl m-2'>{item.title}</h2>
                        <p className='text-md text-slate-600 m-2'>{item.Description}</p>
                        <p className='text-lg m-2'>Technolgies Used:</p>
                        <ul className='flex justify-center overflow-hidden p-2 '>
                            {item.technologies.map((techitem,index)=>{
                                return <li className='p-2 m-1 bg-red-300 rounded-2xl shadow-sm' key={index}>{techitem}</li>
                            })}
                            
                        </ul>
                        <button className='m-2 p-2 bg-blue-300 rounded-lg text-white font-bold shadow-md border-2 border-blue-200 hover:bg-blue-500'>View Project</button>
                    
                        <div className={`${readmore.button} bg-slate-400 w-full  shadow-lg opacity-80 `}>
                            {readmore.show && <button className='m-2 text-white font-bold hover:text-blue-500' 
                            onClick={handleReadmore}
                            >Read More &rarr;</button>}
                            
                        </div>
                    </div>
                </div>
                    </div>)
                })}
                
            </div>
        </div>
    </div>
  )
}

export default ProfileProjects
