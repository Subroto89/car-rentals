import React, { useState } from "react";
import logo from "../../assets/carLogo.png";
import navLinks from "./navLinks";
import navLinksUserOnly from "./navLinksUserOnly";
import { Link, NavLink } from "react-router";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";

const Navbar = () => {
  // SideBar State and Toggle Function
  const [open, setOpen] = useState(false);
  const handleToggleSideBar = () => {
    setOpen(!open);
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
            <h1 className="text-2xl font-bold text-blue-500">Go & Get Car Rentals</h1>
            <p className="text-xl font-bold text-blue-500">Ready For Your Road</p>
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
        </div>

        {/* Register, Sign In & Log Out Buttons */}
        <div>
          <Link to="/register" className="btn btn-outline text-xl">
            <MdAccountCircle /> Register
          </Link>
          <Link to="/signin" className="btn btn-outline text-xl">
            <MdLogin /> Sign In
          </Link>

          <Link className="btn btn-outline text-xl">
            <MdLogout /> Sign Out
          </Link>
        </div>
        {/* Hamburger For Mobile Screen */}
        <div>
          <RxHamburgerMenu size={40} onClick={handleToggleSideBar}/>
        </div>
      </div>
        {/* Menu For Hamburger Icon */}
      <div className="mt-10">
        {open && <SideNav></SideNav>}
      </div>
    </div>
  );
};

export default Navbar;
