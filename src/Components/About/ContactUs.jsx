import React from 'react'

const ContactUs = () => {
  return (
    <div className='my-6'>
      <div className='flex justify-center'>
        <div className='flex justify-center w-[80%] items-center bg-slate-100 p-2 rounded-lg shadow-lg py-4'>
            <div>
                <div>
                  <h1 className='text-2xl text-black font-medium m-2 p-2'>
                      Contact Us
                  </h1>
                  <p className='text-md m-2 p-2 text-slate-600'>
                      Need to get in touch with us? Either fill out the form with your enquiry  or find the customer help emails, you'd like contact below.
                  </p>
                </div>
                <div className='m-2 p-2 ' >
                    <div className='flex items-center my-2'>
                      <span className='flex text-slate-600 font-medium'>
                      <svg width="24px" height="24px" viewBox="-4.08 -4.08 32.16 32.16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"></path> </g></svg>
                      Email: 
                      </span>
                      <p className='text-sm text-blue-500 hover:cursor-pointer mx-2'>
                        care@idonutcode.com
                      </p>
                    </div>
                    <div className='flex items-center my-2'>
                        <span className='flex text-slate-600 font-medium'>
                        <svg width="24px" height="24px" viewBox="-19.2 -19.2 102.40 102.40" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.91,31.8V26.1a19.09,19.09,0,0,1,38.18,0v5.7" stroke-linecap="round"></path><path d="M12.06,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,12.06,31.8Z" stroke-linecap="round"></path><path d="M50.24,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,50.24,31.8Z" transform="translate(102.18 76.98) rotate(180)" stroke-linecap="round"></path><path d="M51.7,45.56v5a4,4,0,0,1-4,4H36.56" stroke-linecap="round"></path><rect x="28.45" y="51.92" width="8.1" height="5.07" rx="2" stroke-linecap="round"></rect></g></svg>
                          call us:
                        </span>
                        <p className='text-sm text-blue-500 hover:cursor-pointer mx-2'>
                          +91 040-234-4321
                        </p>
                    </div>
                </div>
            </div>
            <div className='shadow-md p-2 bg-white rounded-lg '>
                    <div>
                        <form >
                           <div className='flex'>
                                <div>
                                        
                                        <input type="text" placeholder='First Name' className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400' />
                                </div>
                                <div>
                                      
                                        <input type="text" placeholder='Last Name' className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400' />
                                </div>
                           </div>
                           <div className='flex '>
                            <div>
                                    
                                    <input type="email" placeholder='enter your email id'  className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400'/>
                            </div>
                            <div>
                                    
                                    <input type="phone" placeholder='+XX XXX-XXX-0000' className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400'/>
                            </div>
                           </div>
                           <div>
                                <label htmlFor="inquiry" className='m-2 text-sm text-slate-600'>
                                    what can we help you with?
                                </label>
                                <textarea name="inquiry" id="inquiry" cols={50} rows={5} placeholder='Type your inquiry here....' className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400'></textarea>
                           </div>
                           <div>
                            <input type="submit" value={"Submit"} className='p-2 m-2 bg-green-300 rounded-lg text-white font-bold hover:bg-green-400' />
                           </div>
                        </form>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
