import React from "react";
import { Link } from "react-router";
import logo from "../../assets/carLogo.png"; // Update with your logo path
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="h-[800px] bg-[url('https://i.ibb.co/fVsJ2kdp/78786.jpg')] bg-cover bg-center">
      <div className="bg-black opacity-60 h-full w-full">
        {/* Footer - Top Part */}
        <div className="flex items-center justify-between w-10/12 mx-auto mb-20">
          <div className="relative">
            <figure>
              <img src={logo} alt="logo" className="w-40 mx-auto pt-10" />
            </figure>
            <h1 className="absolute left-2 -bottom-4 text-sm font-bold text-center text-yellow-400 pt-4">
              Go & Get Car Rentals
            </h1>
          </div>

          <div className="pt-12">
            <p className="text-lg w-96">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master new technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-12">
            <div className="text-yellow-600">
              <IoCallOutline size={60} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call For Car</h3>
              <p className="text-xl font-bold text-white">+880-1710-000000</p>
            </div>
          </div>
        </div>

        {/* Footer-Middle Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-16 w-11/12 mx-auto text-2xl font-bold ">
          <div>
            <h2 className="pb-6">Working Hours</h2>

            <div className="flex flex-col gap-6 text-lg">
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
              <ul className="flex flex-col gap-3 text-lg">
                <Link>Taxi Booking</Link>
                <Link>Help Center</Link>
                <Link>Privacy and Policy</Link>
                <Link>Terms of Use</Link>
                <Link>Contact Us</Link>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="pb-6">Head Office</h2>
            <div className="text-lg flex flex-col gap-3">
              <h3>Location:</h3>
              <p>1234 Main Street, City, State, MT 03800</p>

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
                className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4 text-lg"
              />
              <button className="btn btn-primary w-full text-xl font-semibold text-yellow-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-lg py-4 bg-gray-400">
        <p>@2025 DynamicLayers All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
