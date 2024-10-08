
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Left-side image */}
        <div className="contact-image">
          <img width={400} src="../assests/Rectangle 520.png" alt="Contact" />
        </div>

        {/* Right-side form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-row">
              <div className="input-container">
                <input type="text" required />
                <label>Name</label>
              </div>
              <div className="input-container">
                <input type="email" required />
                <label>Email</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <input type="text" />
                <label>Select Services</label>
              </div>
              <div className="input-container">
                <input type="tel" />
                <label>Number</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <textarea rows="6"></textarea>
                <label>Message</label>
              </div>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

