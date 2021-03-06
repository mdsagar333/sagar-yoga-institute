import React from "react";
import "./Subscribe.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Fade from "react-reveal/Fade";
const Subscribe = () => {
  return (
    <>
      <div className="container my-5">
        <div className="subscribe_text_wrapper text-center">
          <Fade duration={1500} left>
            <FaEnvelopeOpenText className="custom_color custome_subscribe_icon"></FaEnvelopeOpenText>
          </Fade>
          <Fade duration={1500} right>
            <h1 className="mt-5 text-capitalize">
              Subscribe to our newsletter
            </h1>
            <p className="mb-4">
              Get updates for new classes and new products{" "}
            </p>
          </Fade>
        </div>
        <Fade bottom duration={1500}>
          <form>
            <div className="input-group mb-3 w-75 mx-auto">
              <input
                type="text"
                className="form-control rounded-pill border-end-0 p-3"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-info rounded-pill px-4"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </>
  );
};

export default Subscribe;
