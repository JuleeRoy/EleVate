import React from "react";
import { AllProduct, Banner } from "../components";

const Home = () => {
  return (
    <div className="container-fluid">
      <Banner/>
      <AllProduct />
    </div>
  );
};

export default Home;
