import React from 'react';
import './carousel.css';

const EmployeeCarousel = () => {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide section-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="d-flex justify-content-center">
              <img src="./imgCarousel/messagesEmployee/carousel_1.jpg" className="d-block w-50" alt="message1" />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="d-flex justify-content-center">
              <img src="./imgCarousel/messagesEmployee/carousel_2.jpg" className="d-block w-50" alt="message2" />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="d-flex justify-content-center">
              <img src="./imgCarousel/messagesEmployee/carousel_3.jpg" className="d-block w-50" alt="message3" />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="d-flex justify-content-center">
              <img src="./imgCarousel/messagesEmployee/carousel_4.jpg" className="d-block w-50" alt="message4" />
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
    </div>
  );
};

export default EmployeeCarousel;