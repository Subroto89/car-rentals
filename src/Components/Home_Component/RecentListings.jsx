import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentListingCard from './RecentListingCard';

const RecentListings = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
       const fetchData = async() => {
         try{
            const response = await axios.get('https://car-rentals-seven-ebon.vercel.app/recent-cars?limit=6');
            const data = response.data;
            setCars(data);
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
       }
       fetchData()
        
    },[])
    return (
        <div className='bg-gray-50 w-full'>
            <h2 className='text-4xl font-extrabold text-gray-800 text-center mb-12'>Recent Listings</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12'>
                {
                    cars.map(car => <RecentListingCard key={car._id} car={car}> </RecentListingCard>)
                }
            </div>

        </div>
    );
};

export default RecentListings;