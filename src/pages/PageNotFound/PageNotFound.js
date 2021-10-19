import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="py-5 my-5 d-flex align-items-center justify-content-center">
      <div className="py-5 my-5">
        <h1 className="text-capitalize fw-bold">404 page not found</h1>
        <Link to="/home">
          <button className="btn btn-outline-danger text-capitalize fw-bold mt-4">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
