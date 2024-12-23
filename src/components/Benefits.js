import React, { useState } from 'react';
import './Benefits.css';
import arrow from './path-to-arrow.jpeg'; // Arrow image
import logo from './path-to-logo.png'; // Logo image

const Benefits = () => {
  const benefitsData = [
    {
      title: 'Placement Facilitation',
      description:
        'Career support and placement facilitation will be provided for students who successfully complete the program.',
    },
    {
      title: 'Blended Delivery',
      description:
        'Students gain hands-on practical skills in real-world settings while accessing theoretical knowledge digitally. This approach enhances engagement, accommodates diverse learning styles, and prepares them for dynamic hospitality careers.',
    },
    {
      title: 'Value Additions',
      description:
        'The students will be enabled with various other initiatives including Engineers’ Ensemble, free Micro-learning, webinars, and other impactful events.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Default to 'Blended Delivery'

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % benefitsData.length);
  };

  return (
    <section id="benefits" className="benefits">
      <h2>Benefits</h2>
      <div className="benefits-container">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className={`benefit-card ${
              index === activeIndex ? 'active-card' : 'blurred-card'
            }`}
          >
            <img src={logo} alt="Benefit Icon" className="benefit-icon" />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
        <img
          src={arrow}
          alt="Next Arrow"
          className="next-arrow"
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default Benefits;
