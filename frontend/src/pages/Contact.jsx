import Navbar from "../components/Navbar";
import "../styles/contact.css";
import { useState } from "react";
import axios from "axios";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/api/contact/create", formData);

      alert("Message sent successfully");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-header">
        <h1>Contact Us</h1>

        <p>
          We are here to help you. Reach out to us anytime for support or
          medical inquiries.
        </p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <span><FaMapMarkerAlt /></span>
            <p>Nablus, Palestine</p>
          </div>

          <div className="info-box">
            <span><FaPhoneAlt /></span>
            <p>+970 599 123 456</p>
          </div>

          <div className="info-box">
            <span><FaEnvelope /></span>
            <p>support@aimedical.com</p>
          </div>

          <div className="info-box">
            <span><FaClock /></span>
            <p>Open 24/7</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;