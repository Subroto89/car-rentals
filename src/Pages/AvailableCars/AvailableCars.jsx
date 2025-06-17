import React, { useState, useEffect, useCallback } from 'react';
import CarGridCard from './CarGridCard';
import CarListItem from './CarListItem';
import Loader from '../../Components/Loader';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [sortOption, setSortOption] = useState('date_newest');
    const [searchTerm, setSearchTerm] = useState(''); 

    // Function to fetch cars data
    const fetchCars = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://car-rentals-seven-ebon.vercel.app/available-cars');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setCars(data);
        } catch (err) {
            console.error("Failed to fetch cars:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch cars on component mount
    useEffect(() => {
        fetchCars();
    }, [fetchCars]);

    // Function to filter cars based on the search term
    const getFilteredCars = useCallback(() => {
        if (!searchTerm) {
            return cars; // If no search term, return all cars
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return cars.filter(car => {
            // Check if brand, model, or location includes the search term
            return (
                car.carName.toLowerCase().includes(lowerCaseSearchTerm) ||
                car.carModel.toLowerCase().includes(lowerCaseSearchTerm) ||
                car.carLocation.toLowerCase().includes(lowerCaseSearchTerm)
            );
        });
    }, [cars, searchTerm]);


    // Function to sort cars based on the selected option
    const getSortedCars = useCallback((filteredCars) => { 

        const sorted = [...filteredCars];

        switch (sortOption) {
            case 'date_newest':
                return sorted.sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate));
            case 'date_oldest':
                return sorted.sort((a, b) => new Date(a.entryDate) - new Date(b.entryDate));
            case 'price_lowest':
                return sorted.sort((a, b) => a.dailyRent - b.dailyRent);
            case 'price_highest':
                return sorted.sort((a, b) => b.dailyRent - a.dailyRent);
            default:
                return sorted; // Return unsorted if no valid option
        }
    }, [sortOption]); // Only depends on sortOption now

    // First filter, then sort
    const filteredAndSortedCars = getSortedCars(getFilteredCars());


    if (loading) return <div className="text-center py-8"><Loader/></div>;
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

    return (
        <div className="w-full p-4 bg-blue-200 pb-6">
         <div className='w-11/12 mx-auto'>
               <h1 className="text-3xl font-bold mb-1 text-gray-800">Available Cars</h1>

            {/* Controls: View Toggle and Sorting */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-3 mb-6 bg-white rounded-t-lg h-30 lg:h-16 px-4 border border-blue-700">
                {/* View Toggle Buttons */}
                <div>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`px-2 lg:px-4 py-2 rounded-l-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Grid View
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`px-2 lg:px-4 py-2 rounded-r-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        List View
                    </button>
                </div>

               <div className='flex gap-2'>
                 {/* Search Bar */}
                <div className=' flex items-center text-gray-600'>
                    <label htmlFor="search" className='bg-blue-500 bourder-l rounded-l-md text-white py-1 lg:px-2 text-xs  '>Brand, Model, or Location</label> 
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className='w-full rounded-r-md p-2 py-2.5 border-2 border-gray-600 bg-blue-300 text-gray-800 text-xs' 
                        placeholder="e.g., Toyota, Camry, Dhaka" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>


                {/* Sorting Dropdown */}
                <div className='flex items-center text-gray-600'>
                    <label htmlFor="sort-select" className='bg-blue-500 bourder-l rounded-l-md text-white py-1 lg:px-2 text-xs  '>Sort by:</label>
                    <select
                        id="sort-select"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                         className='w-full rounded-r-md px-2 py-2 border-2 border-gray-600 bg-blue-300 text-gray-800 text-xs'
                    >
                        <option value="date_newest">Date Added (Newest First)</option>
                        <option value="date_oldest">Date Added (Oldest First)</option>
                        <option value="price_lowest">Price (Lowest First)</option>
                        <option value="price_highest">Price (Highest First)</option>
                    </select>
                </div>
               </div>
            </div>

            {/* Conditional Rendering of Cars */}
            {filteredAndSortedCars.length === 0 ? (
                <p className="text-center text-lg">No cars found based on current criteria.</p>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedCars.map(car => (
                        <CarGridCard key={car._id} car={car} />
                    ))}
                </div>
            ) : ( // viewMode === 'list'
                <div className="flex flex-col gap-4">
                    {filteredAndSortedCars.map(car => (
                        <CarListItem key={car._id} car={car} />
                    ))}
                </div>
            )}
         </div>
        </div>
    );
};

export default AvailableCars;