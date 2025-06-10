import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { bookingCarsPromise } from '../../sharedFunction/bookingCarsPromiseByEmail';
import BookingCarsList from './BookingCarsList';




const MyBookings = () => {

     const {user} = use(AuthContext)
    

    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <BookingCarsList bookingCarsPromise={bookingCarsPromise(user?.email)}>
                        
                </BookingCarsList>
            </Suspense>
        </div>
    );
};

export default MyBookings;