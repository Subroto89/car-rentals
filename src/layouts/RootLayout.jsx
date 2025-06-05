import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto min-h-screen my-10">
        <Outlet></Outlet>
      </main>
      <footer className="my-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
