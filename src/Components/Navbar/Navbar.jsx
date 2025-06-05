import React, { use, useState } from "react";
import logo from "../../assets/carLogo.png";
import navLinks from "./navLinks";
import navLinksUserOnly from "./navLinksUserOnly";
import { Link, NavLink } from "react-router";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

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
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo & Institution Name */}
        <div className="flex flex-col justify-center">
          <figure>
            <img src={logo} alt="car-logo" className="w-40" />
          </figure>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-blue-500">
              Go & Get Car Rentals
            </h1>
            <p className="text-xl font-bold text-blue-500">
              Ready For Your Road
            </p>
          </div>
        </div>

        <div className="flex items-center">
          {/* Navigation Links - Public*/}
          <div className="flex items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.linkPath}
                className="btn text-xl font-semibold hover:border-b-2 hover:border-b-cyan-500"
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
                  className="btn text-xl font-semibold hover:border-b-2 hover:border-b-cyan-500"
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
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
            <Link onClick={handleSignOut} className="btn btn-outline text-xl">
              <MdLogout /> Sign Out
            </Link>

            <div>
              <figure>
                <img src={user.photoURL} className="w-12 h-12 rounded-full ring-2 ring-blue-600 p-1"/>
              </figure>
            </div>
            </div>
          ) : (
            <>
              <Link to="/register" className="btn btn-outline text-xl mr-6">
                <MdAccountCircle /> Register
              </Link>
              <Link to="/signin" className="btn btn-outline text-xl">
                <MdLogin /> Sign In
              </Link>
            </>
          )}
        </div>
        {/* Hamburger For Mobile Screen */}
        <div>
          <RxHamburgerMenu size={40} onClick={handleToggleSideBar} />
        </div>
      </div>
      {/* Menu For Hamburger Icon */}
      <div className="mt-10">{open && <SideNav></SideNav>}</div>
    </div>
  );
};

export default Navbar;
