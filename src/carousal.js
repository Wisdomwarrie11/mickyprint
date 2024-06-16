import App from './App';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import slide1 from './Slide1.png'
import slide2 from './Slide2.png'
import slide3 from './Slide3.png'
import slide5 from './Slide5.png'
import slide6 from './Slide6.png'




const Carousal = () =>{
    return(
    <>
  <div className="container-fluid">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <div class="carousel-item">
      <img src={slide5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide6} class="d-block w-100" alt="..."/>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
    </>
    )
};

export default Carousal