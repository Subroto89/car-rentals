import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { GiCarKey } from "react-icons/gi";

const AddCar = () => {
  const { user } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const featuresArray = data.features
      .split(",")
      .map((feature) => feature.trim());
    data.features = featuresArray;
    data.bookingStatus = 0;
    data.entryDate = new Date().toLocaleDateString();
    data.owner = user.displayName;
    data.ownerEmail=user.email
    data.availability = "Available"

    // Post data to database
    axios
      .post("http://localhost:3000/add-car", data, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Car Entry Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-blue-200 pt-10 pb-6">
      <div className="w-11/12 mx-auto">
      <div className="p-2 border border-white rounded-lg pt-10 relative">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold text-center mb-12 text-gray-800 pt-4 absolute -top-8 left-8 bg-blue-200 px-4"><GiCarKey size={28}/><h2>Add New Car</h2></div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12"
        >
          <input
            type="text"
            name="carName"
            id="carName"
            placeholder="Car Name"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />

          <input
            type="text"
            name="carModel"
            id="carModel"
            placeholder="Car Model"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />

          <input
            type="text"
            name="carRegNo"
            id="carRegNo"
            placeholder="Car Registration No"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />

          <input
            type="text"
            name="carLocation"
            id="carLocation"
            placeholder="Car Location"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />

          <div className="col-span-2 space-y-6">
            <input
              type="text"
              name="features"
              id="features"
              placeholder="Features-seperate by comma"
              className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
            />

            <textarea
              name="carDescription"
              id="carDescription"
              placeholder="Car Description"
              className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
            />
          </div>

          <input
            type="number"
            name="dailyRent"
            id="dailyRent"
            placeholder="Daily Rental Price"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />

          <input
            type="url"
            name="carPhoto"
            id="carPhoto"
            placeholder="Photo URL"
            className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent focus:outline-none text-gray-800"
          />
          <div className="flex flex-col lg:flex-row items-center gap-6 border-b border-cyan-600 pl-4">
            <h3 className="font-bold text-gray-800">Avaiability</h3>
            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="availability"
                value="Available"
                placeholder="Car Location"
                className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent"
              />
              <label htmlFor="availability" className="text-gray-800">Available</label>
            </fieldset>

            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="availability"
                id="unavailability"
                value="Not Available"
                placeholder="Car Location"
                className="w-full px-3 py-2  border-b border-cyan-600 bg-transparent"
              />
              <label htmlFor="unavailability" className="text-gray-800">Unavailable</label>
            </fieldset>
            
          </div>
          <button
            type="submit"
            className="btn btn-outline hover:bg-green-400 font-bold text-gray-800"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddCar;
