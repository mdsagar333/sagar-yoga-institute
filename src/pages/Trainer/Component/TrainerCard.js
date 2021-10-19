import React from "react";
import "./TrainerCard.css";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const TrainerCard = (props) => {
  const { id, name, img, email } = props;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div class="box1">
          <img src={img} alt={name} className="border-rounded" />
          <h2 class="title">{name}</h2>
          <ul class="icon">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
