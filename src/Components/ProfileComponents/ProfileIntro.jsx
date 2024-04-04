import React from 'react'

const ProfileIntro = () => {
  return (
    <div>
      <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOQsV2EhJHDjRYCgIxZ20CAPTJ7odRyigL8lfwuwF&s" alt=""  className='w-full h-40 rounded-md '/>
        </div>
        <div className='bg-white flex justify-between rounded-lg'>
            <div className='m-4 relative'>
                <img className='h-24 w-24 border-4 border-white rounded-full  absolute -top-16' src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" alt="" />
                <div className='mt-12'>
                <h2 className='text-2xl'>Jhon Doe <span className='text-sm text-slate-600'>(he/him)</span></h2>
                <p className='text-slate-500 font-medium'>Software Engineer</p>
                <div className='flex items-center '>
                <svg width="28px" height="28px" viewBox="-348.16 -348.16 1720.32 1720.32" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="20.48"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M243.073 676.639v0.031l5.982 6.327c1.499 1.589 2.93 3.179 4.487 4.737h0.064L512.091 960l258.36-272.266c0.312-0.306 0.626-0.651 0.938-0.965l4.61-4.896 4.929-5.203v-0.031l0.184-0.218c62.157-67.736 96.389-155.429 96.389-246.92C877.501 227.971 713.53 64 512.031 64c-201.567 0-365.532 163.971-365.532 365.501 0 91.427 34.226 179.121 96.383 246.92l0.191 0.218z" fill="#f282fa"></path><path d="M565.004 655.249c105.237 0 190.587-85.318 190.587-190.588 0-105.243-85.35-190.593-190.587-190.593-105.307 0-190.657 85.35-190.657 190.593 0 105.27 85.351 190.588 190.657 190.588z" fill="#030504"></path><path d="M512.031 619.934c105.239 0 190.588-85.319 190.588-190.587 0-105.243-85.35-190.592-190.588-190.592-105.307 0-190.657 85.35-190.657 190.592 0 105.268 85.351 190.587 190.657 190.587z" fill="#EEEEEE"></path></g></svg>
                <p className=''>California,USA</p>
                </div>
                </div>
            </div>
            <div className='m-4 text-right'>
                <div className='flex items-center'>
                <svg width="28px" height="28px" viewBox="-2.88 -2.88 29.76 29.76" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15" stroke="#000000" strokeWidth="0.672" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <h2 className=' text-slate-600'>Current Role</h2>
                </div>
                <p className='m-1 p-2 bg-slate-200 rounded-2xl shadow-lg'>Software Developer</p>
            </div>   
        </div>
        <div className='p-2 text-center bg-white'>
                <div className='flex items-center'>
                <svg width="28px" height="28px" viewBox="-6.72 -6.72 37.44 37.44" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="document"> <path id="rec" d="M3 7C3 4.23858 5.23858 2 8 2H16C18.7614 2 21 4.23858 21 7V17C21 19.7614 18.7614 22 16 22H8C5.23858 22 3 19.7614 3 17V7Z" stroke="#000000" strokeWidth="1.5"></path> <path id="line" d="M8 8.2002H16" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path id="line_2" d="M8 12.2002H16" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path id="line_3" d="M9 16.2002H15" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g> </g></svg>    
                    <h1 className='text-left text-lg text-black'>Bio</h1>
                </div>
                <div className='border-2 bg-slate-100 shadow-sm rounded-lg  p-4 mx-10 text-slate-500'>
                    <p>
                        
John Doe is a dynamic software engineer with over two years of experience specializing in full-stack development. His journey began with a deep-rooted passion for technology cultivated during his undergraduate studies in Computer Science. Joining XYZ Learning Platform, John found the perfect intersection between his technical acumen and his desire to contribute to the education sector. As a full-stack developer, he has played a pivotal role in enhancing the platform's capabilities, leveraging his expertise in front-end and back-end technologies to create seamless user experiences and optimize performance.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default ProfileIntro
