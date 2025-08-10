import React, { use, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbPointer } from "react-icons/tb";
import BookingDateModifyWindow from "./BookingDateModifyWindow";
import axios from "axios";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid, 
  Tooltip,
  Legend, 
  ResponsiveContainer, 
} from "recharts";

const BookingCarsList = ({ bookingCarsPromise }) => {
  const carsList = use(bookingCarsPromise);

  const [particularCar, setParticularCar] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const handleIsWindowOpen = (object) => {
    setParticularCar(object);
    setIsWindowOpen(!isWindowOpen);
  };

  const handleBookingCancel = async (booking) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.patch(
          `https://car-rentals-seven-ebon.vercel.app/booked-cars-modify/${booking._id}`,
          { bookingStatus: false }
        );
        const data = response.data;

        if (data.acknowledged && data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your booking has been cancelled successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Already, this booking is cancelled",
            showConfirmButton: true,
          });
        }
      }
    });
  };

  return (
    <div className="bg-blue-100 pt-1 pb-6">
      <p className="w-11/12 mx-auto bg-blue-50 text-center font-bold text-gray-700 text-xl mb-2 pb-2 sticky top-16">
        Your Total Booked Cars: {carsList.length}
      </p>
      <div className="w-11/12 mx-auto">
        <div className="overflow-x-auto bg-white rounded-md shadow-md ">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-50 text-sm text-gray-500">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left whitespace-nowrap uppercase tracking-wider"
                >
                  Car Photo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  Model
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  Booking Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  Booking Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left uppercase tracking-wider"
                >
                  <div className="flex items-center gap-4 justify-center">
                    Action
                    <TbPointer size={16} className="mt-2" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-100">
              {carsList.map((car, index) => (
                <tr
                  key={index}
                  className="text-gray-600 odd:bg-gray-100 even:bg-gray-200 hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="w-24 h-16 overflow-hidden p-3">
                    <img src={car.carImage} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {car.carModel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {car.bookingDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {car.totalPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {car.bookingStatus ? (
                      <span className="text-green-700 font-semibold">
                        Confirmed
                      </span>
                    ) : (
                      <span className="text-red-500 font-semibold">
                        Cancelled
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <div
                        onClick={() => handleIsWindowOpen(car)}
                        className="flex items-center gap-2 bg-blue-300 hover:bg-blue-400 px-2 py-1 text-white rounded-md shadow-xl cursor-pointer btn"
                      >
                        
                        <MdOutlineCalendarMonth />
                        Modify Date
                      </div>
                      <div
                        onClick={() => handleBookingCancel(car)}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-2 py-1 text-white rounded-md shadow-xl cursor-pointer btn"
                      >
                        <FaRegTrashAlt />
                        Cancel
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {isWindowOpen && particularCar && (
            <BookingDateModifyWindow
              particularCar={particularCar}
              handleIsWindowOpen={handleIsWindowOpen}
            ></BookingDateModifyWindow>
          )}
        </div>
      </div>

     
      {/* Recharts Integration: dailyRent on X-axis, totalPrice on Y-axis */}
      <div className="w-11/12 mx-auto mt-8 p-4 bg-white rounded-md shadow-2xl">
        <h3 className="text-center font-bold text-xl mb-4 text-blue-500">
          Booking Total Price(aggregating daily rent) by Car Model
        </h3>
        {carsList.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={carsList}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {/* X-axis: Car Model */}
              <XAxis dataKey="carModel" />
              {/* Y-axis: Total Price */}
              <YAxis dataKey="totalPrice" />
              <Tooltip />
              <Legend />
              {/* Line representing Total Price */}
              <Line
                type="monotone"
                dataKey="totalPrice" 
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="Total Booking Price" 
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-600">
            No confirmed bookings to display on the chart.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingCarsList;
