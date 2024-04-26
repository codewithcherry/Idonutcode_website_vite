import React from 'react'

const ViewCourse = () => {

    const list=[
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },
        {
            Title:"Introduction to Linked list",
            link:"https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n"
        },

    ]

  return (
    <div className='h-full'>
      <div className='flex border-collapse'>
        <div className=''>
            <div className='bg-slate-200 border border-slate-600'>
                <h1 className='text-xl text-slate-600 font-semibold p-2'>Introduction to linked List in Python</h1>
            </div>
            <div>
                <iframe width="1180" height="520" src="https://www.youtube-nocookie.com/embed/yUL0lND-ii0?si=i82JKIU6rkjzF91n" className='' title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div className='bg-slate-200 w-full h-screen border border-slate-600'>
            <div className='text-center '>
                <h1 className='text-xl font-medium text-slate-600 p-2 border-b border-slate-500'>Course Content</h1>
            </div>
            <div className='w-full'>
                <ul className='w-full'>
                    {
                        list.map((item,index)=>{
                            return (
                                <div className=' border-b border-slate-500'>
                                    <div key={index} className='flex  w-full p-1 items-center'>
                                        <input type="checkbox" className='h-4 w-4' />
                                        <li className='text-lg p-2 font-medium text-slate-500 '>{item.Title}</li>
                                    </div>
                                    <div>
                                        <p className='px-2 text-sm font-medium text-slate-400 text-right'>4 mins</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCourse
