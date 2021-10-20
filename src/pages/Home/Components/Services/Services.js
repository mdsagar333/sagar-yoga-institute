import React from "react";
import useAllContext from "../../../../Hooks/useAllContext";
import ServiceShort from "../../../Shared/ServiceComponent/ServiceShot/ServiceShort";
import Fade from "react-reveal/Fade";

const Services = () => {
  const { services, isLoading } = useAllContext();
  return (
    <div className="services_container mt-5">
      <Fade left duration={1500}>
        <h5 className="custom_color text-center">choose your best services</h5>
      </Fade>
      <Fade right duration={1500}>
        <h1 className="text-capitalize text-center my-4">
          our most popular services
        </h1>
      </Fade>
      <div className="services_wrapper container-fluid px-3 pt-3">
        {isLoading === false && (
          <div className="row g-4">
            {services.slice(0, 6).map((service, index) => (
              <ServiceShort
                key={service.id}
                {...service}
                time={index}
              ></ServiceShort>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
