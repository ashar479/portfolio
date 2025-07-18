// Footer.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import LinkedIn from './images/linkedin.svg';
import Facebook from './images/facebook.svg';
import GitHub from './images/github.svg';
import Insta from './images/instagram.svg';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        'service_7ym8e2f',
        'template_xu37y08',
        templateParams,
        'PWEBK8zomJ9qTtlxT'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <footer className="footer">
      <div className="contact-and-info">
        <div className="contact-form">
          <h3>Connect With Me</h3>
          <h2>
            Note! This mail will not be sent from the email address you entered.
            Only the mail will contain that email address.
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              title="Enter your name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              title="Enter your email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              title="Enter your message"
              name="message"
              className="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button title="Submit your form" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="info-section">
          <div>
            <h3>Address</h3>
            <p>1831 E Apache Blvd, Apt. B-3076</p>
            <p>Tempe, Arizona, United States - 85281</p>
          </div>
          <div>
            <h3>Social Media</h3>
            <div className="social-buttons">
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/anshsharma120601/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a
                title="Github"
                href="https://github.com/ashar479"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />
              </a>
              <a
                title="Instagram"
                href="https://www.instagram.com/anshsharma1206/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Insta} alt="Instagram" />
              </a>
              <a
                title="Facebook"
                href="https://www.facebook.com/profile.php?id=100001596154001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div>
            <h3>Email</h3>
            <p>
              <a
                title="My personal email"
                href="mailto:anshsharma120601@gmail.com"
              >
                anshsharma120601@gmail.com
              </a>
            </p>
            <p>
              <a title="My work email" href="mailto:ashar479@asu.edu">
                ashar479@asu.edu
              </a>
            </p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (480) 370-9076</p>
          </div>
        </div>
      </div>
      <p>&copy; 2024 anshsharma120601 | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
