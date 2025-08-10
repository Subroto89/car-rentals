import React, { use } from "react";
import { NavLink, Link } from "react-router";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import navLinksUserOnly from "./navLinksUserOnly";
import navLinks from "./navLinks";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const SideNav = ({ setOpen }) => {
  const { user, signOutUser } = use(AuthContext);

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
    <div>
      <div className="h-screen w-1/2 bg-gray-50 pl-4 pr-4 pt-6 ">
        <div className="mb-4 flex items-center justify-center">
          {user && (
            <img
              src={user?.photoURL}
              className="w-16 h-16 rounded-full ring-2 ring-blue-600 p-1"
            />
          )}
        </div>
        {/* Navigation Links - Public*/}
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.linkPath}
            onClick={() => setOpen()}
            className="flex flex-col text-md text-gray-600 font-semibold border border-gray-600 mb-2 hover:bg-blue-100 rounded-md px-4 py-1"
          >
            {link.linkName}
          </NavLink>
        ))}

        {/* Navigation Links - Users Only*/}
        <div>
          {user &&
            navLinksUserOnly.map((link, index) => (
              <NavLink
                key={index}
                to={link.linkPath}
                onClick={() => setOpen()}
                className="flex flex-col text-md text-gray-600 font-semibold border border-gray-600 mb-2 hover:bg-blue-100 rounded-md px-4 py-1"
              >
                {link.linkName}
              </NavLink>
            ))}
        </div>
        <div className="divider divider-primary px-12"></div>
        {/* Buttons */}
        <div className="flex flex-col gap-4 text-gray-600">
          {user ? (
            <button
              onClick={() => {
                handleSignOut(), setOpen();
              }}
              className="btn btn-outline text-md font-bold hover:bg-blue-100 hover:text-gray-700"
            >
              <MdLogout /> Sign Out
            </button>
          ) : (
            <>
              <Link to="/register" className="btn btn-outline text-md">
                <MdAccountCircle /> Register
              </Link>
              <Link
                to="/signIn"
                onClick={() => setOpen(false)}
                className="btn btn-outline text-md"
              >
                <MdLogin /> Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
