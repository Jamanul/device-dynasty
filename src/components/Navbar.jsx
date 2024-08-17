import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebaseAuth/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  //console.log(user)
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="font-bold text-primary">
            <Link to={'/all-products'}>All product</Link>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <Link to={'/'} className=" font-bold text-primary text-xl">Device Dynasty</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold hover:text-primary duration-200 ">
            <Link to={'/all-products'}>All product</Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
      <button>
            <Link to={"/login"} className="text-white btn bg-primary">
              Login
            </Link>
          </button>
        <div className="dropdown dropdown-end">
          
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img src={user.photoURL} alt="" srcSet="" />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <h2 className="text-white btn bg-primary">
                {user ? user.displayName : "Profile Name"}
              </h2>
            </li>
            {user ? (
              <li>
                <button onClick={()=>logOut()} className="text-white btn bg-primary">Log Out</button>
              </li>
            ) : (
              <li>
                <button className="text-white btn bg-primary">
                  <Link to={"/login"} >
                    Login
                  </Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
