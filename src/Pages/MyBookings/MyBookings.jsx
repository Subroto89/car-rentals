import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { bookingCarsPromise } from '../../sharedFunction/bookingCarsPromiseByEmail';
import BookingCarsList from './BookingCarsList';
import Loader from '../../Components/Loader';




const MyBookings = () => {

     const {user} = use(AuthContext)
    

    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <BookingCarsList bookingCarsPromise={bookingCarsPromise(user?.email)}>
                        
                </BookingCarsList>
            </Suspense>
        </div>
    );
};

export default MyBookings;