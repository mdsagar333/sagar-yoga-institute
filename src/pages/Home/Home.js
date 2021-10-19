import React from "react";
import Activities from "./Components/Activities/Activities";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Subscribe from "./Components/Subscribed/Subscribe";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Activities></Activities>
      <Services></Services>
      <Subscribe></Subscribe>
    </div>
  );
};
