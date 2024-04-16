import React from 'react'

const Courses = () => {

    const courses=[
        {
            Title:"Python Master 101 ",
            courseType:"free",
            description:"Python master course is one on one course with complete beginner to pro level concepts including datastructures and algorithm using python. Master class includes more than 100+ videos covering all the concepts",
            coverUrl:"https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-i-kosjp4qvy4-us/0fc44193686a466792a19684a6c18c87~tplv-nhvfeczskr-1:900:0.webp?lk3s=35090df9&x-expires=1741509543&x-signature=sGNMsIgplPkUGJLXi2reW0%2B%2BzPI%3D"
        },
        {
            Title:"Web-Devlopment ",
            courseType:"free",
            description:"Python master course is one on one course with complete beginner to pro level concepts including datastructures and algorithm using python. Master class includes more than 100+ videos covering all the concepts",
            coverUrl:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
        },
        {
            Title:"C Programming 101 ",
            courseType:"free",
            description:"Python master course is one on one course with complete beginner to pro level concepts including datastructures and algorithm using python. Master class includes more than 100+ videos covering all the concepts",
            coverUrl:"https://kitflix.com/wp-content/uploads/2023/08/C-Programming.png"
        },

    ]

  return (
    <div className=' '>
       <div>
        <div>
            <h1 className='text-3xl text-center m-2 p-2 font-semibold text-slate-600'>Recommended Courses</h1>
        </div>
        <div className='flex justify-center'>
        <div className='grid grid-cols-3 place-content-center m-2 w-[75%] '>
            {courses.map((item,index)=>{
                return (
                    <div key={index} className='mx-4 shadow-2xl  bg-white rounded-md '>
                    <img src={item.coverUrl} alt=""  className='rounded-md'/>
                    <div className='m-2 p-2'>
                        <span className='font-semibold text-Fuchsia-500 bg-blue-200 m-2 p-1 rounded-xl'>{item.courseType}</span>
                        <h1 className='font-semibold text-slate-600 text-xl m-2 p-1'>{item.Title}</h1>
                        <p className='text-md text-slate-400 m-2 p-1'>{item.description}</p>
                        <button className='font-semibold text-white bg-pink-400 m-2 p-2 rounded-xl shadow-md hover:bg-pink-500'>Start Watching</button>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
       </div>
    </div>
  )
}

export default Courses
