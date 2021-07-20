import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel1";

const DashboardLeader = () => {
  return (
    <Fragment>
      <Navbar />
        <div className="container">
          <Carousel1 />
        </div>     
    </Fragment>
  );
};

export default DashboardLeader;
