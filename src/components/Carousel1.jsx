import React from 'react';
import './carousel.css';

const Carousel1 = () => {
  return ( 
    <section className="container img-fluid section-carousel ">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        <div className="carousel-inner ">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="d-flex justify-content-center">
                <img src="./imgCarousel/totalTech/total.jpg" className="d-block w-55" alt="total"/>
              </div>
            </div> 
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-flex justify-content-center">
                <img src="./imgCarousel/totalTech/junior.jpg" className="d-block w-55" alt="junior"/>             
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img src="./imgCarousel/totalTech/basic.jpg" className="d-block w-55" alt="basic"/>              
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img src="./imgCarousel/totalTech/medium.jpg" className="d-block w-55" alt="medium"/>              
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img src="./imgCarousel/totalTech/expert.jpg" className="d-block w-55" alt="expert"/>              
              </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </section>
  );
};

export default Carousel1;