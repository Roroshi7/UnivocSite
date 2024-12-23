import React from 'react';
import './ProgramDetails.css';
import ReceptionImage from './Frame.png'; // Replace with your image name

const ProgramDetails = () => {
  return (
    <div className="program-container">
      {/* Left Column: About the Program and Courses */}
      <div className="left-column">
        <section className="program-info">
          <h1>About the Program</h1>
          <p>
            The "Hotel Management" program is a comprehensive course tailored for aspiring
            hospitality professionals. With the global tourism and hospitality industry
            witnessing significant growth, the demand for skilled managers is at an all-time high.
          </p>
          <p>
            This program aligns with industry needs and equips students with essential expertise in
            operations management, customer service, event planning, and culinary arts. The curriculum
            includes modules on hotel administration, food and beverage management, housekeeping, and
            hospitality marketing, ensuring students gain both theoretical knowledge and practical
            experience. By mastering these skills, learners will be prepared to excel in dynamic roles
            across hotels, resorts, and other hospitality sectors.
          </p>
        </section>

        <section className="courses-section">
          <div className="courses-rectangle">
            <h2 className="courses-title">Courses</h2>
            <div className="dropdown">
              <label>Technical Skills</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="dropdown">
              <label>Functional Skills</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="dropdown">
              <label>Behavioural Skills</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Start Learning Section */}
      <div className="start-learning-section">
        <div className="program-details-card neon-effect">
          <div className="image-container">
            <img src={ReceptionImage} alt="Reception Desk" />
          </div>
          <button className="start-learning-button">Start Learning</button>
          <div className="details">
            <p><strong>Duration:</strong> <span>45hrs</span></p>
            <p><strong>Language:</strong> <span>English</span></p>
            <p><strong>Total Credits:</strong> <span>30</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
