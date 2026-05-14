import Navbar from "../components/Navbar";
import "../styles/appointments.css";

import {
  FaCalendarAlt,
  FaClock,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

function Appointments() {
  const appointments = [
    {
      id: 1,
      clinic: "Dental Clinic",
      doctor: "Dr. Ahmad Saleh",
      date: "2026-05-20",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      clinic: "Cardiology",
      doctor: "Dr. Lina Nasser",
      date: "2026-05-23",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      clinic: "Dermatology",
      doctor: "Dr. Sara Yousef",
      date: "2026-05-28",
      time: "09:00 AM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="appointments-page">
      <Navbar />

      <section className="appointments-header">
        <h1>My Appointments</h1>

        <p>View and manage your upcoming medical appointments.</p>
      </section>

      <div className="appointments-container">
        {appointments.map((item) => (
          <div className="appointment-card" key={item.id}>
            <div className="appointment-info">
              <h3>{item.clinic}</h3>

              <p>{item.doctor}</p>
            </div>

            <div className="appointment-details">
              <span>
                <FaCalendarAlt />
                {item.date}
              </span>

              <span>
                <FaClock />
                {item.time}
              </span>

              <span className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </div>

            <div className="appointment-actions">
              <button className="edit-btn">
                <FaEdit />
                Edit
              </button>

              <button className="cancel-btn">
                <FaTrashAlt />
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;