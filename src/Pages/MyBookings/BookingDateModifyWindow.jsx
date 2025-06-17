import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import Swal from "sweetalert2";

const BookingDateModifyWindow = ({ handleIsWindowOpen, particularCar }) => {
    // ************************************

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  // ------------------------------------------------------------------------
  // Calculating Total Cost When Start Date / End Date Changes
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (startDate && endDate) {
      const d1 = new Date(startDate);
      const d2 = new Date(endDate);
      const differenceInTime = d2.getTime() - d1.getTime();
      const differenceInDays = Math.max(
        0,
        differenceInTime / (1000 * 60 * 60 * 24)
      );
      
      setTotalCost(differenceInDays * particularCar.dailyRent);
     
    }
  }, [startDate, endDate, particularCar.dailyRent]);

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };

  const handleModify = async () => {

    if (!startDate || !endDate) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select both start and end dates!",
            });
            return;
        }

          const d1 = new Date(startDate);
        const d2 = new Date(endDate);

        if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
             Swal.fire({
                icon: "error",
                title: "Invalid Dates",
                text: "Please select valid dates.",
            });
            return;
        }


         if (d1.getTime() > d2.getTime()) { // Compare time values
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Start date cannot be after end date!",
            });
            return; // Stop execution
        }
    const modifiedData = {
      bookingDate: formatDate(new Date()),
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      totalPrice: totalCost,
      bookingStatus: true,
    };

    try{
        const response = await axios.patch(`https://car-rentals-seven-ebon.vercel.app/booked-cars-modify/${particularCar._id}`,modifiedData)
         const data = response.data; 

            console.log("Backend response data:", data);
           if (data.acknowledged && data.modifiedCount === 1) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Booking date modified successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleIsWindowOpen(data); // Close the window on successful update
    }else if (data.acknowledged && data.matchedCount === 1 && data.modifiedCount === 0) {
                 Swal.fire({
                    icon: "info",
                    title: "No changes made",
                    text: "The new dates are the same as the existing ones, or no modification was required.",
                });
                handleIsWindowOpen();
            } else {
                // This case handles if the document was found but not modified, or not found at all
                Swal.fire({
                    icon: "warning",
                    title: "Modification Failed",
                    text: "Booking not found or no changes applied.",
                });
            }
  }catch(error){
                console.log(error)
            }
        }

  return (
    <div className="w-full h-full fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w2/3 lg:w-1/3 h-1/3 flex flex-col gap-2 bg-white rounded-md mt-28 text-gray-800 p-6">
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
        <div className="flex items-center justify-end gap-3">
          <button onClick={handleIsWindowOpen} className="btn">
          Cancel
        </button>
          <button onClick={handleModify} className="btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default BookingDateModifyWindow;
