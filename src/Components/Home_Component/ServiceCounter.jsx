
import React from "react";
import CountUp from "react-countup";



const ServiceCounter = () => {
  
  return (
    <div>
      

        <div className="text-2xl font-bold text-center">
          <CountUp start={0} end={200} duration={2} delay={0} />
        </div>
        
    </div>
  );
};

export default ServiceCounter;
