import React, { Suspense, use} from "react";
import CarsList from "./CarsList";
import { AuthContext } from "../../contexts/AuthContext";
import { myCarsPromise } from "../../sharedFunction/carsPromiseByEmail";

// const myCarsPromise = async (email) => { // Make it async to use await  
//     const response = await fetch(`http://localhost:3000/cars?email=${email}`);
//     const data = await response.json(); 
//     return data; 
// };

const MyCars = () => {
    const {user} = use(AuthContext)

  
  return (
     <div>
        <h2>Total Car</h2>
        <Suspense fallback={'loading'}>
            <CarsList  myCarsPromise={myCarsPromise(user.email)}>
               
            </CarsList>
        </Suspense>
     </div>
  )
};

export default MyCars;
