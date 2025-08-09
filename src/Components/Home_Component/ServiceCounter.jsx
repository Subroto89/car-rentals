import React from "react";
import CountUpCard from "./CountUpCard";


const countResources = [
  {
    img : 'https://i.ibb.co/ZpD1kv2X/happy-Client.jpg', 
    title: 'Happy Customers',
    endValue: 10000

  },
  {
    img : 'https://i.ibb.co/dqDLbwb/luxury-Car.jpg', 
    title: 'Luxury Car',
    endValue: 300

  },
  {
    img : 'https://i.ibb.co/Cpp524pg/gear.jpg', 
    title: 'Accident-Free Rentals',
    endValue: 99
  },
   {
    img : 'https://i.ibb.co/WShhx9N/insured-Car.jpg', 
    title: 'Fully Insured Vehicles',
    endValue: 100

  }
]



const ServiceCounter = () => {
  
  return (
    <div className="w-full bg-gray-50 pt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 pb-4">
        Our Services Short View
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800 text-2xl font-bold">
        {
          countResources.map((resource,index) => (<CountUpCard key={index} resource={resource} ></CountUpCard>))
        }
      
      </div>
    </div>
  );
};

export default ServiceCounter;
