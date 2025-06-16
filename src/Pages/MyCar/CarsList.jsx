// CarsList.jsx
import React, { useState, useEffect, useCallback } from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
// import { Link } from "react-router"; // Not used for actions, can remove if not used for navigation
import CarUpdate from "./CarUpdate";
import axios from "axios";
import Swal from "sweetalert2";

// Receive userEmail as a prop
const CarsList = ({ userEmail }) => {
  const [carsData, setCarsData] = useState([]); // State to hold the cars data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [sortOption, setSortOption] = useState("date_newest");

  const fetchCars = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:3000/cars?email=${userEmail}`,
        { withCredentials: true }
      );
      setCarsData(response.data);
    } catch (err) {
      console.error("Error fetching cars:", err);
      setError("Failed to load cars. Please try again.");
      setCarsData([]); // Clear previous data on error
    } finally {
      setLoading(false);
    }
  }, [userEmail]);

  // Fetch cars on component mount and whenever userEmail or fetchCars changes
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const getStoredCars = useCallback(
    (carsData) => {
      const sortedCarsData = [...carsData];

      switch (sortOption) {
        case "date_newest":
          return sortedCarsData.sort(
            (a, b) => new Date(b.entryDate) - new Date(a.entryDate)
          );
        case "date_oldest":
          return sortedCarsData.sort(
            (a, b) => new Date(a.entryDate) - new Date(b.entryDate)
          );
        case "price_lowest":
          return sortedCarsData.sort((a, b) => a.dailyRent - b.dailyRent);
        case "price_highest":
          return sortedCarsData.sort((a, b) => b.dailyRent - a.dailyRent);
        default:
          return sortedCarsData;
      }
    },
    [sortOption]
  );

  const displyCarsData = getStoredCars(carsData);

  const handleModalOpen = (id) => {
    setSelectedCarId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedCarId(null);
    fetchCars();
  };

  const handleDeleteCar = async (id) => {
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
          // CRITICAL: Re-fetch data after successful deletion
          fetchCars();
        } else {
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

  if (loading) {
    return (
      <div className="text-center text-white text-xl py-8">Loading cars...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl py-8">
        Error: {error}
      </div>
    );
  }

  if (!carsData || carsData.length === 0) {
    return (
      <div className="text-center text-gray-400 text-xl py-8">
        No cars found for this user.
      </div>
    );
  }

  return (
    <div className="w-full bg-blue-200 pt-1 pb-4">
    <div className="bg-blue-400 border-b border-white py-2 sticky top-36">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <h2 className="text-xl text-white text-center mb-4">
          You have Added {carsData.length} cars
        </h2>{" "}
        {/* Updated text */}
        <div>
          <label htmlFor="sort-select" className="mr-1 border rounded-l-md p-2 font-bold bg-blue-400">
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-r-md text-gray-800 border-white"
        >
          <option value="date_newest">Date Added (Newest First)</option>
          <option value="date_oldest">Date Added (Oldest First)</option>
          <option value="price_lowest">Price (Lowest First)</option>
          <option value="price_highest">Price (Highest First)</option>
        </select>
        </div>
      </div>
    </div>
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
            {displyCarsData.map((car, index) => (
              <tr
                key={car._id}
                className="text-gray-600 hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={car.carPhoto}
                    className="w-20 h-14 object-cover rounded"
                    alt={car.carModel}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.carModel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.dailyRent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {car.bookingStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      car.availability === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {car.availability === "Available"
                      ? "Available"
                      : "Not Available"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.entryDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-4">
                  <button
                    onClick={() => handleModalOpen(car._id)}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group"
                    title="Edit Car"
                  >
                    <MdModeEdit
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                    />
                  </button>

                  <button
                    onClick={() => handleDeleteCar(car._id)}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-red-600 cursor-pointer group"
                    title="Delete Car"
                  >
                    <MdOutlineDeleteOutline
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedCarId && (
        <CarUpdate
          selectedCarId={selectedCarId}
          handleModalClose={handleModalClose} // Pass this function to CarUpdate
        />
      )}
    </div>
  );
};

export default CarsList;
