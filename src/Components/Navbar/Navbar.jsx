import React, { use, useState } from "react";
import logo from "../../assets/carLogo.png";
import navLinks from "./navLinks";
import navLinksUserOnly from "./navLinksUserOnly";
import { Link, NavLink } from "react-router";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SideNav from "./SideNav";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import ThemeToggle from "../../../src/Components/ThemeToggle"

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  // --------------------------------------------------------
  // SideBar State and Toggle Function for Hamburger Icon
  // --------------------------------------------------------
  const [open, setOpen] = useState(false);
  const handleToggleSideBar = () => {
    setOpen(!open);
  };
  // --------------------------------------------------------
  // Sign Out User
  // --------------------------------------------------------
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your are signed Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });

    // Remove the token from httpOnly cookie
    axios.post("https://car-rentals-seven-ebon.vercel.app/logout", {}, { withCredentials: true });
  };
  return (
    <div className="bg-gray-50 border-b border-blue-400">
      <div className="w-11/12 mx-auto flex items-center justify-between py-2">
        {/* Logo & Institution Name */}
        <div>
          <figure>
            <img src={logo} alt="logo" className="w-18 mx-auto" />
          </figure>
          <h1 className="text-xs font-bold text-center text-blue-500">
            Go & Get Car Rentals
          </h1>
        </div>

        <div className="hidden lg:flex items-center ">
          {/* Navigation Links - Public*/}
          <div className="flex items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.linkPath}
                className="btn text-md font-semibold bg-transparent text-blue-400 px-1 mx-1 hover:border-b-2 hover:border-b-cyan-500"
              >
                {link.linkName}
              </NavLink>
            ))}
            
          </div>

          {/* Navigation Links - Users Only*/}
          {user ? (
            <div>
              {navLinksUserOnly.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.linkPath}
                  className="btn text-md font-semibold bg-transparent text-blue-400 px-1 mx-1 hover:border-b-2 hover:border-b-cyan-500"
                >
                  {link.linkName}
                </NavLink>
              ))}
            </div>
          ) : (
            ""
          )}
          <ThemeToggle/>
        </div>

        {/* Register, Sign In & Log Out Buttons */}
        <div className="hidden lg:block">
          {user ? (
            <div className="flex items-center space-x-4 bg-transparent text-blue-400 px-1">
              <Link onClick={handleSignOut} className="btn btn-outline text-md">
                <MdLogout /> Sign Out
              </Link>

              <div>
                <figure>
                  <img
                    src={user.photoURL}
                    className="w-12 h-12 rounded-full ring-2 ring-blue-600 p-1"
                  />
                </figure>
              </div>
            </div>
          ) : (
            <>
              <Link to="/register" className="btn btn-outline text-md mr-1 bg-transparent text-blue-400 px-1 mx-2">
                <MdAccountCircle /> Register
              </Link>
              <Link to="/signin" className="btn btn-outline text-md bg-transparent text-blue-400 px-1">
                <MdLogin /> Sign In
              </Link>
            </>
          )}
        </div>
        {/* Hamburger For Mobile Screen */}
        <div className="block lg:hidden text-blue-400">
          {
            open ? <RxCross1 size={34} onClick={handleToggleSideBar} className="border p-2"/> : <RxHamburgerMenu size={40} onClick={handleToggleSideBar} className="border p-2"/> 
          }
        </div>
      </div>
      {/* Menu For Hamburger Icon */}
      <div className=" absolute top-15 z-50 w-full lg:hidden h-full transition  duration-1000 ease-in-out">
        {open && <SideNav setOpen={setOpen}></SideNav>}
      </div>
    </div>
  );
};

export default Navbar;
