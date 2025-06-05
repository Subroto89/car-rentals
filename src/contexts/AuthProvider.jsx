import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // ----------------------------------------------------------------
  // Loader State to Show/Hide Loader During Authentication
  // ----------------------------------------------------------------
  const [loading, setLoading] = useState(false);

  // ----------------------------------------------------------------
  // State to Hold User Data on Registration/Sign-In/Sign-Out/Refresh
  // ----------------------------------------------------------------
  const [user, setUser] = useState(null);

  // -------------------------------------
  // User Registration Using Email and Password
  // -------------------------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // -------------------------------------
  // Sign-In User Using Email and Password
  // -------------------------------------
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // -------------------------------------
  // Sign-In User Using Google
  // -------------------------------------
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // -------------------------------------
  // Sign-Out User
  // -------------------------------------
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // -------------------------------------
  // Authentication State Observer
  // -------------------------------------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the observer when the component unmounts
    return () => {
      unSubscribe();
    };
  }, []);

  //   -------------------------------------
  // Update User Profile
  //   -------------------------------------
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // -------------------------------------
  // Auth Data to be Provided to the Context
  // -------------------------------------
  const authData = {
    user,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
