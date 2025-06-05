import React from 'react';
import {createBrowserRouter} from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../Pages/Home/Home';
import AvailableCars from '../Pages/AvailableCars/AvailableCars';
import AddCar from '../Pages/AddCar/AddCar';
import MyCar from '../Pages/MyCar/MyCar';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';


const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/available-cars',
                Component: AvailableCars 
            },
            {
                path: '/add-car',
                Component: AddCar
            },
            {
                path: '/my-cars',
                Component: MyCar
            },
            {
                path: '/my-bookings',
                Component: MyBookings
            }
        ]
    }
])
export default router;