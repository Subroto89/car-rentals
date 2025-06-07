import React, { use } from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router";

const CarsList = ({ myCarsPromise }) => {
  const carsData = use(myCarsPromise);

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
                Avaiability
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
                <td className="px-6 py-4 whitespace-nowrap"><img src={car.carPhoto} className="w-20 h-14 "/></td>
                <td className="px-6 py-4 whitespace-nowrap">{car.carModel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.dailyRent}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.bookingStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                     <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      car.availability == 'Available'
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {car.availability == 'Available' ? "Available" : "Not Available"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{car.entryDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-4">
                  <Link
                    id="anchorEdit"
                    // to={`/my-listing/particular/${listing._id}`}
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
                    // onClick={() => handleDelete(listing._id)}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group"
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
    </div>
  );
};

export default CarsList;
