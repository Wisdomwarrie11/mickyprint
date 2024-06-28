import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


// const Myform = () => {

//     const [names, setNames] = useState('');
//     const [number, setNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [isResponsive, setIsResponsive] = useState(false);
//     const [message, setMessage] = useState('I want to create a packaging for my product');
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
//         // Construct the WhatsApp message URL
//         const phoneNumber = '2348164784432'; // Replace with your WhatsApp number
//         const whatsappMessage = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(names)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        
//         // Open WhatsApp with the pre-filled message
//         window.open(whatsappMessage, '_blank');

//         // Optional: Send an email using emailjs
//         emailjs.sendForm('service_0bebbk8', 'template_dg0adum', form.current, 'oYz9P4v4ylM0rh7Di')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };
//         return (
//             <div style={{ paddingLeft: '50px', paddingTop: '70px' }}>
//                 <form ref={form} onSubmit={sendEmail}>
//                     <label style={{paddingBottom: '10px'}}>Name</label>
//                     <input style={{fontSize: '20px'}}
//                         name='from_name'
//                         placeholder='Your full name'
//                         type='text'
//                         value={names}
//                         required onChange={(e) => setNames(e.target.value)}
//                     />
//                     <label>Your message</label>
//                     <textarea style={{fontSize: '20px', padding: '20px 30px'}}
//                         name='message'
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                     <strong>
//                         <button
//                             style={{
//                                 marginLeft: '1px', borderRadius: '10px', cursor: 'pointer',color: 'white',backgroundColor: '#1A618B', fontSize: '30px', fontWeight: '500px', width: '337px', height: '85px', paddingBottom: '8px', marginTop: '20px'}}>
//                             Join us
//                         </button>
//                     </strong>
//                 </form>
//             </div>
//         );
//     };
// export default Myform

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
                            <input style={{width: '500px', height: '70px', fontSize: '15px'}} type="text" value={names} 
                            className="form-control" id="Name"  
                            required 
                            onChange={(e) => setNames(e.target.value)} 
                            placeholder="Your name" />

                            <label for="message" className="form-label fw-bold">Message</label>
                            <textarea style={{width: '500px', height: '150px', fontSize: '15px', padding: '10px 10px'}} 
                            onChange={(e) => setMessage(e.target.value)}
                             value={message} className="form-control" 
                             name="message" id="message"></textarea>
                        <div className="mb-4">
                            <button style={{borderRadius: '10px', cursor: 'pointer',
                            color: 'white',backgroundColor: '#1A618B', fontSize: '30px', 
                            fontWeight: '500px', width: '500px', height: '85px', paddingBottom: '8px',
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