import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const {signInUser} = use(AuthContext);
    const [passwordType, setPasswordType] = useState("password");
    // Functionality to show & hide password
    const handleShowPassword = () => {
        setPasswordType("text");
    };  
    const handleHidePassword = () => {
        setPasswordType("password");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form fields' value
        const form = e.target;
        const emailId = form.email.value;
        const password = form.password.value;

        // Sign In User Using Email and Password
        signInUser(emailId, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log("User signed in successfully", user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="max-w-1/2 mx-auto p-8 space-y-8 rounded-xl bg-white shadow-md dark:bg-gray-300 dark:text-gray-800">
             <div >
               <h1 className="text-2xl font-bold text-center">Sign In</h1>
               <form onSubmit={handleSubmit} className="space-y-6">
                               
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
                   <span className="text-sm absolute right-0 top-20 font-semibold hover:text-blue-600 cursor-pointer">Forgot Password?</span>
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
                     className="btn block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-blue-600 mt-10"
                   >
                     Sign In
                   </button>
               </form>
             </div>
             <div className="divider divider-primary">Instead, You Can Sign In With Google</div>
             <button className="btn bg-white text-black border-[#e5e5e5] w-full">
         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
         Login with Google
       </button>
       <p className="text-center">Don't have an account? <Link to="/register" className="button border-b hover:border-blue-800 text-blue-500 font-bold cursor-pointer">Register</Link></p>
           </div>
    );
};

export default SignIn;