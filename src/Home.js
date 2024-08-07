import App from './App';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import micky from './micky.png';
import bread from './bread.png';
import paper from './paper.png';
import tissue from './tissue.png';
import image from './Images.png';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import boy from './image6.png';
import Frame from './Frame.png';
import customer from './customer.png'
import Frame1 from './Frame1.png';
import fb from './fb.png';
import x from './x.png';
import insta from './insta.png';
import linkedin from './linkedin.png';
import yt from './yt.png';
import logo from './logo.png'
import line from './line.png'
import Navbar from './Navbar';
import Myform from './form';
import About from './About.png'
import hl from './hl.png'
import Carousal from './carousal'


const Home = () =>{

    const year = new Date();
    const top = () => {
        window.scrollTo(0,0);
    }

    
return(
    <>
    <div id='intro' className="container justify-content-center" style={{paddingTop: '250px'}}>
        <div className="row align-items-center">
            <div className="col text-center md-mx-5">
            <h1 style={{ fontSize: '50px', color: '#1A618B'}}>We promote <br />your brand <br /> with Stunning <br /><span><strong>Packaging</strong></span></h1>
            </div>
            <div className="col-md-5 text-center text-md-start">
            <img className= 'img-fluid' src={Frame1} alt="" />
            </div>
        </div>
    </div>

    {/* ABOUT PAGE */}
    <section id='About'>
    <div  className=" container" style={{marginTop: '200px'}}>
    <div className="row text-center d-md-block">
                    <div  className="col">
                        <img src={About} alt="" />
                        <img className='px-3 fw-bold' src={hl} alt="" />

                    </div>
                </div>
        <div className="row">
            <div className="col-md-6 my-5 d-md-block">
            
            <img className='img-fluid text-center' src={paper} alt="" />
            </div>
            <div className="col-md-6 col-md-text-center">
                
            <strong><h1 className='fw-bold' style={{color:'#1A618B', paddingTop: '35px'}}>Packaging at it’s <br />Finest <br /></h1></strong>
                        <p style={{}}>
                        "At Micky Prints, we believe that packaging is not just a means 
                        to deliver products; it's an opportunity to make a lasting impression. 
                        With years of experience and a dedicated team of experts, 
                        we've perfected the art of packaging to ensure that every box, bag, 
                        or label we create tells a story – your story.
                        <br />
                        Our journey began with a simple idea: to empower businesses, big and 
                        small, with packaging solutions that reflect their values and aspirations.
                        Today, we stand as industry leaders, driven by a passion for innovation 
                        and a commitment to excellence.
                        What sets us apart? It's our unwavering dedication to quality, creativity, 
                        and sustainability. From the initial concept to the final product, 
                        we work closely with our clients to understand their unique needs and 
                        bring their vision to life. Whether it's a custom-designed box for a luxury 
                        brand or eco-friendly packaging for a conscious consumer, we have the 
                        expertise and resources to deliver beyond expectations.
                        <br />
                        So, whether you're launching a new product, expanding your brand, 
                        or reimagining your packaging strategy, let Micky Prints be your trusted 
                        partner on this exciting journey. 
                        Welcome to Micky Prints – where packaging meets perfection, 
                        and dreams become reality."
                        </p>  
                        <div className="col-6 d-md-block">
                            <h2>6+</h2>
                            <p>Years <br /> in Packaging Solution</p>
                        </div>
            </div>
        </div>
    </div>
    </section>
    {/* WHAT WE DO */}
    <div className="container-fluid" style={{ backgroundColor: '#1A618B'}}>
        <div className="row" style={{paddingTop: '50px',color: 'white', paddingLeft: '20px', paddingBottom: '20px' }}>
            <div className="col text-center" >
            <h2 className = 'fw-bold' style={{color: '#EFDAD9'}}>WHAT WE DO</h2> 
            </div>
            <div className="row justify-content-md-center sm-text-center" style={{paddingTop: '50px'}}>
            <div className="col-md-4">
            <h2>Rubber Stereo Services</h2>
            <p>Rubber stereo printing involves using a rubber plate, known as a rubber stereo, to <br />create impressions on various surfaces. The rubber stereo contains the raised design or text to be printed. When ink is applied to the rubber stereo and pressed onto the surface, it transfers the design, creating clear and precise prints.</p>
            </div>
            <div className="col-md-4">
            <h2>Cylinder Mode</h2>
                    <p>Cylinder mode printing, also known as rotary printing, involves wrapping the design around a cylinder, which then transfers the image onto the material as it moves through the press. This technique is ideal for large-scale, continuous printing tasks.</p>
                
                </div>
                <div className="col-md-4">
                <h2>BOPP Matrial Printing</h2>
                    <p>BOPP packaging involves using Biaxially Oriented Polypropylene material to create packaging solutions such as bags, labels, wraps, and pouches. BOPP films are widely used in the packaging industry due to their excellent printability, clarity, and barrier properties.</p>
                </div>
            </div>
        </div>
    </div>

    {/* PRODUCT */}
    <div className="container-fluid" style={{marginTop: '50px'}}>
        <div className="row">
            <div className="col">
            <div id='Product' className=" Our-product row text-center" style={{paddingTop: '5px'}}>
        <h2 className = 'fw-bold' style={{color: '#1A618B'}}>OUR RECENT PRODUCT</h2>
        </div>
            </div>
        </div>
    </div>

    <Carousal/>



    {/* OUR CUSTOMER */}
    <div className="container-fluid text-center" style={{marginTop: '50px'}}>
        <div className="row">
            <div className="col">
            <h2 className='fw-bold' style={{ fontSize: '25px'}}>Our Customers</h2>
        <p>Providing for Nigeria’s packaging needs for many years has allowed <br />
        us to gain the support of some truly wonderful customers.</p>
            </div>
            <img src={customer} alt="" />
        </div> 
    </div>

    {/* OUR CONTACT*/}
  <div id='Contact' className=" Contact container-fluid" style={{marginTop: '50px' ,backgroundColor: '#EFDAD9'}}>
    <div className="row">
        <div className="col-md-6 d-none d-md-block ms-md-5 ps-md-5 pe-md-5 me-md-15">
        <img style={{maxHeight: '600px', marginTop: '100px'}} className='img-fluid' src={boy} alt="" />
        </div>
        <div className="col-md-3 ms-2 ps-2 text-start " style={{paddingTop: '120px'}}>
        <div className="fw-bold mx-2">
                    <p style={{color: '#e51a49'}}>Contact Us</p>
                    <h2  className = 'fw-bold' style={{color: '#1A618B'}}>Let's talk business</h2>
                </div>
            <Myform/>
        </div>
    </div>
  </div>

  {/* INFO */}
  <div className="container-fluid" style={{ backgroundColor: '#1A618B', color: 'white', paddingTop: '20px', }}>
  <div className="row">
        <div className="col-md-8">
        <ul>
            <img  src={logo} alt="logo" />
                <p>Contact us if you have any question based <br />on partnership, sponsorship. Please contact us at <br /> info@mickyprint.com</p>
            </ul>
           <div className='socials' style={{paddingLeft: '50px'}}>
           <a href="https://www.facebook.com/profile.php?id=61560047197235&mibextid=ZbWKwL"><img src= {fb} alt="" /></a>
           <a href=""><img src= {insta} alt="" /></a>
           <a href=""><img src={linkedin} alt="" /></a>
           <a href=""><img src={yt} alt="" /></a>
           <a href=""><img src={x} alt="" /></a>

           </div>
          
        </div>
        <div className='col-md-4 py-5 px-5'>
            <h3>Contact Information</h3>
            <p>Email info: info@mickyprints.com</p>
            <p>Phone: 08082346361, 08138148024, 07036327048</p>
            <p>Address: 22 Cameroon Road Aba, Abia State, Nigeria. </p>
        </div>
       </div>
  </div>
  <div className="container-fluid" style={{paddingTop: '10px', backgroundColor: '#F5168D', color: 'white'}}>
        <div className="row">
       <div className='col text-center'>
            <p>copyright @{year.getFullYear()} Mickyprint All right Reserved. <span>Terms of Use. Privacy Policy</span></p>
        </div>
       </div>
        </div>

    </>
)

};

export default Home