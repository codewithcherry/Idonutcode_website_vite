import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div>
        <div>
            <div>
                <h1>
                    Contact Us
                </h1>
                <p>
                    Need to get in touch with us? Either fill out the form with your enquiry  or find the customer help emails, you'd like contact below.
                </p>
            </div>
            <div>
                    <div>
                        <form >
                           <div>
                                <label htmlFor="firstname">
                                    First Name
                                </label>
                                <input type="text" placeholder='First Name' />
                           </div>
                           <div>
                                <label htmlFor="lastName">
                                    Last Name
                                </label>
                                <input type="text" placeholder='Last Name' />
                           </div>
                           <div>
                                <label htmlFor="emailid">
                                    Email
                                </label>
                                <input type="email" placeholder='enter your email id' />
                           </div>
                           <div>
                                <label htmlFor="phonenumber">
                                    Phone
                                </label>
                                <input type="phone" placeholder='+XX XXX-XXX-0000'/>
                           </div>
                           <div>
                                <label htmlFor="inquiry">
                                    what can we help you with?
                                </label>
                                <textarea name="inquiry" id="inquiry" cols={50} rows={10} placeholder='Type your inquiry here....'></textarea>
                           </div>
                           <div>
                            <input type="submit" value={"Submit"} />
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
