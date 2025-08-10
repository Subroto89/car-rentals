import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookingWindow from "./BookingWindow";

const CarDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true)
    }
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
  


  return (
    <div>
      <div className="w-11/12 lg:w-9/12 mx-auto bg-blue-50 text-gray-800 rounded-md shadow-md overflow-hidden h-auto pb-8 mt-6">
        <h2 className="w-11/12 mx-auto text-xl font-bold mt-6">Car Info</h2>
        <div className="flex items-center justify-start gap-6 p-6">
          <figure className="overflow-hidden rounded-md shadow-md">
            <img
              src={carPhoto}
              alt="car photo"
              className="w-60 lg:w-80"
            />
          </figure>
          <div className="space-y-1">
            <h2 className="text-md font-bold text-blue-600">{carName}</h2>
            <p className="text-md font-semibold">
              <span className="font-bold text-sm lg:text-md">Model:</span>
              {carModel}
            </p>
            <p className="text-sm lg:text-md font-semibold">
              <span className="font-bold text-sm lg:text-md">Reg No:</span>
              {carRegNo}
            </p>
            <p className="text-sm lg:text-md font-semibold hidden lg:block">
              <span className="font-bold text-sm lg:text-md">Features:</span>{" "}
              {
                
                features.map((feature) => (
                  <span className="text-blue-600 text-sm lg:text-md font-semibold border border-gray-200 px-3 mr-2 rounded-md">
                    {feature.trim()}
                  </span>
                ))

               
              }
            </p>
          </div>
        </div>
         <p className="text-lg lg:text-xl font-semibold block lg:hidden w-11/12 mx-auto mb-2">
              <span className="font-bold text-lg lg:text-xl">Features:</span>{" "}
              {
                
                features.map((feature) => (
                  <span className="text-blue-600 text-sm lg:text-lg font-semibold border border-gray-200 px-3 mr-2 rounded-lg">
                    {feature.trim()}
                  </span>
                ))

               
              }
            </p>
       <div>
         <div className="w-11/12 mx-auto hidden  lg:flex gap-4">
            <p className="text-md font-semibold"><span className="font-bold text-sm lg:text-md mr-2">Location:</span>{carLocation}</p>
            <p className="text-md font-semibold"><span className="font-bold text-sm lg:text-md mr-2">Included on:</span>{entryDate}</p>
            <p className="text-md font-semibold"><span className="font-bold text-sm lg:text-md mr-2">Daily Rent:</span>{dailyRent}</p>
            <p className="text-md font-semibold"><span className="font-bold text-sm lg:text-md mr-2">Car Status:</span>{availability}</p>
            <p className="text-md font-semibold"><span className="font-bold text-sm lg:text-md mr-2">Booking Status:</span>{bookingStatus>0?'Booked' : 'Not Booked'}</p>
              <button onClick={handleShowModal} className="bg-blue-300 text-md font-semibold hover:bg-blue-400 text-white hover:text-white px-3 py-1 rounded-md">Book Now</button>
        </div>

        <div className="w-11/12 mx-auto block lg:hidden">
          <table className="w-full">
              <tr>
                <td className="font-bold text-sm lg:text-md mr-2">Location:</td>
                <td className="text-md font-semibold">{carLocation}</td>
                <td className="font-bold text-sm lg:text-md mr-2">Included On:</td>
                <td className="text-md font-semibold">{entryDate}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm lg:text-md mr-2">Daily Rent:</td>
                <td className="text-md font-semibold">{dailyRent}</td>
                <td className="font-bold text-sm lg:text-md mr-2">Car Status:</td>
                <td className="text-md font-semibold">{availability}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm lg:text-md mr-2">Booking Status:</td>
                <td className="text-md font-semibold">{bookingStatus ?'Booked' : 'Not Booked'}</td>
                <td colspan="2" className="pr-4">
                  <button onClick={handleShowModal} className="w-full bg-blue-300 text-md font-semibold hover:bg-blue-400 text-white hover:text-white py-1 rounded-md">Book Now</button>
                </td>
                
              </tr>
          </table>
        </div>
        <div>
            
        </div>
       </div>
              <hr className="w-11/12 mx-auto my-2 text-gray-300"/>
        <div className="w-11/12 mx-auto">
            {carDescription}
        </div>
      </div>
      <div>
        {
            showModal && <BookingWindow carInfo={carInfo} modalClose={setShowModal}/>
        }
      </div>
    </div>
  );
};

export default CarDetails;
