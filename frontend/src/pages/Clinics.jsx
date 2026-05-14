import { Link } from "react-router-dom";
import "../styles/clinics.css";
import Navbar from "../components/Navbar";

import {
  FaTooth,
  FaHeartbeat,
  FaBone,
  FaBrain,
  FaHandHoldingMedical,
  FaBaby,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Clinics() {
  const clinics = [
    {
      id: 1,
      icon: <FaTooth />,
      name: "Dental Clinic",
      specialty: "Dentistry",
      location: "First Floor - Room 101",
      description:
        "Specialized oral health care including preventative, restorative, and cosmetic dentistry.",
      color: "blue",
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      name: "Cardiology",
      specialty: "Heart Care",
      location: "Second Floor - Room 205",
      description:
        "Diagnosis and treatment for heart conditions and vascular diseases.",
      color: "red",
    },
    {
      id: 3,
      icon: <FaBone />,
      name: "Orthopedics",
      specialty: "Bone & Joints",
      location: "Ground Floor - Room 008",
      description:
        "Care for musculoskeletal injuries, bone health, and degenerative conditions.",
      color: "green",
    },
    {
      id: 4,
      icon: <FaBrain />,
      name: "Neurology",
      specialty: "Brain & Nerves",
      location: "Third Floor - Room 302",
      description:
        "Neurological evaluation and management of brain, spine, and nerve disorders.",
      color: "purple",
    },
    {
      id: 5,
      icon: <FaHandHoldingMedical />,
      name: "Dermatology",
      specialty: "Skin Care",
      location: "First Floor - Room 112",
      description:
        "Care for skin health, acne treatments, screenings, and dermatological procedures.",
      color: "orange",
    },
    {
      id: 6,
      icon: <FaBaby />,
      name: "Pediatrics",
      specialty: "Children Health",
      location: "Second Floor - Room 215",
      description:
        "Healthcare for infants, children, and adolescents focused on healthy development.",
      color: "cyan",
    },
  ];

  return (
    <div className="clinics-page">
      <Navbar />

      <section className="clinics-hero">
        <h1>Available Clinics</h1>

        <p>
          Browse our specialized medical departments and choose the clinic that
          fits your needs.
        </p>

        <input
          type="text"
          placeholder="Search by clinic name or specialty..."
        />
      </section>

      <section className="clinics-container">
        {clinics.map((clinic) => (
          <div className="clinic-box" key={clinic.id}>
            <div className="clinic-top">
              <div className={`clinic-emoji ${clinic.color}`}>
                {clinic.icon}
              </div>

              <div>
                <h3>{clinic.name}</h3>

                <p>{clinic.specialty}</p>
              </div>
            </div>

            <p className="clinic-description">{clinic.description}</p>

            <div className="clinic-location">
              <FaMapMarkerAlt />
              {clinic.location}
            </div>

            <Link to="/book-appointment" className="book-link">
              Book Appointment
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Clinics;