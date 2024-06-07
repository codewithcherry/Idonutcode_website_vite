import React from 'react'

const AboutCommunity = () => {
  return (
    <div>
      <div className='my-6'>
        <div className='m-2 p-3'>
            <h1 className='text-center text-2xl font-medium '>Our Community</h1>
        </div>
        <div className='flex justify-center w-full my-6 '>
            <div className='grid grid-cols-3 place-items-center gap-4 w-[80%] '>
                <div className=' text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32' src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>10k+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Followers on Instagram</p>
                    </div>
                </div>
                <div className='text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32' src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>20K+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Subscribers on youtube</p>
                    </div>
                </div>
                <div className='text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32' src="https://static.vecteezy.com/system/resources/thumbnails/008/845/832/small/illustration-student-raises-his-hand-png.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>1k+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Currently enrolled students</p>
                    </div>
                </div>
                <div className='text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32' src="https://static.vecteezy.com/system/resources/previews/021/013/584/original/graduation-hat-on-transparent-background-free-png.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>530+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Students are Graduated </p>
                    </div>
                </div>
                <div className='text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32' src="https://static.vecteezy.com/system/resources/previews/019/879/208/original/video-camera-symbol-video-camera-icon-symbol-illustration-on-transparent-background-free-png.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>2k+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Course Videos</p>
                    </div>
                </div>
                <div className='text-center m-2 p-2 bg-white shadow-md rounded-md w-2/3'>
                    <div className='flex justify-center'>
                        <img className='h-32 w-32  ' src="https://www.freeiconspng.com/thumbs/training-icon/leadership-training-icon-1.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl text-slate-600 font-medium p-2 m-2'>100+</h1>
                        <p className='text-lg text-slate-500 font-medium'>Instructors lead content</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCommunity
