
import React, { useState } from "react";
import "../styles/profile.css";

export default function ProfileManagement() {
  const [darkMode, setDarkMode] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Jenkins",
    title: "Senior Cardiologist",
    email: "sarah@clinic.com",
    phone: "+1 555 000 1234",
    patients: 1248,
    appointments: 42,
    reports: 12,
    image: "https://i.pravatar.cc/150?img=12",
  });

  const handleEditProfile = () => {
    const newName = prompt("Enter new doctor name:", doctor.name);
    const newEmail = prompt("Enter new email:", doctor.email);
    const newPhone = prompt("Enter new phone:", doctor.phone);

    if (newName || newEmail || newPhone) {

      setDoctor({
        ...doctor,
        name: newName || doctor.name,
        email: newEmail || doctor.email,
        phone: newPhone || doctor.phone,
      });
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Sidebar */}
    

      {/* Main Content */}
      <main className="main">

        {/* Topbar */}
        <header className="topbar">
          <h1>Doctor Profile</h1>

          <button
            className="mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* Profile Card */}
        <section className="profile-card">

          <img src={doctor.image} alt="doctor" />

          <div className="info">
            <h2>{doctor.name}</h2>
            <p className="title">{doctor.title}</p>

            <p>Email: {doctor.email}</p>
            <p>Phone: {doctor.phone}</p>

            <button onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>

        </section>

        {/* Stats */}
        <section className="stats">

          <div className="card">
            <h3>{doctor.patients}</h3>
            <p>Patients</p>
          </div>

          <div className="card">
            <h3>{doctor.appointments}</h3>
            <p>Appointments</p>
          </div>

          <div className="card">
            <h3>{doctor.reports}</h3>
            <p>Reports</p>
          </div>

        </section>

      </main>

    </div>
  );
}