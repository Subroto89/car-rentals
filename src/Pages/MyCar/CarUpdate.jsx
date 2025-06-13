// CarUpdate.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

const CarUpdate = ({ selectedCarId, handleModalClose }) => {
  const [carData, setCarData] = useState(null);
  const [loadingCarData, setLoadingCarData] = useState(true);
  const [carDataError, setCarDataError] = useState(null);


  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoadingCarData(true);
      setCarDataError(null);
      try {
        const response = await fetch(`http://localhost:3000/car/${selectedCarId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        console.error("Error fetching car data for update:", error);
        setCarDataError("Failed to load car details for update.");
      } finally {
        setLoadingCarData(false);
      }
    };

    if (selectedCarId) {
      fetchCarDetails();
    }
  }, [selectedCarId]);

  if (loadingCarData) {
    return <div className="fixed inset-0 bg-black/60 z-100 flex justify-center items-center text-white text-xl">Loading car details...</div>;
  }

  if (carDataError) {
    return <div className="fixed inset-0 bg-black/60 z-100 flex justify-center items-center text-red-500 text-xl">Error: {carDataError}</div>;
  }

  if (!carData) {
    // This case should ideally not be hit if loadingCarData and carDataError are handled
    return <div className="fixed inset-0 bg-black/60 z-100 flex justify-center items-center text-gray-400 text-xl">Car details not available.</div>;
  }

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
    features, // features is likely a string here from the form defaultValue
    owner,
    ownerEmail,
  } = carData;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (typeof data.features === 'string') {
        data.features = data.features.split(",").map((feature) => feature.trim());
    } else {
        data.features = [];
    }


    try {
      const res = await axios.put(`http://localhost:3000/update-car/${_id}`, data);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Car's Info Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        handleModalClose();
      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Update not acknowledged, car might not exist or no changes were made.",
          showConfirmButton: true,
        });
      }
    } catch (err) {
      console.error("Error updating car:", err);
      let errorMessage = "Failed to update car. Please try again.";
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      } else if (err.request) {
          errorMessage = "No response from the server. Please check your network connection.";
      } else {
          errorMessage = `Error: ${err.message}`;
      }
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Update Failed!",
        text: errorMessage,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex justify-center items-start overflow-y-auto pt-12"> {/* Increased z-index, added flex properties for centering */}
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto px-8 mt-10 bg-amber-50 rounded-lg text-gray-600 pb-8">
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-center text-blue-500 text-2xl font-semibold ">
            Update Car Info
          </h2>
          <button onClick={handleModalClose} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <IoClose size={40} />
          </button>
        </div>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4"
        >
          <input
            type="text"
            name="carName"
            id="carName"
            placeholder="Car Name"
            defaultValue={carName}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carModel"
            id="carModel"
            placeholder="Car Model"
            defaultValue={carModel}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carRegNo"
            id="carRegNo"
            placeholder="Car Registration No"
            defaultValue={carRegNo}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carLocation"
            id="carLocation"
            placeholder="Car Location"
            defaultValue={carLocation}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <div className="col-span-2 space-y-6">
            <input
              type="text"
              name="features"
              id="features"
              placeholder="Features - separate by comma"
              // Ensure features is joined by ", " if it's an array
              defaultValue={Array.isArray(features) ? features.join(", ") : features || ""}
              className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
            />

            <textarea
              name="carDescription"
              id="carDescription"
              placeholder="Car Description"
              defaultValue={carDescription}
              className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
            />
          </div>

          <input
            type="number"
            name="dailyRent"
            id="dailyRent"
            placeholder="Daily Rental Price"
            defaultValue={dailyRent}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="url"
            name="carPhoto"
            id="carPhoto"
            placeholder="Photo URL"
            defaultValue={carPhoto}
            className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-transparent focus:outline-none"
          />
          <div className="flex items-center gap-6 border-b border-cyan-600 pl-4 bg-amber-50">
            <h3 className="font-bold text-gray-600">Availability</h3>
            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="availableRadio" // Changed id for clarity
                value="Available"
                checked={carData?.availability === "Available"}
                onChange={() => setCarData({ ...carData, availability: "Available" })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" // Added tailwind for radio button
              />
              <label htmlFor="availableRadio">Available</label>
            </fieldset>

            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="unavailableRadio" // Changed id for clarity
                value="Not Available"
                checked={carData?.availability === "Not Available"}
                onChange={() => setCarData({ ...carData, availability: "Not Available" })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="unavailableRadio">Unavailable</label>
            </fieldset>
          </div>
          <button
            type="submit"
            className="btn btn-outline hover:bg-green-400 font-bold bg-amber-50"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarUpdate;