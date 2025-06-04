import React from 'react';
import {createBrowserRouter} from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])
export default router;