import React from 'react';
import { AuthContext } from './AuthContext';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // User Registration Using Email and Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    // Sign In User Using Email and Password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignIn Using Google
   const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
   }
    const authData = {
        createUser,
        signInUser,
        signInWithGoogle


    }


    return (
        <AuthContext value={authData}>
            {children}  
        </AuthContext>
    );
};

export default AuthProvider;