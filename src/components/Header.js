import React from 'react';
import './Header.css';
import UnivocLogo from './univoc-logo.png';
import BG from './Frame 2232-8.png';
import RightImage from './Right.png';
import SearchIcon from './search-icon.jpeg';
import GPSIcon from './gps-icon.jpeg';

const Header = () => {
  return (
    <div className="page-container">
      <div className="header-container">
        {/* Header Section */}
        <section className="header-section">
          <div className="header-left">
            <img src={UnivocLogo} alt="Univoc Logo" className="logo" />
          </div>

          <div className="header-middle">
            <div className="dropdown">
              <button className="dropbtn">
                Explore
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-content">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>
                <a href="#option3">Option 3</a>
              </div>
            </div>
            <div className="search-bar-container">
              <img src={SearchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                className="search-bar"
                placeholder="What do you want to learn today?"
              />
              <img src={GPSIcon} alt="Location" className="gps-icon" />
            </div>
          </div>

          <div className="header-right">
            <button className="btn sign-in">Sign in</button>
            <button className="btn register">Register for free</button>
          </div>
        </section>

        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-content">
            <div className="navigation-path">
              <div className="nav-links">
                <a href="#home">Home</a>
                <div className="vertical-divider"></div>
                <a href="#programs">Integrated Degree Programs</a>
                <div className="vertical-divider"></div>
                <a href="#hotel">Hotel Management</a>
              </div>
              <div className="course-info">
                <h1>Hotel Management</h1>
                <div className="rating">
                  <div className="stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star half">☆</span>
                  </div>
                  <span className="rating-number">(4.5)</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={RightImage} alt="Hotel Management" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
