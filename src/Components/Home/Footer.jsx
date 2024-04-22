import React from 'react'
import BrandLogo  from './BrandLogo.png'

const Footer = () => {
  return (
    <div className='bg-white p-4'>
      <div className='flex justify-evenly items-top'>
        <div>
            <div>
                <img src={BrandLogo} alt=""  className='h-40 w-40' />
                <p>Idonutcode is one of the great coding communities of India, for learning coding.</p>
            </div>
        </div>
        <div>
            <h1>Company</h1>
            <ul>
                <li>Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        <div>
            <h1>Contact us</h1>
            <ul>
                <li>
                    <span> </span> idonutcode@gmail.com
                </li>
                <li>
                    <span> </span> care@idonutcode.com
                </li>
                <li>
                    <span> </span> helpdesk@idonutcode.com
                </li>
                <li>
                    <span> </span> Timings 10:00 AM to 7:30 PM IST
                </li>
            </ul>
        </div>
        <div>
            <h1>Quick Links</h1>
            <ul>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Notes</li>
                <li>FAQ's</li>
            </ul>
        </div>
        <div>
            <h1>Follow us</h1>
            <ul>
                <li><span></span>Instagram</li>
                <li><span></span>Linkedin</li>
                <li><span></span>Twitter</li>
                <li><span></span>Youtube</li>
                <li><span></span>Telegram</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
