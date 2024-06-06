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
import pad from './pad.png';
import Frame from './Frame.png';
import container from './Container.png';
import Frame1 from './Frame1.png';
import fb from './fb.png';
import x from './x.png';
import insta from './insta.png';
import linkedin from './linkedin.png';
import yt from './yt.png';
import logo from './logo.png'
import line from './line.png'
import Navbar from './Navbar';

const Home = () => {
    const year = new Date();
    const top = () => {
        window.scrollTo(0,0);
    }

    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isResponsive, setIsResponsive] = useState(false);
    const [message, setMessage] = useState('I want to create a packaging for my product');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Construct the WhatsApp message URL
        const phoneNumber = '2348164784432'; // Replace with your WhatsApp number
        const whatsappMessage = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(names)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        
        // Open WhatsApp with the pre-filled message
        window.open(whatsappMessage, '_blank');

        // Optional: Send an email using emailjs
        emailjs.sendForm('service_0bebbk8', 'template_dg0adum', form.current, 'oYz9P4v4ylM0rh7Di')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const Myform = () => {
        return (
            <div style={{ paddingLeft: '50px', paddingTop: '70px' }}>
                <form ref={form} onSubmit={sendEmail}>
                    <label style={{paddingBottom: '10px'}}>Name</label>
                    <input style={{fontSize: '20px'}}
                        name='from_name'
                        placeholder='Your full name'
                        type='text'
                        value={names}
                        required
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <label>Your message</label>
                    <textarea style={{fontSize: '20px', padding: '20px 30px'}}
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <strong>
                        <button
                            style={{
                                marginLeft: '1px', borderRadius: '10px', cursor: 'pointer',color: 'white',backgroundColor: '#1A618B', fontSize: '30px', fontWeight: '500px', width: '337px', height: '85px', paddingBottom: '8px', marginTop: '20px'}}>
                            Join us
                        </button>
                    </strong>
                </form>
            </div>
        );
    };

    return(
      <>
       <Navbar/>

     <div className="container-fluid" style={{backgroundColor: '#FFF6F6', paddingTop: '50px'}}>
     <div className='my-5'>
     <div className="row justify-content-center">
            <div className="col-md-5 text-center text-md-start">
            <h1 style={{paddingLeft: '80px', fontSize: '50px', color: '#1A618B'}}>We promote <br />your brand <br /> with Stunning <br /><span><strong>Packaging</strong></span></h1>
            </div>
            <div className="col-md-5 d-md-block">
                <img className= 'img-fluid' src={Frame1} alt="" />
            </div>
        </div>
     </div>
       

        {/* ABOUT PAGE */}
           <div className="container">
           <div id='about' className="row" style={{marginTop: '250px'}}>
                
                <div className="col-md-6 d-md-block" >
                        <img className='img-fluid' src={paper} alt="" />
                    </div>
                    {/* <div className="col">
                        <h2>About Micky Prints</h2>
                    </div> */}
                    <div className='col-sm-6'>
                    <div className="col text-center">
                        <p>About MickyPrint</p>
                    </div>
                        <strong><h1 className='fw-2' style={{color:'#1A618B'}}>Packaging at it’s <br />Finest <br /></h1></strong>
                        <p style={{}}>
                        "At Micky's Prints, we believe that packaging is not just a means 
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
                        or reimagining your packaging strategy, let Micky's Prints be your trusted 
                        partner on this exciting journey. 
                        Welcome to Micky's Prints – where packaging meets perfection, 
                        and dreams become reality."
    
                        </p>
                </div>  
            </div>
           </div>

        {/* WHAT WE DO */}
        <div className="row" style={{padding: '100px 50px', backgroundColor: '#1A618B', color: '#FFFFFF'}}>
            <div className="col text-center">
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

        {/* PRODUCT */}
        <div id='product' className="row text-center" style={{paddingTop: '50px'}}>
        <h2 className = 'fw-bold' style={{color: '#1A618B'}}>OUR RECENT PRODUCT</h2>
        </div>

        {/* PACKAGING DESIGN */}
        
     <div className="container">
     <div className="row" style={{backgroundColor: '#C4C6DB', paddingTop: '30px'}}>
       <div className="row">
            <div className="col text-center">
            <strong><h2 className = 'fw-bold' >Stunning Packaging Design</h2></strong>
                <p>Our stunning packaging design services are tailored to elevate your products and captivate <br />consumers' attention. We specialize in creating visually striking packaging that stands out on the <br /> shelves and leaves a lasting impression.</p>
            </div>
        </div>
        <div className="col text-center ">
            <img  className='img-fluid' style={{maxWidth: '400px'}} src={Frame} alt="" />
        </div>
       </div>
     </div>

       {/* OUR CUSTOMER */}
       <div className="row text-center" style={{paddingTop: '50px'}}>
        <div className="col">
        <h2 style={{ fontSize: '40px'}}>Our Customers</h2>
        <p>Providing for Nigeria’s packaging needs for many years has allowed <br />
        us to gain the support of some truly wonderful customers.</p>
        </div>
         <img src={container} alt="" />
       </div>

       {/* CONTACT */}
       <div className="container">
       <div id='contact' className="row" style={{paddingTop: '100px', paddingLeft: '100px', backgroundColor: '#EFDAD9', marginTop: '150px'}}>
        <div className="col-md-3">
        <img className='img-fluid' src={boy} alt="" />
        </div>
        <div className='col-md-6'>
        <h2>Contact us
            </h2>
            <h2 className='contact-bus'>Let's Talk Business!</h2>
            {Myform()};
        </div>
       </div>
       </div>

       {/* INFO */}
       <div className="row" style={{paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#1A618B', color: 'white' }}>
        <div className="col-md-8">
        <ul>
            <img  src={logo} alt="logo" />
                <p>contact us if you have any question based <br />on partnership, sponsorship. Please contact us at <br /> info@mickyprint.com</p>
            </ul>
           <div className='socials' style={{paddingLeft: '50px'}}>
           <a href=""><img src= {fb} alt="" /></a>
           <a href=""><img src= {insta} alt="" /></a>
           <a href=""><img src={linkedin} alt="" /></a>
           <a href=""><img src={yt} alt="" /></a>
           <a href=""><img src={x} alt="" /></a>

           </div>
          
        </div>
        <div className='col-md-4'>
            <h3>Contact Information</h3>
            <p>Email info: info@mickyprints.com</p>
            <p>Phone: 08082346361, 08138148024, 08158470504</p>
            <p>Address: 22 Cameroon Road Aba, Abia State, Nigeria. </p>
        </div>
       </div>
        {/* FOOTER */}
       <div className="row">
       <div className='col text-center' style={{paddingTop: '20px',backgroundColor: '#e51a49', color: 'white'}}>
            <p>copyright @{year.getFullYear()} Mickyprint All right Reserved. <span>Terms of Use. Privacy Policy</span></p>
        </div>
       </div>





     </div>
      </>

    )
  };

    export default Home