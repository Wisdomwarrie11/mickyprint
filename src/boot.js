import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import micky from './micky.png';
import Frame1 from './Frame1.png';
import paper from './paper.png';




const Home = () =>{
return(
       <>
       <div className='container'>
       <div id='Navbar-container'>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <img src={micky} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Our Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </div>
       <div>
       
    <Container>
      <Row>
        <Col>
        <div className='col-sm-12 col-md-6'>
                <img src={Frame1} alt="" />
            </div>
            <h1 className='col-sm-12 col-md-6'>We promote <br />your brand <br /> with Stunning <br /><span><strong>Packaging</strong></span></h1>
       </Col>
      </Row>
      <Row>
      <strong><p>About Micky Prints</p> </strong>
      </Row>
      <Row>
        <Col>
        <div className='About1'>
                
                <div className=''>
                <img className='img1'src={paper} alt="" />
                </div>
                <p className= ''> <strong><span>Packaging at it’s <br />Finest <br /></span></strong> 
                    "At Micky's Prints, we believe that packaging is not just a means to deliver products; it's an opportunity to make a lasting impression. With years of experience and a dedicated team of experts, we've perfected the art of packaging to ensure that every box, bag, or label we create tells a story – your story.
                    <br />
                    <br />Our journey began with a simple idea: to empower businesses, big and small, with packaging solutions that reflect their values and aspirations. Today, we stand as industry leaders, driven by a passion for innovation and a commitment to excellence. What sets us apart? It's our unwavering dedication to quality, creativity, and sustainability. From the initial concept to the final product, we work closely with our clients to understand their unique needs and bring their vision to life. Whether it's a custom-designed box for a luxury brand or eco-friendly packaging for a conscious consumer, we have the expertise and resources to deliver beyond expectations
                    <br />
                    <br />So, whether you're launching a new product, expanding your brand, or reimagining your packaging strategy, let Micky's Prints be your trusted partner on this exciting journey. Together, we'll create packaging solutions that not only protect your products but also elevate your brand presence and leave a lasting impression on the world. Welcome to Micky's Prints – where packaging meets perfection, and dreams become reality."
                    <div  className='experience' >
                        <h3 >6+</h3>
                        <p >Years <br />in Packaging Solutions</p>
                    </div>
                </p>
            </div>
        
        </Col>

        <Col>
        <div className='what-we-do'>
                <h2 className='we-do-heading'>WHAT WE DO</h2>
                <Col>

                <div className=''>
                    <h2>Rubber Stereo Services</h2>
                    <p>Rubber stereo printing involves using a <br /> rubber plate, known as a rubber stereo, to <br />create impressions on various surfaces. The <br />rubber stereo contains the raised design or <br /> text to be printed. When ink is applied to the rubber stereo and <br />pressed onto the surface, it transfers the design, creating clear and precise prints.</p>
                </div>
                <div className=''>
                    <h2>Cylinder Mode</h2>
                    <p>Cylinder mode printing, also known as rotary printing, involves wrapping the design around a cylinder, which then transfers the image onto the material as it moves through the press. This technique is ideal for large-scale, continuous printing tasks.</p>
                </div>
                <div className=''>
                    <h2>BOPP Matrial Printing</h2>
                    <p>BOPP packaging involves using Biaxially Oriented Polypropylene material to create packaging solutions such as bags, labels, wraps, and pouches. BOPP films are widely used in the packaging industry due to their excellent printability, clarity, and barrier properties.</p>
                </div>
                </Col>
            </div>
        </Col>
      </Row>
    </Container>
       </div>
       </div>
     
    </>

)
}

export default Home