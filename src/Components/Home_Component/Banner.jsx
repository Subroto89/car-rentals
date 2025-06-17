import React from "react";
import { Link } from "react-router";
import {motion} from "motion/react";

const Banner = () => {
  return (
    <div className="relative h-screen bg-cover bg-no-repeat bg-center bg-[url('https://imgd.aeplcdn.com/1056x594/n/cw/ec/141867/nexon-facelift-exterior-left-front-three-quarter-4.jpeg?isig=0&q=80&wm=1')]">
      {/* Black overlay with opacity, positioned absolutely to cover the background */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content container, positioned relatively and given a higher z-index
          to ensure it appears above the absolute overlay */}
      <div className="relative z-10 flex flex-col items-left justify-top h-full w-full pt-20 pl-20">
        {/* Motivational Speech - The text should now be fully opaque white */}
        <motion.h2 animate={{color:['#ff0022', '#2cff02', '#008350', '#ffffff'], transition:{duration:6, repeat:Infinity}}} className="w-4/5 lg:w-1/2 text-xl md:text-3xl lg:text-4xl text-white text-left font-bold pt-20">
          Drive Your Dreams, <br />
          More Than a Car, It's Your Canvas: Craft Your Next Great Story.
        </motion.h2>
        {/* CTA Button - Changed from Link to <a> tag to avoid routing errors */}
        <Link
          to="/available-cars"
          className="w-4/7 lg:w-2/7  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-center"
        >
          Explore Available Cars
        </Link>
      </div>
    </div>
  );
};

export default Banner;
