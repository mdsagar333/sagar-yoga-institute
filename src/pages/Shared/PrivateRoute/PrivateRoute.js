import React from "react";
import { Redirect, Route } from "react-router";
import useAllContext from "../../../Hooks/useAllContext";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isUserLoaded } = useAllContext();
  if (!isUserLoaded) {
    return (
      <div className="container my-4 d-flex justify-content-center">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
