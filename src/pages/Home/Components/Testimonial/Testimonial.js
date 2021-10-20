import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Fade from "react-reveal/Fade";

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch("/sliderData.json")
      .then((res) => res.json())
      .then((data) => setSlideData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (!loading) {
    return (
      <div className="testimonial_container container mt-5">
        <div className="text-center mb-4">
          <Fade duration={1500} left>
            <h6 className="custom_color">what people say about us</h6>
          </Fade>
          <Fade duration={1500} right>
            <h1 className="custome-letter-spacing">Testimonial</h1>
          </Fade>
        </div>
        <div
          style={{ maxWidth: "600px", minHeight: "350px" }}
          className="mx-auto"
        >
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[0].image}
                  className="d-block mx-auto"
                  alt={slideData[0].name}
                />
                <div className="text-center">
                  <h4 className="my-3">{slideData[0].name}</h4>
                  <h6 className="mb-3">{slideData[0].email}</h6>
                  <p>{slideData[0].text}</p>
                </div>
              </div>
              <div
                className="carousel-item custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[1].image}
                  className="d-block mx-auto"
                  alt={slideData[1].name}
                />
                <div className="text-center">
                  <h4 className="my-3">{slideData[1].name}</h4>
                  <h6 className="mb-3">{slideData[1].email}</h6>
                  <p>{slideData[1].text}</p>
                </div>
              </div>
              <div
                className="carousel-item custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[2].image}
                  className="d-block mx-auto"
                  alt={slideData[2].name}
                />
                <div className="text-center">
                  <h4 className="my-3">{slideData[2].name}</h4>
                  <h6 className="mb-3">{slideData[2].email}</h6>
                  <p>{slideData[2].text}</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon fw-bold"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon fw-bold"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};
export default Testimonial;
