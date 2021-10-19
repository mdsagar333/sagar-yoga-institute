import React from "react";
import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceShort = (props) => {
  const { name, id, level, image, description } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex align-stretch">
      <div className="card custom_card">
        <div className="custome_card_hover">
          <img
            src={image}
            className="card-img-top custom_card_img"
            alt={name}
            style={{ minHeight: "240px" }}
          />
          <div className="card-body">
            <h4 className="card-title mb-3">{name}</h4>
            <p className="card-text custome-letter-spacing">
              {description.substr(0, 100)}...
            </p>
            <p className="my-4 fw-bold text-danger">
              <BsStack className="custom_color me-2"></BsStack>
              {level.toUpperCase()}.
            </p>
            <Link to={`/services/${id}`} className="btn btn-outline-danger">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShort;
