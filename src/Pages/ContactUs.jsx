import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }


   
    setStatus("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Contact Information Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-inter">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-inter leading-relaxed">
              Have questions about a rental, need assistance, or just want to
              say hello? Fill out the form or reach us directly using the
              information below. We're here to help!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="h-6 w-6 text-indigo-600 mr-3" />{" "}
                
                <span className="text-gray-800 font-inter">
                  +1 (123) 456-7890
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-6 w-6 text-indigo-600 mr-3" />{" "}
                
                <span className="text-gray-800 font-inter">
                  info@goandgetcar.com
                </span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />{" "}
                
                <address className="text-gray-800 not-italic font-inter">
                  123 Car Street, Suite 456 <br />
                  Rentals City, TX 78701 <br />
                  USA
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-inter"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-inter placeholder-gray-400"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 font-inter"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-inter placeholder-gray-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 font-inter"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-inter placeholder-gray-400 text-gray-600"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>

            {status && (
              <p
                className={`text-center font-semibold font-inter ${
                  status.includes("Thank you")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 font-inter"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
