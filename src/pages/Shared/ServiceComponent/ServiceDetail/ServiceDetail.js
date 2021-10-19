import React from "react";
import "./ServiceDetail.css";
import { useParams } from "react-router";
import useAllContext from "../../../../Hooks/useAllContext";
import Loading from "../../Loading/Loading";
import trainerImg from "../../../../images/5.png";
import { AiFillFile, AiFillProfile } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { MdDateRange, MdSystemSecurityUpdateGood } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceDetail = (props) => {
  const { services, isLoading } = useAllContext();
  const { id } = useParams();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const service = services.filter((item) => item.id === id);
  const {
    name,
    description,
    image,
    numberOfWeek,
    open,
    days,
    level,
    price,
    teacher,
  } = service[0];
  return (
    <div className="container-fluid px-4">
      <h3 className="text-center mb-5 custom_color">Service Details</h3>
      <div className="row g-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h1 className="mb-4">{name}</h1>
          <div className="trainer_container d-flex align-items-center py-3">
            <img
              src={trainerImg}
              alt="trainer-image "
              className="trainer_img rounded-circle me-3"
            />
            <div className="trainer_text_info">
              <h4>Trainer</h4>
              <p>{teacher}</p>
            </div>
          </div>
          <img src={image} alt={name} className="img-fluid mt-3 rounded" />
          <p className="my-4 custome-letter-spacing lh-base">{description}</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-5 p-3 py-lg-5">
          <h3 className="mb-5">Class Information</h3>
          <div>
            <p className="d-flex justify-content-between fw-bold text-secondary border-bottom pb-3">
              <span className="text-capitalize">
                <AiFillFile className="custom_color" /> number of week
              </span>
              <span className="details_color">{numberOfWeek}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold text-secondary border-bottom pb-3">
              <span className="text-capitalize">
                <AiFillProfile className="custom_color" /> open
              </span>
              <span className="details_color">{open}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold text-secondary border-bottom pb-3">
              <span className="text-capitalize">
                <MdDateRange className="custom_color" /> days
              </span>
              <span className="details_color">
                {`${days.split("_").join(", ")}`.toLocaleUpperCase()}
              </span>
            </p>
            <p className="d-flex justify-content-between fw-bold text-secondary border-bottom pb-3">
              <span className="text-capitalize">
                <BsStack className="custom_color" /> level
              </span>
              <span className="details_color">{level.toUpperCase()}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold text-secondary">
              <span className="text-capitalize">
                <AiFillFile className="custom_color" /> price
              </span>
              <span className="details_color">${price}</span>
            </p>
            <Link>
              <button className="btn btn-outline-danger mt-5">
                Book This Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
