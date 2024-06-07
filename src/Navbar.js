import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import micky from './micky.png';



const Navbar = () =>{
    return(
        <>
    <div className="container-lg">
    <nav class=" navbar fixed-top navbar-expand-md bg-light">
  <div class="container">
    <a class="navbar-brand" href="#intro">
        <img src={micky} alt="" />
    </a>

    {/* Toggle button for mobile view */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    {/* The links */}
    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
     <div style={{paddingRight: '50px' }} className='links'>
     <ul class="navbar-nav fw-bolder">
        <li class="nav-item">
        <Link style={{paddingRight: '50px', color: '#F5168D'}} to="About" spy={true} smooth={true} offset={-120} duration={1000}>About</Link>
        </li>
        <li class="nav-item">
        <Link style={{paddingRight: '50px', color: '#F5168D'}} to="Contact" spy={true} smooth={true} offset={-120} duration={500}>Contact</Link>
        </li>
        <li class="nav-item">
        <Link  style={{color: '#F5168D'}}to="Our-product" spy={true} smooth={true} offset={-40} duration={500}>Our Product</Link>
        </li>
      </ul>
     </div>
    </div>
  </div>
</nav>
    </div>
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