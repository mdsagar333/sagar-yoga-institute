import React, { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.initialize";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// initializing firbase
initializeFirebaseApp();
// creating auth
const auth = getAuth();
// creating google provider
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  // signup using email and password
  const signUpUsingEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin using email and password

  const signInUsingEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in function
  const signInwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signout function
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsUserLoaded(true);
    });

    return () => unsubscribe();
  }, []);
  return {
    user,
    error,
    isUserLoaded,
    signInwithGoogle,
    logOut,
    signUpUsingEmailPassword,
    signInUsingEmailPassword,
  };
};

export default useFirebase;
