import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import micky from './micky.png';



const Navbar = () =>{
    return(
        <>
    <nav class=" navbar fixed-top navbar-expand-md navbar-light bg-light">
  <div class="container-xxl">
    <a class="navbar-brand" href="#intro">
        <img src={micky} alt="" />
    </a>

    {/* Toggle button for mobile view */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    {/* The links */}
    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
     <div style={{paddingRight: '50px' }} className='links'>
     <ul class="navbar-nav fw-bolder">
        <li class="nav-item">
          <a style={{paddingRight: '60px'}}  class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a style={{paddingRight: '60px'}} class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a style={{paddingRight: '60px'}}  class="nav-link" href="#product">Our Product</a>
        </li>
      </ul>
     </div>
    </div>
  </div>
</nav>
      {/* <strong>
            <Link to = '/'><img src={micky} alt="" /> </Link> 
            <Link to="About" spy={true} smooth={true} offset={-30} duration={500}>About</Link>
            <Link to="Contact" spy={true} smooth={true} offset={-120} duration={500}>Contact</Link>
            <Link to="Our Product" spy={true} smooth={true} offset={-40} duration={500}>Our Product</Link>
    </strong> */}
        </>
    )
}

export default Navbar