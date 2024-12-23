import React from 'react';
import './footer.css';
import UnivocLogo from './blacklogo.jpeg'; // Replace with your logo path
import XLogo from './X.jpeg'; // Path to X logo in the components folder
import InstagramLogo from './insta.jpeg'; // Path to Instagram logo in the components folder
import LinkedInLogo from './linkedin.jpeg'; // Path to LinkedIn logo in the components folder
import YouTubeLogo from './youtube.jpeg'; // Path to YouTube logo in the components folder

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <img src={UnivocLogo} alt="UNIVOC Logo" className="footer-logo" />
          <div className="footer-text">
            <h3>Empowering Individuals</h3>
            <p>
              "Empowering individuals with the skills to thrive in a changing world. <br />
              Univoc skilling to empower bridges talent and opportunity, driving innovation and growth for a brighter future."
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Careers</p>
            <p>Addressss</p>
            <p>📧 <a href="mailto:hrd@theunivoc.com">hrd@theunivoc.com</a></p>
          </div>
          <div className="footer-column">
            <h3>Academics</h3>
            <p>Programme</p>
          </div>
          <div className="footer-column">
            <h3>Innovation</h3>
            <p>Student</p>
            <p>Faculty</p>
          </div>
          <div className="footer-column">
            <h3>Other Links</h3>
            <p>Jobs</p>
            <p>Become a Teacher</p>
            <p>Events</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={XLogo} alt="X" className="social-logo" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={InstagramLogo} alt="Instagram" className="social-logo" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={LinkedInLogo} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={YouTubeLogo} alt="YouTube" className="social-logo" />
          </a>
        </div>

        {/* White Line */}
        <hr className="footer-line" />
      </div>
    </footer>
  );
};

export default Footer;
