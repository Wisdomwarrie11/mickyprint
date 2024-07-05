import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Myform =()=>{


        const [names, setNames] = useState('');
        const [number, setNumber] = useState('');
        const [email, setEmail] = useState('');
        const [isResponsive, setIsResponsive] = useState(false);
        const [message, setMessage] = useState('I want to create a packaging for my product');
        const form = useRef();

        const sendEmail = (e) => {
                    e.preventDefault();
                    // Construct the WhatsApp message URL
                    const phoneNumber = '2347036327048'; // Replace with your WhatsApp number
                    const whatsappMessage = `https://wa.me/${phoneNumber}?text= My name is %20${encodeURIComponent(names)}%20.%20${encodeURIComponent(message)}`;
                    
                    // Open WhatsApp with the pre-filled message
                    window.open(whatsappMessage, '_blank');
                };

    return(
        <>
        <section id="contact">
            <div className="container">
           
                <div className="">
                    <div className="col-md-6 ">
                   
                        <form ref={form} onSubmit={sendEmail} action="">
                            <label style={{paddingBottom: '10px'}} for="Name" className="form-label fw-bold">Name</label>
                            <input style={{width: '300px', height: '70px', fontSize: '15px'}} type="text" value={names} 
                            className="form-control " id="Name"  
                            required 
                            onChange={(e) => setNames(e.target.value)} 
                            placeholder="Your name" />

                            <label for="message" className="form-label fw-bold">Message</label>
                            <textarea style={{width: '300px', height: '150px', fontSize: '15px', padding: '10px 10px'}} 
                            onChange={(e) => setMessage(e.target.value)}
                             value={message} className="form-control" 
                             name="message" id="message"></textarea>
                        <div className="mb-4">
                            <button style={{borderRadius: '10px', cursor: 'pointer',
                            color: 'white',backgroundColor: '#1A618B', fontSize: '30px', 
                            fontWeight: '500px', width: '400px', height: '85px', paddingBottom: '8px',
                            marginTop: '20px'}} type="submit" className="btn mt-5 fw-bold">
                                Send
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Myform