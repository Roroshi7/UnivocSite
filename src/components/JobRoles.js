import React from 'react';
import './JobRoles.css';
import Mechanical from './Mechanical.png';
import Pharmacy from './Pharmacy.png';
import Chemical from './Chemical.png';

const JobRoles = () => {
  const courses = [
    {
      name: 'Mechanical Engineering',
      image: Mechanical,
      fontStyle: { fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#000' },
    },
    {
      name: 'Pharmacy',
      image: Pharmacy,
      fontStyle: { fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#000' },
    },
    {
      name: 'Chemical',
      image: Chemical,
      fontStyle: { fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#000' },
    },
  ];

  return (
    <section id="job-roles" className="job-roles">
      <div className="job-roles-container">
        <div className="roles-section">
          <h2>Job Roles</h2>
          <div className="roles-columns">
            <ul className="left-roles">
              <li className="job-role-item">General Manager (GM)</li>
              <li className="job-role-item">Front Office Manager</li>
              <li className="job-role-item">Housekeeping Manager</li>
              <li className="job-role-item">Food and Beverage Manager</li>
              <li className="job-role-item">Event Manager</li>
            </ul>
            <ul className="right-roles">
              <li className="job-role-item">Executive Chef</li>
              <li className="job-role-item">Spa Manager</li>
              <li className="job-role-item">Concierge</li>
            </ul>
          </div>
        </div>
        <div className="related-courses-section">
          <h2>Related Courses</h2>
          {courses.map((course, index) => (
            <div key={index} className="related-course">
              <img src={course.image} alt={course.name} />
              <div className="course-info">
                <p style={course.fontStyle}>{course.name}</p>
                <span className="course-stars">★★★★☆</span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobRoles;
