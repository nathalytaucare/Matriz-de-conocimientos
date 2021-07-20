import React, {Fragment} from "react";
import Navbar from "./Navbar";

const DashboardLeader = () => {
  return (
    <Fragment>
     <Navbar />
        <main className="dashboardLeader carousel slide"
        id="carouselExampleControls"
        data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./imgCarousel/01.jpg" className="d-block w-100" alt="total" />
                </div>
                <div className="carousel-item">
                    <img src="./imgCarousel/02.jpg" className="d-block w-100" alt="junior" />
                </div>
                <div className="carousel-item">
                <img src="./imgCarousel/03.jpg" className="d-block w-100" alt="basic" />
                </div>
            </div>

            <button 
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button 
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </main>    
    </Fragment>

  );
};

export default DashboardLeader;
