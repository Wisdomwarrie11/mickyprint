import App from './App';
import milky1 from './MICKY 1.png';
import milky2 from './MICKY 2.png';
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

const Home = () => {
    const year = new Date();

    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Construct the WhatsApp message URL
        const phoneNumber = 'YOUR_WHATSAPP_NUMBERz'; // Replace with your WhatsApp number
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
                    <label>Name</label>
                    <input
                        name='from_name'
                        placeholder='Your full name'
                        type='text'
                        value={names}
                        required
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <label>Your message</label>
                    <textarea
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <strong>
                        <button
                            style={{
                                marginLeft: '50px',
                                borderRadius: '10px',
                                color: 'white',
                                backgroundColor: '#1A618B',
                                width: '200px',
                                height: '5px',
                                padding: '40px 40px',
                                marginTop: '20px'
                            }}
                        >
                            Join us
                        </button>
                    </strong>
                </form>
            </div>
        );
    };

    return (
        <>
            {/* HEROPAGE */}
            <div className='HeroPage' style={{ marginLeft: '100px', marginTop: '70px', paddingLeft: '100px', paddingRight: '180px' }}>
                <nav className='navbar'>
                    <img src={milky1} alt="" />
                    <img src={milky2} alt="" />
                    <nav className='navbar1' style={{ display: 'inline-block' }}>
                        <strong>
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Our Products</a>
                        </strong>
                    </nav>
                </nav>

                <div className='general' style={{ marginTop: '100px', float: 'right', marginRight: '50px' }}>
                    <div>
                        <img src={Frame1} alt="" />
                    </div>
                </div>

                <h1 style={{ paddingTop: '200px', color: '#1A618B', marginTop: '200px' }}>We promote <br />your brand <br /> with Stunning <br /><strong>Packaging</strong></h1>
                <div style={{ marginTop: '200px', paddingLeft: '200px', display: 'inline-block' }} className='container1'>
                </div>
            </div>

            {/* ABOUT MILKYPRINT */}
            <div style={{ paddingTop: '200px', marginRight: '50px', color: '#1A618B', display: 'flex', paddingLeft: '150px', paddingRight: '50px', paddinTop: '50px' }} className='About'>
                <img className='img1' style={{ height: '781px', width: '585px' }} src={paper} alt="" />

                <p style={{color: '#666666', fontSize: '20px', lineHeight: '24px', paddingLeft: '200px' }}>
                    "At Micky's Prints, we believe that packaging is not just a means to deliver products; it's an opportunity to make a lasting impression. With years of experience and a dedicated team of experts, we've perfected the art of packaging to ensure that every box, bag, or label we create tells a story – your story.
                    <br />
                    <br />Our journey began with a simple idea: to empower businesses, big and small, with packaging solutions that reflect their values and aspirations. Today, we stand as industry leaders, driven by a passion for innovation and a commitment to excellence. What sets us apart? It's our unwavering dedication to quality, creativity, and sustainability. From the initial concept to the final product, we work closely with our clients to understand their unique needs and bring their vision to life. Whether it's a custom-designed box for a luxury brand or eco-friendly packaging for a conscious consumer, we have the expertise and resources to deliver beyond expectations
                    <br />
                    <br />So, whether you're launching a new product, expanding your brand, or reimagining your packaging strategy, let Micky's Prints be your trusted partner on this exciting journey. Together, we'll create packaging solutions that not only protect your products but also elevate your brand presence and leave a lasting impression on the world. Welcome to Micky's Prints – where packaging meets perfection, and dreams become reality."
                    <div style={{ display: 'flex', color: 'black', paddingLeft: '250px' }}>
                        <h3 style={{ fontSize: '49px', lineHeight: '78px' }}>6+</h3>
                        <p style={{ paddingTop: '50px', paddingLeft: '5px' }}>Years <br />in Packaging Solutions</p>
                    </div>
                </p>
            </div>

            {/* WHAT WE DO */}
            <div style={{ paddingTop: '120px', paddingLeft: '300px', color: '#FFFFFF', fontWeight: '500px', fontSize: '20px', lineHeight: '24px' }} className='what-we-do'>
                <h2 style={{ fontSize: '36px', paddingLeft: '550px', fontWeight: '800px', color: '#EFDAD9' }}>WHAT WE DO</h2>
                <div style={{ paddingLeft: '30px', width: '450px', height: '168px', float: 'left' }} className='section1'>
                    <h2>Rubber Stereo Services</h2>
                    <p>Rubber stereo printing involves using a <br /> rubber plate, known as a rubber stereo, to <br />create impressions on various surfaces. The <br />rubber stereo contains the raised design or <br /> text to be printed. When ink is applied to the rubber stereo and <br />pressed onto the surface, it transfers the design, creating clear and precise prints.</p>
                </div>
                <div style={{ paddingLeft: '30px', width: '374px', height: '168px', float: 'left' }} className='section2'>
                    <h2>Cylinder Mode</h2>
                    <p>Cylinder mode printing, also known as rotary printing, involves wrapping the design around a cylinder, which then transfers the image onto the material as it moves through the press. This technique is ideal for large-scale, continuous printing tasks.</p>
                </div>
                <div style={{ paddingLeft: '30px', width: '374px', height: '168px', float: 'left' }} className='section3'>
                    <h2>BOPP Matrial Printing</h2>
                    <p>BOPP packaging involves using Biaxially Oriented Polypropylene material to create packaging solutions such as bags, labels, wraps, and pouches. BOPP films are widely used in the packaging industry due to their excellent printability, clarity, and barrier properties.</p>
                </div>
            </div>

            {/* PRODUCT */}
            <div style={{ color: '#1A618B', paddingLeft: '40%', fontSize: '30px', fontWeight: '800px' }}>
                <h2>OUR RECENT PRODUCT</h2>
            </div>

            {/* PACKAGING DESIGN */}
            <div style={{ backgroundColor: '#C4C6DB', paddingLeft: '50px', paddingTop: '10px', textAlign: 'center', fontSize: '21px', height: '700px' }}>
                <strong><h2 style={{ color: '#000000', fontWeight: '1000px' }}>Stunning Packaging Design</h2></strong>
                <p>Our stunning packaging design services are tailored to elevate your products and captivate <br />consumers' attention. We specialize in creating visually striking packaging that stands out on the <br /> shelves and leaves a lasting impression.</p>
                <img src={Frame} alt="" />
            </div>

            {/* OUR CUSTOMER */}
            <div style={{ paddingLeft: '350px', height: '500px', paddingTop: '70px' }}>
                <h2 style={{ fontSize: '16px' }}>Our Customer</h2>
                <p>Providing for Nigeria’s packaging needs for many years has allowed
                    us to gain the support of some truly wonderful customers.</p>
                <img src={container} alt="" />
            </div>



        {/* CONTACT */}
            <div className='contact' style={{ backgroundColor: '#EFDAD9', paddingTop: '10px', paddingLeft:'500px', height: '750px'}}>
       <img style={{ width:'400px', height: '750px', float:'left', display: 'inline', paddingRight: '100px'}} src={boy} alt="" />

            <h2 style={{color: '#E51A49', fontSize: '16px'}}>Contact us
            </h2>
            <h2 style={{color: '#1A618B', fontSize: '36px'}}>Let's Talk Business!</h2>
            {Myform()};
            
        </div>


        {/* INFO */}
        <div className="footer1" style={{fontSize: '20px'}}>
        
        <div>
            <ul>
            <img style={{width: '200px', height:'50px', paddingTop: '30px'}} src={logo} alt="logo" />
                <p>contact us if you have any question based <br />on partnership, sponsorship. Please contact us at <br /> info@mickyprint.com</p>
            </ul>
           <div className ='socials' style={{}}>
           <a href=""><img src= {fb} alt="" /></a>
           <a href=""><img src= {insta} alt="" /></a>
           <a href=""><img src={linkedin} alt="" /></a>
           <a href=""><img src={yt} alt="" /></a>
           <a href=""><img src={x} alt="" /></a>

           </div>
        </div>
        <div style={{paddingLeft: '700px', paddingTop: '100px'}}>
            <h3>Contact Information</h3>
            <p>Email info: firstplaceconect@gmail.com</p>
            <p>Phone: +2347041197027</p>
            <p>Address: </p>
        </div>
        </div>

        {/* FOOTER */}
        <div style={{backgroundColor: '#E51A49', marginTop: '0px', marginBottom: '20px', paddingTop: '30px', color: 'white', paddingBottom : '20px', paddingLeft: '250px', fontWeight: '800px', height: '100px'}}>
            <p style={{fontSize: '20px'}}>copyright @{year.getFullYear()} Mickyprint All right Reserved. <span style={{paddingLeft: '500px', fontSize: '20px'}}>Terms of Use. Privacy Policy</span></p>
        </div>
   </>
    )
};

export default Home