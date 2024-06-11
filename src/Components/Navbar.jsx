import React, { useRef, useState } from "react";
import Logo from '../images/Logo.png';
import Authentication from "./Authentication";
import { Link } from "react-router-dom";



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
    <div className="flex items-center bg-white shadow-lg z-10 ">
      <div>
        <Link to="/">
          <img src={Logo} alt=""  className=" mx-2 h-10 w-12 rotate-[35deg] "/>
        </Link>
      </div>
      <div className="w-full h-full mx-2">
        <ul className="flex box-border h-full font-medium text-slate-600">
          <li className="mx-4 cursor-pointer hover:border-b-2 border-pink-400 active:border-b-2  hover:text-black transition delay-0 ease-in-out hover:-translate-y-1">
            <Link to="/home">
            Home
            </Link>
            </li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-pink-400 active:border-b-2  hover:text-black transition delay-0 ease-in-out hover:-translate-y-1">
            <Link to="/courses">
            Courses
            </Link>
            </li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-pink-400 active:border-b-2  hover:text-black transition delay-0 ease-in-out hover:-translate-y-1">
            <Link to={"/blogs"}>
            Blogs
            </Link>
            </li>
          <li className="mx-4 cursor-pointer hover:border-b-2 border-pink-400 active:border-b-2  hover:text-black transition delay-0 ease-in-out hover:-translate-y-1">
            <Link to={"/about"}>
            About
            </Link>
            </li>
        </ul>
      </div>
      <div className="mx-4 relative">
        <input className="block w-full rounded-md  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-blue-300 hover:ring-2 hover:ring-offset placeholder:text-gray-400 focus:ring-inset focus:outline-none focus:ring-2  focus:ring-pink-300 sm:text-sm sm:leading-6" type="text" placeholder="search"/>
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
        {profileMenu?<div className="transition ease-in-out duration-500 delay-300 z-10 w-24 absolute top-18 right-5 m-2 bg-pink-400 rounded ">
            <ul className="transition ease-in-out duration-300">
              <li className="text-md font-medium text-white hover:bg-pink-300 cursor-pointer  p-2 transition ">
                <div className="flex">
                    <span>
                      <svg width="24px" height="24px" viewBox="-5.6 -5.6 31.20 31.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2119.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978" id="profile_round-[#1346]"> </path> </g> </g> </g> </g></svg>
                    </span>
                    <Link to="/profile" 
                    onClick={()=>{setMenu(false)}}>
                    Profile 
                    </Link>
                </div>
              </li>
              <li className="text-md font-medium text-white hover:bg-pink-300 cursor-pointer  p-2 transition ">
                <div className="flex">
                      <span>
                          <svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-64.03 -64.03 504.72 504.72" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M154.277,231.806c4.604-1.788,6.979-6.503,5.645-11.269c-1.71-6.024-4.129-11.889-7.188-17.433 c-1.557-2.819-4.788-4.571-8.434-4.571c-1.413,0-2.814,0.271-4.052,0.785l-0.115,0.05c-1.437,0.639-2.987,0.963-4.61,0.963 c-3.233,0-6.41-1.329-8.713-3.641c-3.589-3.611-4.541-9.172-2.368-13.84c2.048-4.41,0.329-9.715-3.896-12.069 c-5.415-3.046-11.205-5.483-17.211-7.242c-0.854-0.25-1.736-0.376-2.623-0.376c-3.929,0-7.461,2.49-8.791,6.204 c-1.629,4.573-6.68,8.156-11.547,8.156c-5.17-0.016-9.798-3.326-11.512-8.226c-1.302-3.748-4.842-6.268-8.809-6.268 c-0.867,0-1.731,0.122-2.556,0.358c-3.054,0.867-6.096,1.927-9.041,3.148c-2.798,1.159-5.563,2.489-8.219,3.953 c-4.25,2.338-6.004,7.631-3.989,12.06c2.139,4.675,1.149,10.224-2.458,13.805c-2.156,2.136-5.477,3.412-8.885,3.412 c-1.797,0.001-3.519-0.362-5-1.057c-1.246-0.579-2.572-0.872-3.94-0.872c-3.346,0-6.459,1.809-8.143,4.752 c-3.088,5.487-5.549,11.34-7.313,17.393c-1.384,4.734,1.169,9.744,5.817,11.407c4.902,1.748,8.182,6.391,8.159,11.558 c-0.018,4.841-3.043,9.35-7.536,11.24l-0.731,0.28c-4.58,1.572-7.209,6.627-5.871,11.35c1.708,6.028,4.128,11.895,7.191,17.438 c1.566,2.835,4.795,4.596,8.427,4.596c1.381,0,2.751-0.266,3.961-0.768c1.576-0.653,3.225-0.985,4.898-0.985 c3.28,0,6.349,1.269,8.633,3.569c3.587,3.62,4.54,9.181,2.376,13.833c-2.059,4.407-0.344,9.718,3.899,12.09 c5.484,3.073,11.282,5.505,17.229,7.228c0.845,0.246,1.718,0.37,2.596,0.37c3.943,0,7.479-2.496,8.8-6.211 c1.623-4.571,6.692-8.151,11.544-8.151c5.17,0.028,9.796,3.342,11.506,8.235c1.301,3.75,4.841,6.271,8.81,6.271 c0.863,0,1.725-0.12,2.563-0.359c6.005-1.713,11.81-4.103,17.252-7.102c4.25-2.338,6.005-7.63,3.994-12.052 c-2.137-4.685-1.146-10.241,2.459-13.822c2.15-2.131,5.475-3.403,8.892-3.403c1.795,0,3.511,0.361,4.972,1.049 c1.25,0.585,2.582,0.882,3.958,0.883c0,0,0,0,0.001,0c3.361,0,6.479-1.818,8.143-4.756c3.104-5.52,5.564-11.374,7.311-17.393 c1.38-4.728-1.171-9.734-5.815-11.401c-4.898-1.749-8.176-6.396-8.155-11.563C145.815,238.507,149.143,233.959,154.277,231.806z M113.018,242.831c0,18.024-14.663,32.687-32.688,32.687s-32.688-14.664-32.688-32.687s14.663-32.688,32.688-32.688 S113.018,224.807,113.018,242.831z"></path> <path d="M375.983,149.879c-0.658-5.895-6.619-9.544-11.764-9.544l-0.127,0.001c-7.041,0.186-13.781-4.326-16.566-11.095 c-2.829-6.897-1.001-14.951,4.55-20.042c4.129-3.791,4.643-10.2,1.181-14.573c-5.025-6.405-10.808-12.257-17.186-17.392 c-1.905-1.534-4.301-2.379-6.743-2.379c-3.032,0-5.941,1.289-7.987,3.545c-3.228,3.568-8.501,5.785-13.763,5.785 c-2.313,0.001-4.475-0.415-6.429-1.235c-6.984-2.922-11.388-9.991-10.958-17.576c0.34-5.699-3.836-10.67-9.49-11.316 c-8.003-0.94-16.325-0.968-24.443-0.07c-5.558,0.615-9.764,5.479-9.575,11.084c0.27,7.517-4.181,14.465-11.07,17.287 c-1.923,0.785-4.048,1.183-6.315,1.183c-5.251,0.001-10.523-2.206-13.771-5.771c-2.039-2.22-4.934-3.494-7.943-3.494 c-2.378,0-4.728,0.803-6.645,2.285c-6.489,5.09-12.402,10.936-17.571,17.373c-3.564,4.432-3.057,10.895,1.159,14.717 c5.647,5.112,7.476,13.23,4.549,20.205c-2.743,6.547-9.376,10.953-16.521,10.979l-1.096-0.029 c-5.705-0.383-10.612,3.842-11.278,9.495c-0.957,8.151-0.973,16.461-0.048,24.701c0.662,5.895,6.552,9.545,11.628,9.545 c7.461,0,14.066,4.354,16.826,11.088c2.82,6.907,0.994,14.962-4.538,20.037c-4.139,3.783-4.659,10.197-1.188,14.6 c5.092,6.465,10.884,12.314,17.213,17.382c1.897,1.522,4.285,2.36,6.724,2.36c3.043,0,5.956-1.292,7.993-3.546 c3.213-3.56,8.485-5.771,13.758-5.771c2.319,0,4.488,0.414,6.432,1.225c6.977,2.937,11.373,10.01,10.941,17.589 c-0.337,5.686,3.835,10.656,9.501,11.316c4.144,0.48,8.355,0.723,12.513,0.723c3.969,0,7.981-0.222,11.924-0.659 c5.56-0.615,9.765-5.478,9.574-11.074c-0.262-7.527,4.194-14.481,11.083-17.303c1.907-0.779,4.022-1.174,6.286-1.174 c5.271,0,10.548,2.203,13.776,5.755c2.034,2.232,4.935,3.512,7.957,3.512c2.39,0,4.745-0.81,6.643-2.29 c6.522-5.117,12.436-10.965,17.572-17.374c3.555-4.423,3.05-10.881-1.158-14.71c-5.642-5.109-7.466-13.232-4.54-20.211 c2.783-6.627,9.791-10.917,17.866-10.939c0.097,0.002,0.193,0.003,0.289,0.003h0.001c5.55,0,10.061-3.992,10.728-9.511 C376.89,166.436,376.906,158.128,375.983,149.879z M301.018,161.831c0,18.024-14.663,32.688-32.688,32.688 s-32.688-14.664-32.688-32.688s14.663-32.688,32.688-32.688S301.018,143.807,301.018,161.831z"></path> </g> </g></svg>
                      </span>
                      <Link to='settings'
                      onClick={()=>{setMenu(false)}}
                      >
                          Settings 
                      </Link>
                  </div>
                </li>
              <li className="text-md font-medium text-white hover:bg-pink-300 cursor-pointer  p-2 transition " onClick={handleAuthentication}>
                <div className="flex">
                  <span>
                  <svg width="24px" height="24px" viewBox="-1.92 -1.92 27.84 27.84" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M15.9998 2L14.9998 2C12.1714 2 10.7576 2.00023 9.87891 2.87891C9.00023 3.75759 9.00023 5.1718 9.00023 8.00023L9.00023 16.0002C9.00023 18.8287 9.00023 20.2429 9.87891 21.1215C10.7574 22 12.1706 22 14.9976 22L14.9998 22L15.9998 22C18.8282 22 20.2424 22 21.1211 21.1213C21.9998 20.2426 21.9998 18.8284 21.9998 16L21.9998 8L21.9998 7.99998C21.9998 5.17157 21.9998 3.75736 21.1211 2.87868C20.2424 2 18.8282 2 15.9998 2Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25098 11.999C1.25098 11.5848 1.58676 11.249 2.00098 11.249L13.9735 11.249L12.0129 9.56845C11.6984 9.29889 11.662 8.82541 11.9315 8.51092C12.2011 8.19642 12.6746 8.16 12.9891 8.42957L16.4891 11.4296C16.6553 11.5721 16.751 11.7801 16.751 11.999C16.751 12.218 16.6553 12.426 16.4891 12.5685L12.9891 15.5685C12.6746 15.838 12.2011 15.8016 11.9315 15.4871C11.662 15.1726 11.6984 14.6991 12.0129 14.4296L13.9735 12.749L2.00098 12.749C1.58676 12.749 1.25098 12.4132 1.25098 11.999Z" fill="#000000"></path> </g></svg>
                  </span>
                  Login
                </div>
                </li>
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