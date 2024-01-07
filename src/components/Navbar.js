import { useState } from 'react';
import sport from './imgs/sports_esports.png'
import logo1 from './imgs/logo_wbg - Copy 1.svg'
import sport1 from './imgs/sports_esports.svg'
const Navbar = () => {

    return (
        <div className=' w-full max-w-[1400px] mx-auto py-4'>
          <div className="navbar text-white">
            <a className="normal-case text-5xl md:mx-0 mx-10">
                <img src={logo1} className='' alt="" />
            </a> 
          <div className="navbar-start">          
            <div className="dropdown z-20">            
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-60  -mx-32 text-[22px] z-20">
                <li className='py-2'><a className='text-[19px]'>Bootcamp</a></li>
                <li className='py-2'><a className='text-[19px]'>1v1 Learning</a></li>
                <li className='py-2'><a className='text-[19px]'>Become a Coach</a></li>
                <li className='py-2'><a className='text-[19px]'>Games</a></li>
                 <li className="">
            <a className='flex flex-wrap py-4 text-white text-[19px]'>Join
            <span className='bg-[#4CBEFE] h-7 w-7 rounded-full mx-2'>
                <img className='h-3 w-4 mx-auto mt-2' src={sport1} alt="" /> 
            </span>      
            </a>
            {/* <button className="btn btn-sm text-white">Login</button> */}
            
          </li>
              </ul>
            </div>           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                <li><a>Bootcamp</a></li>
                <li><a>1v1 Learning</a></li>
                <li><a>Become a Coach</a></li>
                <li><a>Games</a></li>
            </ul>           
          </div>
          <div className="navbar-end hidden lg:flex">
            <a className='flex flex-wrap text-[16px]'>Join
            <span className='bg-[#4CBEFE] h-7 w-7 rounded-full mx-2'>
                <img className='h-3 w-4 mx-auto mt-2' src={sport1} alt="" /> 
            </span>      
            </a>
            <a className='text-white text-[16px] pl-10 pb-1' href="">Login</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;