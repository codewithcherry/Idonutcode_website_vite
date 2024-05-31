import React from 'react'

const ContactUs = () => {
  return (
    <div className='my-6'>
      <div className='flex justify-center'>
        <div className='flex justify-center w-[80%] items-center bg-slate-100 p-2 rounded-lg shadow-lg py-4'>
            <div>
                <h1 className='text-2xl text-black font-medium m-2 p-2'>
                    Contact Us
                </h1>
                <p className='text-md m-2 p-2 text-slate-600'>
                    Need to get in touch with us? Either fill out the form with your enquiry  or find the customer help emails, you'd like contact below.
                </p>
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
                           <div>
                                
                                <input type="email" placeholder='enter your email id'  className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400'/>
                           </div>
                           <div>
                                
                                <input type="phone" placeholder='+XX XXX-XXX-0000' className='m-2 p-2 rounded-md shadow-md outline outline-2 outline-blue-400 focus:outline-green-400'/>
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
