import React, { useState, useEffect, useCallback } from 'react';
import CarGridCard from './CarGridCard';
import CarListItem from './CarListItem';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); 
    const [sortOption, setSortOption] = useState('date_newest'); 

    // Function to fetch cars data
    const fetchCars = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3000/available-cars');
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

    // Function to sort cars based on the selected option
    const getSortedCars = useCallback(() => {
        // Always sort a copy to avoid mutating state directly
        const sorted = [...cars]; 

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
    }, [cars, sortOption]);

    const displayedCars = getSortedCars();

    if (loading) return <div className="text-center py-8">Loading cars...</div>;
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Available Cars</h1>

            {/* Controls: View Toggle and Sorting */}
            <div className="flex justify-between items-center mb-6">
                {/* View Toggle Buttons */}
                <div>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`px-4 py-2 rounded-l-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Grid View
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`px-4 py-2 rounded-r-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        List View
                    </button>
                </div>

                {/* Sorting Dropdown */}
                <div>
                    <label htmlFor="sort-select" className="mr-2">Sort by:</label>
                    <select
                        id="sort-select"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="date_newest">Date Added (Newest First)</option>
                        <option value="date_oldest">Date Added (Oldest First)</option>
                        <option value="price_lowest">Price (Lowest First)</option>
                        <option value="price_highest">Price (Highest First)</option>
                    </select>
                </div>
            </div>

            {/* Conditional Rendering of Cars */}
            {displayedCars.length === 0 ? (
                <p className="text-center text-lg">No cars found based on current criteria.</p>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCars.map(car => (
                        <CarGridCard key={car._id} car={car} />
                    ))}
                </div>
            ) : ( // viewMode === 'list'
                <div className="flex flex-col gap-4">
                    {displayedCars.map(car => (
                        <CarListItem key={car._id} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableCars;