import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Have More Questions?</h2>
          <p>Reach out to us. Our support team is here to assist you.</p>
          <p>
            📧 <a href="mailto:Hrd@Theunivoc.Com">Hrd@Theunivoc.Com</a>
          </p>
          <p>📞 +91 84483 73884</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email Address*" required />
          <div className="contact-inline">
            <select required>
              <option value="IN" defaultValue>
                IN +91 | Enter your mobile number*
              </option>
              {/* Add more country codes if needed */}
            </select>
            <input type="text" placeholder="Your Mobile Number*" required />
          </div>
          <div className="contact-inline">
            <input type="text" placeholder="State*" required />
            <input type="text" placeholder="City*" required />
          </div>
          <select required>
            <option value="" disabled selected>
              Select School Name
            </option>
            {/* Add school options */}
          </select>
          <textarea placeholder="Your Message*" required></textarea>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
