import Navbar from "../components/Navbar";
import "../styles/contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
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
            <span>
              <FaMapMarkerAlt />
            </span>

            <p>Nablus, Palestine</p>
          </div>

          <div className="info-box">
            <span>
              <FaPhoneAlt />
            </span>

            <p>+970 599 123 456</p>
          </div>

          <div className="info-box">
            <span>
              <FaEnvelope />
            </span>

            <p>support@aimedical.com</p>
          </div>

          <div className="info-box">
            <span>
              <FaClock />
            </span>

            <p>Open 24/7</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>

            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea placeholder="Write your message..."></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;