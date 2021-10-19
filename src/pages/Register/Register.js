import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAllContext from "../../Hooks/useAllContext";
const Register = () => {
  const history = useHistory();
  const { signInwithGoogle, signUpUsingEmailPassword } = useAllContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // custom email checking function
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // setting user email function
  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  // setting user password function
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please input a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 charecter long.");
      return;
    }
    signUpUsingEmailPassword(email, password).then((result) => {
      history.push("/home");
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
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  {error && <p className="text-danger fw-bold">{error}</p>}
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
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                  <p className="text-center text-muted mt-4">
                    Or Sign Up using{" "}
                    <button onClick={signInwithGoogle} className="btn">
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

export default Register;
