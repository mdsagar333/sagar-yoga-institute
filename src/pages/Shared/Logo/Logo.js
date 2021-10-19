import React from "react";
import "./Logo.css";
import { RiMentalHealthLine } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <RiMentalHealthLine className="logo-icons"></RiMentalHealthLine>
      <span className="loto-text">SYI</span>
    </div>
  );
};

export default Logo;
