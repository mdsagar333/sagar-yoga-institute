import React from "react";
import ReactPlayer from "react-player";

const url1 = "https://www.youtube.com/watch?v=KEYSO-Tc2Go";
const url2 = "https://www.youtube.com/watch?v=TrgNZn0xejo";
const url3 = "https://www.youtube.com/watch?v=_kl_DxglATI";

export const FreeClass = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4 custom_color_2 text-light p-3">
        Welcome to our free class.
      </h1>
      <p className="text-center mb-4 custome-letter-spacing">
        Yoga is all about creating a balance in your life. It is about balancing
        your senses, balancing your body, soul and mind in order to live healthy
        and live in peace. Wishing you a peaceful and healthy life
      </p>
      <section className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>Class #1:</strong>20 Minute Everyday Vinyasa Flow Yoga
                Class
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body d-flex justify-content-center">
                <ReactPlayer url={url1} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>Class 2:</strong>20 Minute Morning Yoga Class with Ally
                Maz | lululemon
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body d-flex justify-content-center">
                <ReactPlayer url={url2} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <strong>Class 3:</strong>45 Minute Everyday Vinyasa Flow Yoga
                Class | lululemon
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body d-flex justify-content-center">
                <ReactPlayer url={url3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
