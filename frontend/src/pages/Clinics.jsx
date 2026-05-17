import { Link } from "react-router-dom";
import "../styles/clinics.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [clinics, setClinics] = useState([]);
  const [search, setSearch] = useState("");

  const icons = {
    blue: <FaTooth />,
    red: <FaHeartbeat />,
    green: <FaBone />,
    purple: <FaBrain />,
    orange: <FaHandHoldingMedical />,
    cyan: <FaBaby />,
  };

  const getClinics = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/clinics");
      setClinics(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClinics();
  }, []);

  const filteredClinics = clinics.filter(
    (clinic) =>
      clinic.name.toLowerCase().includes(search.toLowerCase()) ||
      clinic.specialty.toLowerCase().includes(search.toLowerCase())
  );

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="clinics-container">
        {filteredClinics.length === 0 ? (
          <h2>No clinic found</h2>
        ) : (
          filteredClinics.map((clinic) => (
            <div className="clinic-box" key={clinic.clinicId}>
              <div className="clinic-top">
                <div className={`clinic-emoji ${clinic.color}`}>
                  {icons[clinic.color]}
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
          ))
        )}
      </section>
    </div>
  );
}

export default Clinics;