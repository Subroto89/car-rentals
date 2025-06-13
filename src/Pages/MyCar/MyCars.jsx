// MyCars.jsx
import React, { Suspense, use } from "react";
import CarsList from "./CarsList";
import { AuthContext } from "../../contexts/AuthContext"; 

const MyCars = () => {
  const { user } = use(AuthContext);


  return (
    <div>
      <h2 className="text-4xl text-white text-center mb-8">My Cars</h2>
      <Suspense fallback={<div className="text-center text-white text-xl py-8">Loading your cars list...</div>}>
        <CarsList userEmail={user.email} />
      </Suspense>
    </div>
  );
};

export default MyCars;