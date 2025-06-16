import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <nav className="sticky top-0 z-1000">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer className="my-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
