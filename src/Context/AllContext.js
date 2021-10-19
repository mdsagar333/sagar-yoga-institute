import React, { createContext, useEffect, useState } from "react";
import useFirebase from "../Hooks/useFirebase";

export const ContextAPI = createContext();

const AllContext = ({ children }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    user,
    error,
    isUserLoaded,
    signInwithGoogle,
    logOut,
    signUpUsingEmailPassword,
    signInUsingEmailPassword,
  } = useFirebase();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setServices(result))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <ContextAPI.Provider
      value={{
        services,
        isLoading,
        user,
        error,
        isUserLoaded,
        signInwithGoogle,
        logOut,
        signUpUsingEmailPassword,
        signInUsingEmailPassword,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default AllContext;
