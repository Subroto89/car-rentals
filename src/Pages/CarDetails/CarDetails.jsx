import React from "react";
import { useLoaderData } from "react-router";

const CarDetails = () => {
  const carInfo = useLoaderData();
  const {
    _id,
    availability,
    bookingStatus,
    carDescription,
    carLocation,
    carModel,
    carName,
    carPhoto,
    carRegNo,
    dailyRent,
    entryDate,
    features,
  } = carInfo;
  console.log(carInfo);
  return (
    <div>
      <div className="w-11/12 mx-auto bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden h-[400px]">
        <h2 className="w-11/12 mx-auto text-xl font-bold mt-6">All Car Info</h2>
        <div className="flex items-center justify-start p-6">
          <figure>
            <img
              src={carPhoto}
              alt="car photo"
              className="w-98"
            />
          </figure>
          <div>
            <h2 className="text-xl font-bold text-blue-600">{carName}</h2>
            <p className="text-xl font-semibold">
              <span className="font-bold text-xl">Model:</span>
              {carModel}
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-xl">Reg No:</span>
              {carRegNo}
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-xl">Features:</span>{" "}
              {
                features.split(",").map((feature) => (
                  <spa className="text-blue-600 font-semibold border border-gray-200 px-3 mr-2">
                    {feature.trim()}
                  </spa>
                ))

                // features.map((feature, index)=><span key={index} className="text-blue-600 font-semibold text-lg px-2">{feature}</span>)
              }
            </p>
          </div>
        </div>
       <div>
         <div className="w-11/12 mx-auto flex gap-4">
            <p className="text-md font-semibold"><span className="font-bold text-xl mr-2">Location:</span>{carLocation}</p>
            <p className="text-md font-semibold"><span className="font-bold text-xl mr-2">Included on:</span>{entryDate}</p>
            <p className="text-md font-semibold"><span className="font-bold text-xl mr-2">Car Status:</span>{availability}</p>
            <p className="text-md font-semibold"><span className="font-bold text-xl mr-2">Booking Status:</span>{bookingStatus>0?'Booked' : 'Not Booked'}</p>
              <button className="bg-green-400 text-md font-semibold hover:bg-green-600 text-white hover:text-amber-600 px-3 py-1 rounded-md">Book Now</button>
        </div>
        <div>
            
        </div>
       </div>
              <hr className="w-11/12 mx-auto my-2 text-gray-300"/>
        <div className="w-11/12 mx-auto">
            {carDescription}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
