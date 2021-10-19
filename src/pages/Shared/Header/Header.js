import React from "react";
import { Link } from "react-router-dom";
import useAllContext from "../../../Hooks/useAllContext";
import Logo from "../Logo/Logo";

const Header = () => {
  const { user, isUserLoaded, logOut } = useAllContext();
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo></Logo>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/free-class">
                Free Class
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trainer">
                Contact With Trainer
              </Link>
            </li>
            {user ? (
              <li className="nav-item d-flex align-items-center">
                <span>{user.displayName}</span>
                <button
                  className="btn fw-bold custom_color_2 text-white"
                  onClick={logOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <div style={{ display: "flex" }}>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
