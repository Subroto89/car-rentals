import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {

    const { createUser } = use(AuthContext);
    // State for show & hide password
  const [passwordType, setPasswordType] = useState("password");

//   functionality to show & hide password
const handleShowPassword = () => {
    setPasswordType("text");
  };

  const handleHidePassword = () => {
    setPasswordType("password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // form fields' value
    const form = e.target;
    const userName = form.name.value;
    const emailId = form.email.value;
    const userPhoto = form.photo.value;
    const password = form.password.value;
    // Password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (password.length < 6) {
      alert("Password must be at least in 6 digit");
      return;
    }
    if (!regex.test(password)) {
      alert("Password must have atleast 1 uppercase and 1 lower case");
      return;
    }

    // Register User Using Email and Password
    createUser(emailId, password)
    .then(userCredential => {
        const user = userCredential.user;
        console.log("User registered successfully", user);
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div className="max-w-1/2 mx-auto p-8 space-y-8 rounded-xl bg-white shadow-md dark:bg-gray-300 dark:text-gray-800">
      <div >
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Name */}
          <fieldset>
            <label htmlFor="name" className="block font-semibold text-xl mb-1">
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </fieldset>
          {/* User Email Id */}
          <fieldset>
            <label htmlFor="name" className="block font-semibold text-xl mb-1">
              Email Id
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </fieldset>

          {/* User Photo URL */}
          <fieldset>
            <label htmlFor="name" className="block font-semibold text-xl mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your photo url"
              className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </fieldset>

          {/* Password */}
          <fieldset className="relative">
            <label htmlFor="name" className="block font-semibold text-xl mb-1">
              Password
            </label>
            <input
              type={passwordType}
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
            {passwordType === "password" ? (
              <FaEyeSlash
                size={20}
                className="absolute right-3 top-10" 
                onClick={() => handleShowPassword()
                    
                }
              />
            ) : (
              <FaEye
                size={20}
                className="absolute right-3 top-10"
                onClick={() => handleHidePassword()}
              />
            )}
          </fieldset>
           <button
              type="submit"
              className="btn block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-blue-600"
            >
              Register
            </button>
        </form>
      </div>
      <div className="divider divider-primary">Instead, You Can Sign In with Google</div>
      <button className="btn bg-white text-black border-[#e5e5e5] w-full">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
 <p className="text-center">Already have an account? <Link to="/signin" className="button border-b hover:border-blue-800 text-blue-500 font-bold cursor-pointer">Sign In</Link></p>
    </div>
  );
};

export default Register;
