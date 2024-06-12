import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import micky from './micky.png';



const Navbar = () =>{
    return(
        <>
  
    <nav class=" navbar fixed-top navbar-expand-md bg-light " style={{backgroundColor: '#edd3d3', padding: '20px'}}>
  <div class="container-xxl">
    <a class="navbar-brand" href="#intro">
        <img src={micky} alt="" />
    </a>

    {/* Toggle button for mobile view */}
    <button style={{marginRight: '20px'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    {/* The links */}
    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
     <div style={{paddingRight: '100px' }} className='links'>
     <ul class="navbar-nav fw-bolder ">
        <li class="nav-item" style={{paddingTop: '25px'}}>
          <a style={{paddingRight: '50px', color: '#F5168D'}}href="#About">About</a>
        {/* <Link style={{paddingRight: '50px', color: '#F5168D'}} to="About" spy={true} smooth={true} offset={-120} duration={1000}>About</Link> */}
        </li>
        <li class="nav-item" style={{paddingTop: '25px'}}>
        {/* <Link  style={{paddingRight: '50px',paddingTop: '25px',color: '#F5168D'}}to="Our-product" spy={true} smooth={true} offset={-40} duration={500}>Our Product</Link> */}
        <a style={{paddingRight: '50px', color: '#F5168D'}}href="#Product">Our Product</a>

        </li>
        <li class="nav-item" style={{paddingTop: '25px'}}>
        {/* <Link style={{paddingTop: '25px', color: '#F5168D'}} to="Contact" spy={true} smooth={true} offset={-120} duration={500}>Contact</Link> */}
        <a style={{paddingRight: '50px', color: '#F5168D'}}href="#Contact">Contact</a>

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