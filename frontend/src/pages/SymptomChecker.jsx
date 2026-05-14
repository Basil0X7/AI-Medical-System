import Navbar from "../components/Navbar";
import "../styles/symptomChecker.css";

import {
  FaHeart,
  FaChild,
  FaThermometerHalf,
  FaHeadSideVirus,
  FaQuestionCircle,
  FaCheckCircle,
} from "react-icons/fa";

import { GiStomach, GiBackPain } from "react-icons/gi";

function SymptomChecker() {
  const symptoms = [
    {
      title: "Head",
      text: "Headache, dizziness, vision changes",
      icon: <FaHeadSideVirus />,
      active: false,
    },
    {
      title: "Chest",
      text: "Pain, tightness, palpitations",
      icon: <FaHeart />,
      active: true,
    },
    {
      title: "Limbs",
      text: "Joint pain, muscle weakness",
      icon: <FaChild />,
      active: false,
    },
    {
      title: "Abdomen",
      text: "Stomach ache, digestion, nausea",
      icon: <GiStomach />,
      active: false,
    },
    {
      title: "Back",
      text: "Spine, lower back, stiffness",
      icon: <GiBackPain />,
      active: false,
    },
    {
      title: "General",
      text: "Fever, fatigue, chills, aches",
      icon: <FaThermometerHalf />,
      active: false,
    },
  ];

  return (
    <div className="symptom-page">
      <Navbar />

      <main className="symptom-container">
        <section className="progress-card">
          <div className="progress-top">
            <div>
              <span>ASSESSMENT PROGRESS</span>
              <h3>Step 1: Symptom Selection</h3>
            </div>

            <div className="progress-percent">33% Complete</div>
          </div>

          <div className="progress-bar">
            <div></div>
          </div>

          <p>Tell us about your physical state to get started.</p>
        </section>

        <section className="symptom-title">
          <h1>What symptoms are you experiencing?</h1>

          <p>
            Please select all the areas where you feel discomfort. This helps
            our specialists prepare for your consultation.
          </p>
        </section>

        <section className="symptom-grid">
          {symptoms.map((item, index) => (
            <div
              className={`symptom-card ${item.active ? "active" : ""}`}
              key={index}
            >
              <div className="symptom-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              {item.active && <FaCheckCircle className="check-icon" />}
            </div>
          ))}
        </section>

        <section className="details-section">
          <label>Additional details (optional)</label>

          <textarea placeholder="Describe how you feel in your own words..."></textarea>
        </section>

        <div className="symptom-actions">
          <button className="back-btn">Back to Dashboard</button>

          <button className="continue-btn">Continue →</button>
        </div>

        <div className="help-box">
          <div className="help-icon">
            <FaQuestionCircle />
          </div>

          <div>
            <h4>Need help?</h4>

            <p>
              Our nurse support is available 24/7. <span>Chat now</span>
            </p>
          </div>
        </div>
      </main>

      <footer className="symptom-footer">
        © 2024 HealthSync Clinic Management System. All health data is
        encrypted.
      </footer>
    </div>
  );
}

export default SymptomChecker;