// MyCars.jsx
import React, { Suspense, use } from "react";
import CarsList from "./CarsList";
import { AuthContext } from "../../contexts/AuthContext"; 

const MyCars = () => {
  const { user } = use(AuthContext);


  return (
    <div>
      <Suspense fallback={<div className="text-center text-white text-xl py-8">Loading your cars list...</div>}>
        <CarsList userEmail={user.email} />
      </Suspense>
    </div>
  );
};

export default MyCars;