import React from 'react';
import { Link } from 'react-router';

const CarGridCard = ({ car }) => {
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={car.carPhoto} alt={car.carModel} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{car.carModel}</h3>
                <p className="text-gray-700 mt-2">Daily Rent: <span className="font-bold text-blue-600">${car.dailyRent}</span></p>
                <p className="text-gray-600">Availability: <span className={`font-semibold ${car.availability === "Available" ? "text-green-600" : "text-red-600"}`}>{car.availability}</span></p>
               
                <Link 
                    to={`/car-details/${car._id}`} 
                    className="mt-4 inline-block w-full bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition-colors duration-200"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default CarGridCard;