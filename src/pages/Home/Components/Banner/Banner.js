import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Banner = () => {
  return (
    <div className="banner_container d-flex align-items-center">
      <div className="container-fluid banner_text_container px-4">
        <div className="row">
          <section className="p-4 p-md-5 col-12 col-md-7 text-white text-capitalize custom_bg_overlay">
            <Fade left duration={1500}>
              <h1 className="mb-4">
                <span className="custom_color">Sagar Yoga Institute</span> is
                Basic yoga and meditation service provider !
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <p className="mb-4 custome-letter-spacing">
                you are wellcome to visit our institute, where every person is
                treated with high attention.
              </p>
            </Fade>
            <Bounce bottom duration={1500}>
              <Link to="/free-class">
                <button className="btn btn-danger text-capitalize">
                  join free class
                </button>
              </Link>
            </Bounce>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
