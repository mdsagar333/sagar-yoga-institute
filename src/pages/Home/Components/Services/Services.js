import React from "react";
import useAllContext from "../../../../Hooks/useAllContext";
import ServiceShort from "../../../Shared/ServiceComponent/ServiceShot/ServiceShort";

const Services = () => {
  const { services, isLoading } = useAllContext();
  console.log(services);
  return (
    <div className="services_container mt-5">
      <h5 className="custom_color text-center">choose your best services</h5>
      <h1 className="text-capitalize text-center my-4">
        our most popular services
      </h1>
      <div className="services_wrapper container-fluid px-3 pt-3">
        <div className="row g-4">
          {services.slice(0, 6).map((service) => (
            <ServiceShort key={service.id} {...service}></ServiceShort>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
