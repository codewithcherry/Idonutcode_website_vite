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
            Title:"Python Master 101 ",
            courseType:"free",
            description:"Python master course is one on one course with complete beginner to pro level concepts including datastructures and algorithm using python. Master class includes more than 100+ videos covering all the concepts",
            coverUrl:"https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-i-kosjp4qvy4-us/0fc44193686a466792a19684a6c18c87~tplv-nhvfeczskr-1:900:0.webp?lk3s=35090df9&x-expires=1741509543&x-signature=sGNMsIgplPkUGJLXi2reW0%2B%2BzPI%3D"
        },
        {
            Title:"Python Master 101 ",
            courseType:"free",
            description:"Python master course is one on one course with complete beginner to pro level concepts including datastructures and algorithm using python. Master class includes more than 100+ videos covering all the concepts",
            coverUrl:"https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-i-kosjp4qvy4-us/0fc44193686a466792a19684a6c18c87~tplv-nhvfeczskr-1:900:0.webp?lk3s=35090df9&x-expires=1741509543&x-signature=sGNMsIgplPkUGJLXi2reW0%2B%2BzPI%3D"
        },

    ]

  return (
    <div>
       <div>
        <div>
            <h1>Recommended Courses</h1>
        </div>
        <div>
            {courses.map((item,index)=>{
                <div key={index}>
                    <img src={item.coverUrl} alt="" />
                    <p>{item.courseType}</p>
                    <h1>{item.Title}</h1>
                    <p>{item.description}</p>
                    <button>Start Watching</button>
                </div>
            })}
        </div>
       </div>
    </div>
  )
}

export default Courses
