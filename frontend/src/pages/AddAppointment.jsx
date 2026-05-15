
import React, { useState } from "react";
import "../styles/appointment.css";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    patient: "",
    date: "",
    time: "",
    reason: "",
    priority: "routine",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment Saved Successfully!");
  };

  return (
    <div className="appointment-page">

      {/* FORM CARD */}
      <div className="appointment-card">

        <div className="appointment-header">
          <div className="icon">📅</div>
          <div>
            <h2>Schedule Appointment</h2>
            <p>Enter visit details to book a slot</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="appointment-form">

          {/* Patient */}
          <label>Patient</label>
          <select
            name="patient"
            value={formData.patient}
            onChange={handleChange}
            required
          >
            <option value="">Choose patient</option>
            <option value="Robert">Robert Harrison</option>
            <option value="Elena">Elena Rodriguez</option>
            <option value="Marcus">Marcus Chen</option>
          </select>

          {/* Date & Time */}
          <div className="row">
            <div>
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Reason */}
          <label>Reason for Visit</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Describe symptoms..."
            required
          />

          {/* Priority */}
          <div className="priority">
            <label>
              <input
                type="radio"
                name="priority"
                value="routine"
                checked={formData.priority === "routine"}
                onChange={handleChange}
              />
              Routine
            </label>

            <label>
              <input
                type="radio"
                name="priority"
                value="urgent"
                onChange={handleChange}
              />
              Urgent
            </label>
          </div>

          {/* Buttons */}
          <div className="actions">
            <button type="button" className="discard">
              Discard
            </button>

            <button type="submit" className="save">
              Save Appointment
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default AddAppointment;