import React from "react";
import useAllContext from "../../Hooks/useAllContext";
import ServiceShort from "../Shared/ServiceComponent/ServiceShot/ServiceShort";

const Services = () => {
  const { services, isLoading } = useAllContext();
  return (
    <div>
      <h5 className="text-center text-uppercase my-4 custom_color custome-letter-spacing">
        our all services
      </h5>
      <h1 className="mb-4 text-capitalize text-center">
        Join the world of yoga
      </h1>
      <p className="text-capitalize text-center custome-letter-spacing fw-bold">
        Live a happy and healthy life
      </p>
      <div className="services_wrapper container-fluid px-3 pt-3">
        <div className="row g-4">
          {services.map((service) => (
            <ServiceShort key={service.id} {...service}></ServiceShort>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
