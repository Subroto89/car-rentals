import React from 'react';
import {createBrowserRouter} from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../Pages/Home/Home';
import AvailableCars from '../Pages/AvailableCars/AvailableCars';
import AddCar from '../Pages/AddCar/AddCar';
import MyCars from '../Pages/MyCar/MyCars';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage';


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
                element: <PrivateRoute><AddCar/></PrivateRoute>
            },
            {
                path: '/my-cars',
                element: <PrivateRoute><MyCars/></PrivateRoute>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings/></PrivateRoute>
            }
        ],
        
    },
    {
        path: '/*',
        Component: ErrorPage
    }
    
])
export default router;