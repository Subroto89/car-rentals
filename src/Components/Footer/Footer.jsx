import React from "react";
import { Link } from "react-router";
import logo from "../../assets/carLogo.png"; // Update with your logo path
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="h-auto bg-gray-200">
      <div className="bg-black opacity-90 h-full w-full">
        {/* Footer - Top Part */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-11/12 mx-auto mb-4">
          {/* Logo & Institution Name */}
          <div className="pt-12">
            <figure>
              <img src={logo} alt="logo" className="w-18 mx-auto" />
            </figure>
            <h1 className="text-xs font-bold text-center text-blue-500">
              Go & Get Car Rentals
            </h1>
          </div>
          {/* About Us Text */}
          <div className="pt-12">
            <p className="text-md w-96 text-gray-50">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master new technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-12">
            <div className="text-yellow-600">
              <IoCallOutline size={34} />
            </div>
            <div>
              <h3 className="text-md font-semibold">Call For Car</h3>
              <p className="text-sm font-bold text-gray-50">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Footer-Middle Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 w-11/12 mt-16 mb-10 mx-auto text-sm font-bold ">
          <div>
            <h2 className="pb-6">Working Hours</h2>

            <div className="flex flex-col gap-6 text-sm">
              <div>
                <p className="text-yellow-500">MONDAY - FRIDAY</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>

              <div>
                <p className="text-yellow-500">SATURDAY</p>
                <p>10:00 AM - 7:00 PM</p>
              </div>

              <div>
                <p className="text-yellow-500">SUNDAY</p>
                <p>Close Day</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="pb-6">Useful Links</h2>
            <div>
              <ul className="flex flex-col gap-3 text-sm">
                <Link to="/available-cars">Car Booking</Link>
                <Link to="/help-center">Help Center</Link>
                <Link to="/privacypolicy">Privacy and Policy</Link>
                <Link to="/terms-of-use">Terms of Use</Link>
                <Link to="/contact-us">Contact Us</Link>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="pb-6">Head Office</h2>
            <div className="text-sm flex flex-col gap-3">
              <h3>Location:</h3>
              <p>
                123 Car Street, Suite 456 <br />
                Rentals City, TX 78701 <br />
                USA
              </p>

              <h3>JOIN US:</h3>
              <p>info@goandgetcar.com</p>
            </div>
          </div>

          <div>
            <h2 className="pb-6">Newsletter SignUp</h2>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3 text-sm"
              />
              <button className="btn btn-primary w-full text-sm font-semibold text-yellow-400">
                Subscribe
              </button>
              {/* Social Icon */}
              <div className="grid grid-flow-col gap-4 bg-gray-50 mt-3 py-1 justify-center items-center rounded-md shadow-md">
                <a
                  href="https://www.twitter.com"
                  target="_black"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-800 rounded-full p-1 border-2 border-blue-500 w-8 h-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_black"
                  className="flex items-center justify-center text-gray-600 hover:text-red-400 rounded-full p-1 border-2 border-blue-500 w-8 h-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_black"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-900 rounded-full p-1 border-2 border-blue-500 w-8 h-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm bg-black/10 pb-2">
          <p>@2025 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
