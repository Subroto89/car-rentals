import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const destination = useLocation();
   
     if(loading){
        return <h2>loading ...</h2>
    }
    
   if(user){
   
    return children;
   }
   return <Navigate to='/signin' state={destination.pathname} />
};

export default PrivateRoute;