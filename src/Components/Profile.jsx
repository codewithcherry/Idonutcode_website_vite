import React from 'react'

const Profile = () => {
  return (
    <div className='p-8 shadow-md'>
      <div className='shadow-md rounded-lg'>
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
        <div className='bg-white rounded-lg p-2 flex justify-between'>
                    <div>
                        <div className='flex items-center'>
                                    <svg fill="#000000" width="28px" height="28px" viewBox="-14.08 -14.08 92.16 92.16" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x32_5_attachment"></g> <g id="_x32_4_office"></g> <g id="_x32_3_pin"></g> <g id="_x32_2_business_card"> <g> <g> <path d="M61.0112,9.9204H2.9888C1.8921,9.9204,1,10.8125,1,11.9092v40.1816c0,1.0967,0.8921,1.9888,1.9888,1.9888h58.0225 c1.0967,0,1.9888-0.8921,1.9888-1.9888V11.9092C63,10.8125,62.1079,9.9204,61.0112,9.9204z M2.9983,16.8672h58.0031 l0.0084,30.2656H2.9998L2.9983,16.8672z M61,11.9092l0.0009,2.958H2.9982L2.998,11.9204L61,11.9092z M3,52.0908l-0.0001-2.958 h58.0106l0.0008,2.9468L3,52.0908z"></path> <path d="M45.9526,19.5654c-6.6436,0-12.0488,5.4053-12.0488,12.0493c0,6.6436,5.4053,12.0488,12.0488,12.0488 c6.6416,0,12.0449-5.4053,12.0449-12.0488C57.9976,24.9707,52.5942,19.5654,45.9526,19.5654z M45.9526,41.6636 c-2.1734,0-4.1822-0.7008-5.8279-1.8782c0.9388-2.3649,3.2468-3.9661,5.8279-3.9661c2.5791,0,4.8859,1.6016,5.825,3.9665 C50.1325,40.963,48.1248,41.6636,45.9526,41.6636z M53.3403,38.3998c-1.3822-2.757-4.2274-4.5805-7.3876-4.5805 c-3.1621,0-6.0085,1.8232-7.3909,4.5803c-1.6445-1.7899-2.658-4.1683-2.658-6.7849c0-5.541,4.5078-10.0493,10.0488-10.0493 c5.5386,0,10.0449,4.5083,10.0449,10.0493C55.9976,34.2314,54.9843,36.6099,53.3403,38.3998z"></path> <path d="M45.9526,24.105c-2.3052,0-4.1807,1.875-4.1807,4.1802s1.8755,4.1807,4.1807,4.1807s4.1802-1.8755,4.1802-4.1807 S48.2578,24.105,45.9526,24.105z M45.9526,30.4658c-1.2026,0-2.1807-0.978-2.1807-2.1807c0-1.2021,0.978-2.1802,2.1807-2.1802 c1.2021,0,2.1802,0.978,2.1802,2.1802C48.1328,29.4878,47.1548,30.4658,45.9526,30.4658z"></path> <path d="M26.8872,31.897H14.0479c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h12.8394c0.5522,0,1-0.4478,1-1 S27.4395,31.897,26.8872,31.897z"></path> <path d="M26.8872,36.2563H9.9893c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h16.8979c0.5522,0,1-0.4478,1-1 S27.4395,36.2563,26.8872,36.2563z"></path> <path d="M26.8872,40.6123H9.9893c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h16.8979c0.5522,0,1-0.4478,1-1 S27.4395,40.6123,26.8872,40.6123z"></path> </g> <g> <g> <path d="M27.0459,28H9.9507C8.875,28,8,27.125,8,26.0493v-4.0986C8,20.875,8.875,20,9.9507,20h17.106 C28.1284,20,29,20.9097,29,22.0278v4.0181C29,27.1235,28.1235,28,27.0459,28z M9.9794,22v4h17.0665v-4H9.9794z"></path> </g> </g> </g> </g> <g id="_x32_1_form"></g> <g id="_x32_0_headset"></g> <g id="_x31_9_video_call"></g> <g id="_x31_8_letter_box"></g> <g id="_x31_7_papperplane"></g> <g id="_x31_6_laptop"></g> <g id="_x31_5_connection"></g> <g id="_x31_4_phonebook"></g> <g id="_x31_3_classic_telephone"></g> <g id="_x31_2_sending_mail"></g> <g id="_x31_1_man_talking"></g> <g id="_x31_0_date"></g> <g id="_x30_9_review"></g> <g id="_x30_8_email"></g> <g id="_x30_7_information"></g> <g id="_x30_6_phone_talking"></g> <g id="_x30_5_women_talking"></g> <g id="_x30_4_calling"></g> <g id="_x30_3_women"></g> <g id="_x30_2_writing"></g> <g id="_x30_1_chatting"></g> </g></svg>
                                    <h1 className='text-lg text-black '>Contact Info</h1>
                        </div>
                        <div className='p-2'>
                        <div className='flex items-center p-2'>
                                <h2 className='text-slate-600 w-24'>email</h2>
                                <p className='bg-white shadow-sm p-2 border-2 border-slate-600 rounded-lg text-slate-600'>example@gmail.com</p>
                        </div>
                        <div className='flex items-center p-2'>
                                <h2 className='text-slate-600 w-24'>Linkedin</h2>
                                <p className='bg-white shadow-sm p-2 border-2 border-slate-600 rounded-lg text-slate-600'>https://www.linkedin/username</p>
                        </div>
                        <div className='flex items-center p-2'>
                                <h2 className='text-slate-600 w-24'>github</h2>
                                <p className='bg-white shadow-sm p-2 border-2 border-slate-600 rounded-lg text-slate-600'>https://github/username</p>
                        </div>
                        <div className='flex items-center p-2'>
                                <h2 className='text-slate-600 w-24'>phone</h2>
                                <p className='bg-white shadow-sm p-2 border-2 border-slate-600 rounded-lg text-slate-600'><span>+91 </span>920-398-6728</p>
                        </div>
                        </div>
                    </div>
            <div>
                <div>
                <div className='flex items-center'>
                            <svg fill="#000000" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-123.32 -123.32 479.33 479.33" xmlSpace="preserve" stroke="#000000" strokeWidth="0.00232688"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_169_"> <g id="XMLID_197_"> <path id="XMLID_221_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15 S89.403,61.344,97.688,61.344z"></path> </g> <g id="XMLID_222_"> <path id="XMLID_223_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15 S225.972,101.344,217.688,101.344z"></path> </g> <g id="XMLID_224_"> <path id="XMLID_225_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15 C232.688,178.06,225.972,171.344,217.688,171.344z"></path> </g> <g id="XMLID_226_"> <path id="XMLID_227_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5 c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688 C53.958,106.797,51.61,104.818,48.785,104.408z"></path> </g> <g id="XMLID_228_"> <path id="XMLID_229_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825 l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z"></path> </g> <g id="XMLID_230_"> <path id="XMLID_231_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5 c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688 C53.958,176.797,51.61,174.818,48.785,174.408z"></path> </g> </g> </g></svg>
                            <h2 className='text-lg text-black'>Skills</h2>
                    </div>
                    <div>
                                <ul className='flex justify-around w-1/4 m-2 p-2'>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>Java</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>python</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>DSA</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>React</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>Angular</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>MongoDB</li>
                                </ul>
                    </div>
                </div>
                <div>
                <div className='flex items-center'>
                            <svg fill="#000000" height="28px" width="28px" version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-20.48 -20.48 168.96 168.96" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="91.1" cy="25.2" r="8.7"></circle> <path d="M93.9,36.2c-0.2,0-1.1,0.1-1.1,0.1c-6.9,1.2-12.3,7.2-12.3,14.5c0,0.1-0.1,1.3,0,1.6c0,6.5,0.8,12.8,2.2,18.8 c0.4,1.8,1.6,3.4,2.9,4.5V116c0,3,2.5,5.5,5.5,5.5c3,0,5.5-2.5,5.5-5.5V79.7c-0.6,0.1-1.1,0.2-1.7,0.2c-2,0-3.6-0.9-4.7-2.2 c-0.7-1.1-1.3-2.5-1.3-3.8V49.3c0-0.7,0.4-1.1,1.1-1.1s1.1,0.4,1.1,1.1v24.5c0,2.1,1.8,3.8,3.8,3.8s3.8-1.8,3.8-3.8 c0,0,0-32.7,0-32.8C98.8,38.3,96.6,36.2,93.9,36.2z"></path> <circle cx="33" cy="25" r="8.5"></circle> <path d="M62.8,37.3l-14.5,5.3l-14-6.5c-0.8-0.3-1.6-0.5-2.5-0.5c-0.8,0-3.5,0-4.2,0c-3.5,0-6.3,2.9-6.4,6.4v26.4 c0,1.8,0.7,3.4,1.9,4.6c0,0,2.3,43.1,2.3,43.3c0,2.9,2.3,5.2,5.2,5.2c2.7,0,5-2.1,5.2-4.8c0,0,0,0,0,0l0-0.3c0,0,0-0.1,0-0.1 c0,0,0,0,0,0L37.1,72c0.7-1,1.1-2.3,1.1-3.5V46.1l8.4,3.9c0.9,0.5,2,0.5,2.9,0.2l16-5.8c2-0.8,2.9-2.8,2.3-4.8 C66.8,37.6,64.7,36.6,62.8,37.3z"></path> <path d="M56.9,5.2c-6.3,0-11.4,2.7-11.4,5.9c0,1.3,0.8,2.5,2.2,3.5l-3.1,5.7l7.3-3.9c1.5,0.4,3.2,0.6,5,0.6 c6.3,0,11.4-2.7,11.4-5.9C68.3,7.8,63.2,5.2,56.9,5.2z"></path> </g> </g></svg>
                            <h2 className='text-lg text-black'>Languages</h2>
                    </div>
                    <div>
                                <ul className='flex justify-around w-1/4 m-2 p-2'>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>English</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>Telugu</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>Tamil</li>
                                        <li className='bg-slate-300 m-2 p-2 rounded-2xl shadow-lg'>Hindi</li>
                                        
                                </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
