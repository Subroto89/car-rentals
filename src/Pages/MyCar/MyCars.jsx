// MyCars.jsx
import React, { Suspense, use } from "react";
import CarsList from "./CarsList";
import { AuthContext } from "../../contexts/AuthContext"; 
import Loader from "../../Components/Loader";

const MyCars = () => {
  const { user } = use(AuthContext);


  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <CarsList userEmail={user.email} />
      </Suspense>
    </div>
  );
};

export default MyCars;