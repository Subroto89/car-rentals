import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

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

    // Post data to database
    axios
      .post("http://localhost:3000/add-car", data)
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
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-12">Add New Car</h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <input
            type="text"
            name="carName"
            id="carName"
            placeholder="Car Name"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carModel"
            id="carModel"
            placeholder="Car Model"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carRegNo"
            id="carRegNo"
            placeholder="Car Registration No"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="text"
            name="carLocation"
            id="carLocation"
            placeholder="Car Location"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <div className="col-span-2 space-y-6">
            <input
              type="text"
              name="features"
              id="features"
              placeholder="Features-seperate by comma"
              className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
            />

            <textarea
              name="carDescription"
              id="carDescription"
              placeholder="Car Description"
              className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
            />
          </div>

          <input
            type="number"
            name="dailyRent"
            id="dailyRent"
            placeholder="Daily Rental Price"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />

          <input
            type="url"
            name="carPhoto"
            id="carPhoto"
            placeholder="Photo URL"
            className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent focus:outline-none"
          />
          <div className="flex items-center gap-6 border-b border-cyan-600 pl-4">
            <h3 className="font-bold text-white">Avaiability</h3>
            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="avaiability"
                id="availability"
                value="Available"
                placeholder="Car Location"
                className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent"
              />
              <label htmlFor="availability">Available</label>
            </fieldset>

            <fieldset className="flex items-center gap-2">
              <input
                type="radio"
                name="avaiability"
                id="unavailability"
                value="Not Available"
                placeholder="Car Location"
                className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent"
              />
              <label htmlFor="unavailability">Unavailable</label>
            </fieldset>
          </div>
          <button
            type="submit"
            className="btn btn-outline hover:bg-green-400 font-bold"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
