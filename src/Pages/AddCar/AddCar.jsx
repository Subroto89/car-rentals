import React from "react";
import { Link } from "react-router";

const AddCar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-12">Add New Car</h2>
      <div>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              type="textarea"
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
                id="availability"
                value="Not Available"
                placeholder="Car Location"
                className="w-full px-3 py-2 text-white border-b border-cyan-600 bg-transparent"
              />
              <label htmlFor="availability">Unavailable</label>
            </fieldset>
          </div>
          <Link className="btn btn-outline hover:bg-green-400 font-bold">Add Car</Link>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
