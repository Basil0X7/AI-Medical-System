import "../styles/home.css";
import heroImage from "../assets/hospital.jpg";
import Navbar from "../components/Navbar";

import {
  FaTooth,
  FaHeartbeat,
  FaBone,
  FaBrain,
  FaHandHoldingMedical,
  FaBaby,
  FaQuestion,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

function Home() {
  const clinics = [
    {
      icon: <FaTooth />,
      title: "Dental Clinic",
      text: "Specialized oral health care including preventative, restorative, and cosmetic dentistry.",
      color: "blue",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      text: "Expert diagnosis and treatment for heart conditions and vascular diseases with state-of-the-art tech.",
      color: "red",
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      text: "Comprehensive care for musculoskeletal injuries, bone health, and degenerative conditions.",
      color: "green",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      text: "Advanced neurological evaluation and management of brain, spine, and nerve disorders.",
      color: "purple",
    },
    {
      icon: <FaHandHoldingMedical />,
      title: "Dermatology",
      text: "Specialized care for skin health, including acne treatments, screenings, and advanced dermatological procedures.",
      color: "orange",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      text: "Comprehensive healthcare for infants, children, and adolescents, focused on healthy growth and development.",
      color: "cyan",
    },
  ];

  return (
    <div className="app">
      <Navbar />

      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              120deg,
              rgba(18, 40, 76, 0.95),
              rgba(29, 76, 83, 0.75),
              rgba(145, 198, 162, 0.7)
            ),
            url(${heroImage})
          `,
        }}
      >
        <div className="hero-content">
          <div className="badge">
            <span></span>
            OPEN 24/7 FOR EMERGENCIES
          </div>

          <h1>
            Palestine Medical
            <br />
            Complex
          </h1>

          <p>
            Advanced care with trusted specialists. Your health is our priority,
            delivered with compassion and precision in a world-class environment.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Book Appointment</button>
            <button className="outline-btn">Our Specialists</button>
          </div>
        </div>
      </section>

      <main className="main-section">
        <div className="section-header">
          <h2>Our Clinics</h2>
          <p>Manage and browse specialized healthcare departments</p>
        </div>

        <div className="clinics-layout">
          <div className="clinics-grid">
            {clinics.map((clinic, index) => (
              <div className="clinic-card" key={index}>
                <div className={`clinic-icon ${clinic.color}`}>
                  {clinic.icon}
                </div>

                <h3>{clinic.title}</h3>
                <p>{clinic.text}</p>

                <button>View Details</button>
              </div>
            ))}
          </div>

          <div className="ai-card">
            <div className="ai-icon">
              <FaQuestion />
            </div>

            <h2>Not sure which clinic to choose?</h2>

            <p>
              Our advanced AI symptom analyzer can help you identify the right
              specialist based on your symptoms. It's fast, private, and powered
              by medical expertise.
            </p>

            <button>
              Analyze Your Symptoms with AI <HiSparkles />
            </button>

            <small>
              <FaShieldAlt /> Secure & Confidential Analysis
            </small>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2024 Palestine Medical Complex Group. All rights reserved.</p>

        <div>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>

        <p>
          <FaLock /> All health data is encrypted.
        </p>
      </footer>
    </div>
  );
}

export default Home;