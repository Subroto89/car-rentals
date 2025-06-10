import React, { use, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbPointer } from "react-icons/tb";
import BookingDateModifyWindow from "./BookingDateModifyWindow";
import axios from "axios";
import Swal from "sweetalert2";

const BookingCarsList = ({ bookingCarsPromise }) => {
  const carsList = use(bookingCarsPromise);
  
console.log('this is from BookingCarsList',carsList)

    const [particularCar, setParticularCar] = useState(null)
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const handleIsWindowOpen = (object) => {
        setParticularCar(object);
        setIsWindowOpen(!isWindowOpen);
    }
   

    const handleBookingCancel = async(car) => {
      
      
 
      const response = await axios.patch(`http://localhost:3000/booked-cars-modify/${car._id}`, {bookingStatus:false})
      const data = response.data;
      if (data.acknowledged && data.modifiedCount === 1) {
                     Swal.fire({
                         position: "center",
                         icon: "success",
                         title: "Your booking has been cancelled successfully!",
                         showConfirmButton: false,
                         timer: 1500,
                     });
    }
  }

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-white">This is my booking car page</h2>
      <p>{carsList.length}</p>
      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-100">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Car Photo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Model
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Booking Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Booking Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center gap-4">
                Action<TbPointer size={16} className="mt-2"/>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {carsList.map((car, index) => (
              <tr key={index}
               className="text-gray-600 hover:bg-blue-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="w-24 h-16 overflow-hidden p-3">
                  <img src={car.carImage} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.carModel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.bookingDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.totalPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.bookingStatus? <span className="text-green-700 font-semibold">Confirmed</span> : <span className="text-red-500 font-semibold">Cancelled</span>}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                          <div onClick={()=>handleIsWindowOpen(car)} className="flex items-center gap-2 bg-blue-400 px-2 py-1 text-white rounded-md shadow-xl cursor-pointer btn"> <MdOutlineCalendarMonth />Modify Dates</div>
                          <div onClick={()=>handleBookingCancel(car)}className="flex items-center gap-2 bg-blue-400 px-2 py-1 text-white rounded-md shadow-xl cursor-pointer btn"><FcCancel />Cancel</div>
                      </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {
            isWindowOpen && particularCar && <BookingDateModifyWindow particularCar={particularCar} handleIsWindowOpen={handleIsWindowOpen}></BookingDateModifyWindow>
        }
        
      </div>
    </div>
  );
};

export default BookingCarsList;
