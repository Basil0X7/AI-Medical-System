import Navbar from "../components/Navbar";
import "../styles/bookAppointment.css";
import { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    clinicId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: "",
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
      const dateTime = `${formData.appointmentDate}T${formData.appointmentTime}`;

      await axios.post("http://localhost:5001/api/appointments/create", {
        doctorId: Number(formData.doctorId),
        clinicId: Number(formData.clinicId),
        patientId: 1,
        appointmentDateTime: dateTime,
        status: "Pending",
      });

      alert("Appointment booked successfully");

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        clinicId: "",
        doctorId: "",
        appointmentDate: "",
        appointmentTime: "",
        notes: "",
      });
    } catch (error) {
      console.log(error);
      alert("Booking failed");
    }
  };

  return (
    <div className="book-page">
      <Navbar />

      <section className="book-header">
        <h1>Book Appointment</h1>
        <p>Choose your clinic, doctor, date, and time to reserve your visit.</p>
      </section>

      <div className="book-container">
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Select Clinic</label>
              <select
                name="clinicId"
                value={formData.clinicId}
                onChange={handleChange}
                required
              >
                <option value="">Choose Clinic</option>
                <option value="1">Dental Clinic</option>
                <option value="2">Cardiology</option>
                <option value="3">Orthopedics</option>
                <option value="4">Neurology</option>
                <option value="5">Dermatology</option>
                <option value="6">Pediatrics</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Doctor</label>
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
              >
                <option value="">Choose Doctor</option>
                <option value="1">Dr. Ahmad Saleh</option>
                <option value="2">Dr. Lina Nasser</option>
                <option value="3">Dr. Omar Khaled</option>
                <option value="4">Dr. Sara Yousef</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Reason / Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Write your symptoms or reason for visit..."
            ></textarea>
          </div>

          <button type="submit" className="confirm-btn">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;