
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter flex justify-between" style={{alignItems:'center'}}>
        <p className='text-start'>Newsletter <br /> Be the first one to know about discounts, offers and events</p>
        <form className="newsletter-form">
          <input style={{color:'black'}} type="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section company-info">
          <h3>LOGO HERE</h3>
          <p>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer.
          </p>
          <div className="subscribe-now">
            <p>Subscribe Now</p>
            <form>
              <input className='footer-input-inner' type="email" placeholder="Enter Your Email" />
            </form>
          </div>
        </div>

        {/* Information Links */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="footer-section">
          <h4>Helpful Links</h4>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Salt Massage</a></li>
            <li><a href="#">Body Care</a></li>
            <li><a href="#">Face Treatment</a></li>
            <li><a href="#">Blissful Body</a></li>
            <li><a href="#">Rejuva Relax</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p><i className="fa fa-phone"></i> (307) 555-0133</p>
          <p><i className="fa fa-envelope"></i> debbie.baker@example.com</p>
          <div className="social-icons">
            <img src="../assests/Vector.png" alt="" />
            <img src="../assests/Vector (6).png" alt="" />
            <img src="../assests/Vector (7).png" alt="" />
            <img src="../assests/Group 39897.png" alt="" />
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2024 Massage. All rights reserved by Escort</p>
      </div>
    </footer>
  );
};

export default Footer;
