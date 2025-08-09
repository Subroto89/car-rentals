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
        <div className='bg-gray-50 w-full pt-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-6 pt-6'>Recent Listings</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cars.map(car => <RecentListingCard key={car._id} car={car}> </RecentListingCard>)
                }
            </div>

        </div>
    );
};

export default RecentListings;