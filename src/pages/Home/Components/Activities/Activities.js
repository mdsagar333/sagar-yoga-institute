import React from "react";
import activitiesImg from "../../../../images/5.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

// benifit component simply returs a paragraph with icon
const Benifits = (props) => {
  const { text, checkIcon } = props;
  return (
    <p className="mb-1 fw-bold">
      <span className="custom_color me-4">{checkIcon}</span>
      {text}
    </p>
  );
};

// yoga benifits data
const benifits = [
  {
    text: "Improves posture.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
  {
    text: "Improves posture.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
  {
    text: "Builds muscle strength.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
  {
    text: "Boosts metabolism.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
  {
    text: "Helps in lowering blood sugar.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
  {
    text: "Increases self-esteem.",
    checkIcon: <BsFillCheckCircleFill></BsFillCheckCircleFill>,
  },
];

const Activities = () => {
  return (
    <div className="mt-5">
      <div className="container activities_container my-4 py-3">
        <div className="row">
          <div className="col-12 col-md-5">
            <img
              src={activitiesImg}
              alt="women meditating"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-12 col-md-7 px-3">
            <h5 className="custom_color mb-4 mt-5 mt-md-0">What we do</h5>
            <h2 className="mb-5 custome-letter-spacing">
              Bring the healthies change in your life by yoga and meditation
            </h2>
            <p className="custome-letter-spacing">
              Yoga is essentially a spiritual discipline based on an extremely
              subtle science, which focuses on bringing harmony between mind and
              body. It is an art and scince of healthy living. Below are the
              benifits of <span className="custom_color">YOGA!</span>
            </p>

            <div className="mt-4">
              {benifits.map((benifit, index) => (
                <Benifits key={index} {...benifit}></Benifits>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
