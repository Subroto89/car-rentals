import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AvailableCars from "../Pages/AvailableCars/AvailableCars";
import AddCar from "../Pages/AddCar/AddCar";
import MyCars from "../Pages/MyCar/MyCars";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import CarUpdate from "../Pages/MyCar/CarUpdate";
import CarDetails from "../Pages/CarDetails/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cars",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/car-update",
        Component: CarUpdate,
      },
      {
        path: "/available-cars",
        Component: AvailableCars,
      },
      {
        path: "/car-details/:id",
        loader: async ({ params }) => {
          
          const response = await fetch(
            `http://localhost:3000/car/${params.id}`
          );

          if (!response.ok) {
            throw new Response("Car not found", { status: response.status });
          }

          const data = await response.json(); 
          return data;
        },
        Component: CarDetails,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
export default router;
