import React, { useRef, useState } from "react";
import Logo from '../images/Logo.png';
import Authentication from "./Authentication";



const Navbar = () => {
  const [profileMenu,setMenu]=useState(false);
  const [showAuth,setAuth]=useState(false)

  const handleAuthentication=()=>{
    setAuth(!showAuth)
    setMenu(false)
  }
  const handleClose=()=>{
    setAuth(false)
  }

  return (
    <>
    <div className="flex  items-center bg-white shadow-lg ">
      <div>
        <a href="">
          <img src={Logo} alt=""  className=" mx-2 h-10 w-12 rotate-[35deg] "/>
        </a>
      </div>
      <div className="w-full mx-2">
        <ul className="flex box-border font-medium text-slate-600">
          <li className="mx-4 cursor-pointer  hover:border-b-2 border-blue-400 active:border-b-2 active:border-blue-300">Home</li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-blue-400 active:border-b-2 active:border-blue-300">Course</li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-blue-400 active:border-b-2 active:border-blue-300">Blogs</li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-blue-400 active:border-b-2 active:border-blue-300">About</li>
        </ul>
      </div>
      <div className="mx-4 relative">
        <input className="block w-full rounded-md  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:outline-none focus:ring-2  focus:ring-pink-300 sm:text-sm sm:leading-6" type="text" placeholder="search"/>
        <svg className="absolute left-1 top-2 " width="24px" height="24px" viewBox="-4.56 -4.56 33.12 33.12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </div>
      <div className="flex items-center">
      <div>
        <a href="" className="mx-4">
        <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

        </a>
      </div>
      <div className="relative">
        <button className="rounded-full border-2 shadow-lg mx-4 border-slate-800" onClick={()=>setMenu(!profileMenu)}>
          <svg width="32px" height="32px" viewBox="-5 -5 30.00 30.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2119.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978" id="profile_round-[#1346]"> </path> </g> </g> </g> </g></svg>
        </button>
        {profileMenu?<div className="w-24 absolute top-18 right-5 m-2 rounded-md bg-slate-400">
            <ul>
              <li className="hover:bg-slate-300 cursor-pointer rounded-md p-1">Profile</li>
              <li className="hover:bg-slate-300 cursor-pointer rounded-md p-1">Settings</li>
              <li className="hover:bg-slate-300 cursor-pointer rounded-md p-1" onClick={handleAuthentication}>Login</li>
            </ul>
        </div>:null}
      </div>
      </div>
    </div>
    <div>
     {showAuth && <Authentication  handleClose={handleClose}/>}
    </div>
    
    </>
  );
};

export default Navbar;