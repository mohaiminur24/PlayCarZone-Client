import React, { useContext } from "react";
import { AuthContext } from "../AuthConfigrationLayout/AuthConfigration";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const NavbarLayout = () => {
    const {user,loggedout} = useContext(AuthContext);


    const loggedoutuser =()=>{
      loggedout().then(res=>{
        Swal.fire({
          icon: 'success',
          title: 'Successfully Done...',
          text: 'User Logout successfully!',
        });
      }).catch(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Failed...',
          text: 'user Login out failed!',
        })
      })
    }

    const navlink = <>
        <li>
            <NavLink to="/" className={({isActive})=> isActive && "text-main font-bold"}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/alltoys" className={({isActive})=> isActive && "text-main font-bold"}>All Toys</NavLink>
        </li>
        {
          user && <>
        
          <li>
              <NavLink to="/mytoys" className={({isActive})=> isActive && "text-main font-bold"}>My Toys</NavLink>
          </li>
          <li>
              <NavLink to="/addtoy" className={({isActive})=> isActive && "text-main font-bold"}>Add A Toy</NavLink>
          </li>
            </>
        }
        <li>
            <NavLink to="/blog" className={({isActive})=> isActive && "text-main font-bold"}>Blog</NavLink>
        </li>
    </>
    
  return (
    <div className="shadow-sm">
      <div className="w-11/12 mx-auto navbar bg-base-100 h-20">
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
              <img className="sm:w-10 w-6" src="https://images.freeimages.com/fic/images/icons/2018/business_icons_for/256/car_repair.png" alt="" />
              <h1 className="font-header font-bold sm:text-lg text-sm">PlayCar<span className="text-button">Zone</span></h1>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal flex gap-5 font-pera font-semibold tracking-tighter">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
              {
                user ? <div className="flex gap-3"><img title={user?.displayName} className="w-10 h-10 rounded-md shadow-md hidden sm:block" src={user?.photoURL} alt="" /><button className="sm:px-3 px-2 py-2 bg-button rounded-md shadow-md sm:uppercase font-bold text-white hover:bg-buttonhover" onClick={loggedoutuser}>Logout</button></div> : <NavLink to="/login"><button className="px-5 py-2 font-extrabold bg-button rounded-md shadow-sm text-white text-pera hover:bg-buttonhover tracking-wide">Login</button></NavLink>
              }
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
