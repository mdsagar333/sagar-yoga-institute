import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAllContext from "../../Hooks/useAllContext";

const Login = () => {
  const { signInwithGoogle, signInUsingEmailPassword } = useAllContext();
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/home" } };
  const redirect_url = from.pathname;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLogIneError] = useState(null);

  const handleGoogleSignIn = () => {
    signInwithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  // setting email state value
  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  // setting password state value
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  // handeling login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogIneError(null);
    signInUsingEmailPassword(email, password)
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((err) => {
        console.log(err);
        setLogIneError("Password you have entered is incorrect.");
      });
  };
  return (
    <section className="mt-4">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>
                  {loginError && (
                    <p className="text-danger fw-bold"> {loginError} </p>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        required
                        name="email"
                        onBlur={handleUserEmail}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email*
                      </label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        required
                        name="password"
                        onBlur={handleUserPassword}
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password*
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                  <p className="text-center text-muted mt-4">
                    Or Login using{" "}
                    <button className="btn" onClick={handleGoogleSignIn}>
                      <FcGoogle className="custom_google_icon"></FcGoogle>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
