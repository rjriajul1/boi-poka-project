import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink to='/'><li className='font-bold'>Home</li></NavLink>
             <NavLink> <li className='font-bold'>listed Books</li></NavLink>
             <NavLink> <li className='font-bold'>Pages to Read</li></NavLink>
            </ul>
          </div>
          <a className=" font-bold  text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <NavLink to='/'><li className='font-bold'><a>Home</a></li></NavLink>
             <NavLink> <li className='font-bold'><a>listed Books</a></li></NavLink>
             <NavLink> <li className='font-bold'><a>Pages to Read</a></li></NavLink>
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn mr-3 text-white font-bold btn-success">Sign in</button>
        <button className="btn text-white font-bold btn-accent">Sign up</button>
        </div>
      </div>
    );
};

export default Navbar;