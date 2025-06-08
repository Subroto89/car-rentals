import React, { use, useState } from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import CarUpdate from "./CarUpdate";
import axios from "axios";
import Swal from "sweetalert2";

const CarsList = ({ myCarsPromise }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  

  const handleModalOpen = (id) => {
    setSelectedCarId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedCarId(null);
  };
  // carsList form auto update korar jonne carsData ti state e rakha jete pare & set function ti update form e
  // pathano jete pare
  const carsData = use(myCarsPromise);


  const handleDeleteCar = async (id, onDeletionSuccess) => {
    const result = await Swal.fire({
      title: "Do you want to delete?",
      text: "Once deleted, it cannot be reverted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/delete-car/${id}`
        );

        if (response.data && response.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your car entry has been deleted successfully.",
            icon: "success",
          });
          // Notify the parent component to re-fetch/update the car list
          if (onDeletionSuccess) {
            onDeletionSuccess();
          }
        } else {
          // If backend responds 2xx but deletedCount is 0, means car not found on server
          Swal.fire({
            title: "Not Found!",
            text: "The car was not found or already deleted on the server.",
            icon: "info",
          });
        }
      } catch (error) {
        console.error("Error deleting car:", error);

        let errorMessage =
          "An unexpected error occurred while trying to delete the car.";
        if (error.response) {
          errorMessage =
            error.response.data.message ||
            `Server error: ${error.response.status} - ${error.response.statusText}`;
        } else if (error.request) {
          errorMessage =
            "No response from the server. Please check your network connection.";
        } else {
          errorMessage = `Error in request setup: ${error.message}`;
        }

        Swal.fire({
          title: "Deletion Failed!",
          text: errorMessage,
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-white">{carsData.length}</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-200 mx-8 md:mx-16 my-8">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Head */}
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
                Photo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Model No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Daily Rental Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Booking Count
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Availability
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Entry Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {carsData.map((car, index) => (
              <tr
                key={car._id}
                className="text-gray-600 hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={car.carPhoto} className="w-20 h-14" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.carModel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.dailyRent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {car.bookingStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      car.availability == "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {car.availability == "Available"
                      ? "Available"
                      : "Not Available"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.entryDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-4">
                  <Link
                    onClick={() => handleModalOpen(car._id)}
                    id="anchorEdit"
                    // to={`/car-update/${car._id}`}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group"
                  >
                    <MdModeEdit
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                    />
                    {/* <Tooltip
                      anchorSelect="#anchorEdit"
                      content="Edit the post!"
                    /> */}
                  </Link>

                  <div
                    id="anchor-element"
                    onClick={() => handleDeleteCar(car._id)}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-red-600 cursor-pointer group"
                  >
                    <MdOutlineDeleteOutline
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                    />
                    {/* <Tooltip
                      anchorSelect="#anchor-element"
                      content="Delete Post!"
                    /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedCarId && (
        <CarUpdate
          selectedCarId={selectedCarId}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default CarsList;
