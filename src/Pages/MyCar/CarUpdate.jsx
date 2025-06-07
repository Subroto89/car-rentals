import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const CarUpdate = ({ selectedCarId, handleModalClose }) => {
  const navigate = useLocation();
  const [carData, setCarData] = useState(null);
  console.log(selectedCarId);
  useEffect(() => {
    fetch(`http://localhost:3000/car/${selectedCarId}`)
      .then((res) => res.json())
      .then((data) => setCarData(data))
      .catch((error) => console.log(error));
  }, [selectedCarId]);
  console.log(carData);
  if (!carData) return <p>Loading...</p>;

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
    owner,
    ownerEmail,
  } = carData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // fetch for update
    axios
      .put(`http://localhost:3000/update-car/${_id}`, data)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Car's Info Updated Sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
      handleModalClose();
      navigate("/my-cars");
    
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-100 pt-12">
      <div className="w-11/12 mx-auto h-10/12 px-8 mt-10 bg-amber-50 rounded-lg text-gray-600">
        <h2 className="text-center text-blue-500 text-2xl font-semibold pt-4">
          Update Car Info
        </h2>
        <div onClick={handleModalClose} className="place-self-end">
          <IoClose size={40} />
        </div>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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
              placeholder="Features-seperate by comma"
              defaultValue={Array.isArray(features) ? features.join(", ") : ""}
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
            <h3 className="font-bold text-gray-600">Avaiability</h3>
            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="availability"
                value="Available"
                checked={carData?.availability === "Available"}
                onChange={() =>
                  setCarData({ ...carData, availability: "Available" })
                }
                className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 "
              />
              <label htmlFor="availability">Available</label>
            </fieldset>

            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="unavailability"
                value="Not Available"
                checked={carData?.availability === "Not Available"}
                onChange={() =>
                  setCarData({ ...carData, availability: "Not Available" })
                }
                className="w-full px-3 py-2 text-gray-600 border-b border-cyan-600 bg-amber-50"
              />
              <label htmlFor="unavailability">Unavailable</label>
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
