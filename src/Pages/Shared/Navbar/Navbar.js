import React from "react";
import { Link } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="bg-black">
      <div className="navbar bg-base-100 px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
      <img className="h-14" src="https://i.ibb.co/nsxwC2M/Screenshot-261-removebg-preview.png" alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex text-white">
    <ul className="menu menu-horizontal px-1">
      <li><a>Bootcamp</a></li>
      <li><a>1v1 Learning</a></li>
      <li><a>Become a Coach</a></li>
      
      <li><a>Games</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a className="px-8 text-white pl-3">Join<button className="ml-3 bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
    <LuGamepad2 size="" color="" /></button></a>
  <a className="text-white pl-">Login</a>
  </div>
</div>
    </div>
    </div>
  );
};

export default Navbar;
