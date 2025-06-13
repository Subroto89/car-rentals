import React from 'react';
import { Link } from 'react-router'; 

const CarListItem = ({ car }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src={car.carPhoto} alt={car.carModel} className="w-40 h-28 object-cover rounded-md p-4" />
            <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{car.carModel}</h3>
                <p className="text-gray-700 mt-1">Daily Rent: <span className="font-bold text-blue-600">${car.dailyRent}</span></p>
                <p className="text-gray-600">Availability: <span className={`font-semibold ${car.availability === "Available" ? "text-green-600" : "text-red-600"}`}>{car.availability}</span></p>
                {/* You can add more details here for list view */}
            </div>
            <Link 
                to={`/car-details/${car._id}`} 
                className="flex-shrink-0 bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition-colors duration-200"
            >
                Book Now
            </Link>
        </div>
    );
};

export default CarListItem;