import React, { useContext } from "react";
import { AuthContext } from "../AuthConfigrationLayout/AuthConfigration";
import { NavLink } from "react-router-dom";

const NavbarLayout = () => {
    const {user} = useContext(AuthContext);

    const navlink = <>
        <li>
            <NavLink to="/" className={({isActive})=> isActive && "text-main font-bold"}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/alltoys" className={({isActive})=> isActive && "text-main font-bold"}>All Toys</NavLink>
        </li>
        <li>
            <NavLink to="/mytoys" className={({isActive})=> isActive && "text-main font-bold"}>My Toys</NavLink>
        </li>
        <li>
            <NavLink to="/addtoys" className={({isActive})=> isActive && "text-main font-bold"}>Add A Toy</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={({isActive})=> isActive && "text-main font-bold"}>Blog</NavLink>
        </li>
    </>
    
  return (
    <div className="navbar bg-base-100 h-20 drop-shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact text-center font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        
        <div className="flex justify-center items-center gap-2">
            <img className="w-10" src="https://images.freeimages.com/fic/images/icons/2018/business_icons_for/256/car_repair.png" alt="" />
            <h1 className="font-header font-bold text-lg">PlayCar<span className="text-button">Zone</span></h1>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal flex gap-5 font-pera font-semibold tracking-tighter">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
            <NavLink><button className="px-5 py-2 font-extrabold bg-button rounded-md shadow-sm text-white text-pera hover:bg-buttonhover tracking-wide">Login</button></NavLink>
      </div>
    </div>
  );
};

export default NavbarLayout;
