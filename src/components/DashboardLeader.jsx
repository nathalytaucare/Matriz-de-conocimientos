import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import vsTech from "../images/vsTech.jpg";
import './carousel.css';

const DashboardLeader = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Carousel1 />
      </div>
      <div className="container d-flex justify-content-center ">
        <Carousel2 />
        <img src={vsTech} className="section-carousel" alt="DemandVScollaborator" />
      </div>
    </Fragment>
  );
};

export default DashboardLeader;
