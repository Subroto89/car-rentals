import React from "react";
import { NavLink, Link } from "react-router";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import navLinksUserOnly from "./navLinksUserOnly";
import navLinks from "./navLinks";

const SideNav = () => {
  return (
    <div>
      <div className="h-screen w-1/2 bg-white pl-4 pr-4 pt-6">
        {/* Navigation Links - Public*/}
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.linkPath}
            className="flex flex-col text-xl text-gray-600 font-semibold border border-gray-600 mb-2"
          >
            {link.linkName}
          </NavLink>
        ))}

        {/* Navigation Links - Users Only*/}
        {navLinksUserOnly.map((link, index) => (
          <NavLink
            key={index}
            to={link.linkPath}
            className="flex flex-col text-xl text-gray-600 font-semibold border border-gray-600 mb-2 "
          >
            {link.linkName}
          </NavLink>
        ))}
        <div className="divider divider-primary"></div>
        {/* Buttons */}
        <div className="flex flex-col gap-4 text-gray-600">
          <Link className="btn btn-outline text-xl">
            <MdAccountCircle /> Register
          </Link>
          <Link className="btn btn-outline text-xl">
            <MdLogin /> Sign In
          </Link>

          <Link className="btn btn-outline text-xl">
            <MdLogout /> Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
