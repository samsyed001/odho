import { Link } from "react-router-dom"
import "../pages/AboutUs.css"
import Footer from "../components/Footer"
import TestimonialSlider from "../components/Testimonials"



const About = () => {
    return (
      <>
      <div className="about-us">
        <div>
          <h1>About Us</h1>
          <p>Honey/ <span style={{color:'red'}}>About us</span></p>
        </div>
      </div>

      <section style={{backgroundColor:'black', marginTop: "100px"}}>
        <div className="aboutus-hero-section">
          <div className="inner-about-sec">
            <h1>About Us for Massage <br /> and Escort Services</h1>
            <p>Welcome to [Your Business Name], your destination for relaxation and  <br />  companionship. We offer a range of soothing massage therapies and  <br />  professional escort services, designed to provide comfort, relaxation, and  <br />  an unforgettable experience. Our team is dedicated to ensuring your  <br />  privacy, satisfaction, and comfort at all times. Discover a new level of  <br />  care with us.</p>
            <Link>
            <button
              style={{
                padding: '10px 15px',
                backgroundColor: 'red',
                border: 'none',
                borderRadius:'6px',
                color:'white'
              }}
            >
              Book an appointment
            </button>
          </Link>
          </div>
        </div>
      </section>

        <section className="quote" style={{backgroundColor:'black', marginTop: "100px"}}>
          <div className="quote-text">
              <h1>Our Story</h1>
              <p>Welcome to Your Website Name, where elegance, sophistication, and discretion come together to offer an unparalleled escort experience. Founded with the vision of providing high-class companionship services, our journey began with a simple goal: to connect discerning individuals with exceptional escorts who value privacy, respect, and unforgettable moments.</p>
              <p>Since our inception, we have grown to become a trusted name in the industry, recognized for our commitment to excellence and professionalism. Our carefully selected companions are not just beautiful but also intelligent, charming, and engaging individuals who understand the importance of creating meaningful connections.</p>
              <p>At Your Website Name, we believe in offering more than just a service; we provide experiences. Whether its accompanying you to an upscale event, traveling to an exotic destination, or sharing a quiet, intimate evening, our escorts are here to make every moment special.</p>
          </div>
        </section>

        <section>
          <TestimonialSlider/>
          <Footer/>
        </section>
      </>
    )
  }
  
  export default About