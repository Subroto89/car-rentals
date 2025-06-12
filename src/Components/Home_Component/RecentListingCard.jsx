import React from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
const RecentListingCard = ({ car }) => {
  const {
    carPhoto,
    carModel,
    dailyRent,
    availability,
    bookingStatus,
    entryDate,
  } = car;

  const getTimeAgo = (dateString) => {
    const entryDate = new Date(dateString);
    const todayDate = new Date();
    const gapInMillisecond = Math.abs(todayDate - entryDate);
    const gapInDays = Math.floor(gapInMillisecond / (1000 * 60 * 60 * 24));
    if (gapInDays === 0) return "Today";
    return `${gapInDays} days ago`;
  };

  //    const todayDate = new Date()
  //    const postDate = new Date(entryDate)
  //    const postedTimeAgo = Math.ceil(Math.abs(todayDate - postDate) / (1000 * 60 * 60 * 24)) ;

  return (
    <div className="text-xl text-gray-800 bg-white rounded-lg shadow-lg hover:scale-102 p-4">
      <figure className="w-full h-46 overflow-hidden rounded-lg border border-gray-200">
        <img
          src={carPhoto}
          alt="car photo"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="pl-3 pt-4">
        <h2 className="flex items-center gap-1 text-xl font-bold">
          <IoCarSportSharp />{" "}
          <span className="text-blue-500 font-semibold">{carModel}</span>
        </h2>
        <p className="text-lg flex items-center gap-1">
          <BsCurrencyDollar />{" "}
          <span className="text-blue-500 font-semibold">{dailyRent}/day</span>{" "}
        </p>
        <p className="text-lg">
          Booking Amount:{" "}
          <span className="text-blue-500 font-semibold">{bookingStatus}</span>{" "}
        </p>
        <p className="text-lg">
          Car Added:{" "}
          <span className="text-blue-500 font-semibold">
            {getTimeAgo(entryDate)}
          </span>
        </p>
        <p className="text-lg">
          Stauts:{" "}
          {availability ? (
            <span className="badge bg-green-300 text-white font-semibold">
              Available
            </span>
          ) : (
            <span className="badge  bg-red-300 text-white font-semibold">
              Not Available
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default RecentListingCard;
