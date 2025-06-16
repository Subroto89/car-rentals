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
    axios.post("http://localhost:3000/logout", {}, { withCredentials: true });
  };
  return (
    <div className="h-36 bg-gray-50 border-b-4 border-blue-400">
      <div className="w-11/12 mx-auto flex items-center justify-between relative">
        {/* Logo & Institution Name */}
        <div>
          <figure>
            <img src={logo} alt="logo" className="w-40 mx-auto pt-10" />
          </figure>
          <h1 className="absolute left-2 -bottom-4 text-sm font-bold text-center text-blue-700 pt-4">
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
                className="btn text-xl font-semibold bg-transparent text-blue-400 px-1 mx-2 mt-10 hover:border-b-2 hover:border-b-cyan-500"
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
                  className="btn text-xl font-semibold bg-transparent text-blue-400 px-1 mx-2 mt-10 hover:border-b-2 hover:border-b-cyan-500"
                >
                  {link.linkName}
                </NavLink>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Register, Sign In & Log Out Buttons */}
        <div className="hidden lg:block">
          {user ? (
            <div className="flex items-center space-x-4 bg-transparent text-blue-400 px-1 mx-2 mt-10">
              <Link onClick={handleSignOut} className="btn btn-outline text-xl">
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
              <Link to="/register" className="btn btn-outline text-xl mr-6 bg-transparent text-blue-400 px-1 mx-2 mt-10">
                <MdAccountCircle /> Register
              </Link>
              <Link to="/signin" className="btn btn-outline text-xl bg-transparent text-blue-400 px-1 mx-2 mt-10">
                <MdLogin /> Sign In
              </Link>
            </>
          )}
        </div>
        {/* Hamburger For Mobile Screen */}
        <div className="block lg:hidden text-blue-400 mt-10">
          {
            open ? <RxCross1 size={34} onClick={handleToggleSideBar} className="border p-2"/> : <RxHamburgerMenu size={40} onClick={handleToggleSideBar} className="border p-2"/> 
          }
        </div>
      </div>
      {/* Menu For Hamburger Icon */}
      <div className="mt-12 absolute top-20 z-50 w-full lg:hidden h-full">
        {open && <SideNav setOpen={setOpen}></SideNav>}
      </div>
    </div>
  );
};

export default Navbar;
