import React from "react";
import { NavLink,} from "react-router";
import Button from "../utilies/Button";

const Navbar = () => {
  return (
    <div className="navbar p-0 bg-base-100 pl-2 xl:pl-6 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border"
                    : "hover:bg-black hover:text-white"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="font-bold">
              <NavLink
                 to='/readList'
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border"
                    : "hover:bg-black hover:text-white"
                }
              
              >
                Listed Books
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border"
                    : "hover:bg-black hover:text-white"
                }
                to="/pagesToRead"
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <a className=" text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border"
                  : "hover:bg-black hover:text-white"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border"
                  : "hover:bg-black hover:text-white"
              }
              to="/readList"
            >
              Listed Books
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border"
                  : "hover:bg-black hover:text-white"
              }
              to="/pagesToRead"
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end  hidden md:block space-x-2">
       <div className="flex ml-28 xl:ml-96 gap-2">
       {/* <Button name='Sign in'/> */}
       {/* <Button name='Sing Up'/> */}
       </div>

      </div>
    </div>
  );
};

export default Navbar;
