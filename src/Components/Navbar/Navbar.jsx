import React from "react";
import logo from '../../assets/carLogo.png';
import navLinks from './navLinks';
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* Logo & Institution Name */}
        <div className="flex flex-col justify-center">
            <figure>
                <img src={logo} alt='car-logo' className="w-40"/>
            </figure>
            <div className="flex flex-col justify-center">
                <h1>Go & Get Car Rentals</h1>
                <p>Ready For Your Road</p>
            </div>
        </div>

        {/* Navigation Links - Public*/}
        <div className="flex items-center">
           {
            navLinks.map((link, index) => (<NavLink key={index} 
                                                    to={link.linkPath}
                                                    className="btn border-1 border-gray-300 text-lg">    

                                            {link.linkName}
                                           </NavLink>))
           } 
        </div>

        {/* Navigation Links - Users Only*/}

        {/* Register, Sign In & Log Out Buttons */}

        {/* Hamburger For Mobile Screen */}
      </div>

        {/* Menu For Hamburger Icon */}
      <div>

      </div>
    </div>
  );
};

export default Navbar;
