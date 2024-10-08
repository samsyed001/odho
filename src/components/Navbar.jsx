import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { useState } from "react"; // Import useState for handling dropdown state

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <>
      <div className="navbar">
        <div className="text-1">
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color:'white' }}>LOGO HERE</h2>
        </div>
        <div className={`text-2 ${isOpen ? 'open' : ''}`}>
          <Link style={{ color:'white'}} className="link" to="/" onClick={closeMenu}>Home</Link>
          <Link style={{ color:'white'}} className="link" to="/about" onClick={closeMenu}>About Us</Link>
          <Link style={{ color:'white'}} className="link" to="/details" onClick={closeMenu}>Modal Details</Link>
          <Link  style={{ color:'white'}}className="link" to="/registrationForm" onClick={closeMenu}>Registration</Link>
          <Link  style={{ color:'white'}}className="link" to="/register" onClick={closeMenu}>Sign Up</Link>
          <Link  style={{ color:'white'}}className="link" to="/login" onClick={closeMenu}>Login</Link>
          <Link  style={{ color:'white'}}className="link" onClick={closeMenu}>
            <i className="fa-solid fa-language"></i>
          </Link>
          <Link className="icon-img" style={{backgroundColor:'white', padding:"8px", borderRadius:"50%"}} onClick={closeMenu}>
            <img
              src="../assests/Vector (5).png"
              alt="Profile"
            />
          </Link>
          <Link onClick={closeMenu} className="link">
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
        <button className="menu-toggle text-white" onClick={toggleMenu}>
          {isOpen ? "Close" : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
    </>
  );
}

export default Navbar;

