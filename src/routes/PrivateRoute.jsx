import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);
    const destination = useLocation();
   
   if(user){
    return children;
   }
   return <Navigate to='/signin' state={destination.pathname} />
};

export default PrivateRoute;