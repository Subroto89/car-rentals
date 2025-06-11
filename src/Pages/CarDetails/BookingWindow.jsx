import axios from "axios";
import React, { useState, useEffect, use } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const BookingWindow = ({ modalClose, carInfo }) => {
    const {user} = use(AuthContext)
  const { _id, carName, carModel, carPhoto, dailyRent, availability } = carInfo;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const d1 = new Date(startDate);
      const d2 = new Date(endDate);
      const differenceInTime = d2.getTime() - d1.getTime();
      const differenceInDays = Math.max(
        0,
        differenceInTime / (1000 * 60 * 60 * 24)
      );
      setTotalCost(differenceInDays * dailyRent);
    }
  }, [startDate, endDate, dailyRent]);

  //----------------------------------------------------------------
  //   Function For Formatting Date - Used In handleBooking Function 
  //----------------------------------------------------------------
  const formatDateInput = (dateInput) => {
    const date = new Date(dateInput);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  //----------------------------------------------------------------
  //   Function For Booking Car- For Book Now Button
  //----------------------------------------------------------------
  const handleBooking = async () => {
    const bookingInfo = {
      clientEmail: user.email,  
      carName: carName,
      carId: _id,
      carModel: carModel,
      carImage: carPhoto,
      bookingDate: formatDateInput(new Date()),
      startDate: formatDateInput(startDate),
      endDate: formatDateInput(endDate),
      dailyRent: dailyRent,
      totalPrice: totalCost,
      bookingStatus: true,
    };
    try {
      const response = axios.post(
        "http://localhost:3000/book-car",
        bookingInfo
      );
      const data = response.data;
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your car has been booked successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full fixed inset-0 bg-black/70  flex items-center justify-center">
      <div className="w-1/3 h-2/3 flex flex-col gap-2 bg-white rounded-md mt-30 text-gray-800 p-6">
        <h2 className="text-lg font-bold">Booking Confirmation</h2>
        <p>
          You are booking: <span className="font-semibold">{carName}</span>
        </p>
        <p>Price per day: {dailyRent} BDT</p>
        <p>Availability: {availability}</p>

        <fieldset className="relative">
          <label>Start Date:</label>
          <input
            type="date"
            className="border border-gray-600 px-3 py-1 w-full rounded-md"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <FaRegCalendarDays className="absolute top-8 right-3 pointer-events-none" />
        </fieldset>

        <fieldset className="relative">
          <label>End Date:</label>
          <input
            type="date"
            className="border border-gray-600 px-3 py-1 w-full rounded-md"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <FaRegCalendarDays className="absolute top-8 right-3 pointer-events-none" />
        </fieldset>

        <p>Total Cost: {totalCost} BDT</p>

        <div className="flex gap-4 justify-end">
          <button
            onClick={() => modalClose(false)}
            className="btn px-3 py-1 self-start"
          >
            Cancel
          </button>
          <button onClick={handleBooking} className="btn px-3 py-1 self-start">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWindow;
