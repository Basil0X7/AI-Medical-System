import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/appointments.css";

import {
  FaCalendarAlt,
  FaClock,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const clinics = {
    1: "Dental Clinic",
    2: "Cardiology",
    3: "Orthopedics",
    4: "Neurology",
    5: "Dermatology",
    6: "Pediatrics",
  };

  const doctors = {
    1: "Dr. Ahmad Saleh",
    2: "Dr. Lina Nasser",
    3: "Dr. Omar Khaled",
    4: "Dr. Sara Yousef",
  };

  const getAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5001/api/appointments"
      );

      setAppointments(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    try {

      await axios.delete(
        `http://localhost:5001/api/appointments/${id}`
      );

      getAppointments();

    } catch (error) {
      console.log(error);
    }
  };

  const editAppointment = async (item) => {

    const newDate = prompt(
      "Enter new date and time",
      item.appointmentDateTime.slice(0,16)
    );

    if (!newDate) return;

    try {

      await axios.put(
        `http://localhost:5001/api/appointments/${item.appointmentId}`,
        {
          doctorId: item.doctorId,
          clinicId: item.clinicId,
          patientId: item.patientId,
          appointmentDateTime: newDate,
          status: item.status,
        }
      );

      getAppointments();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="appointments-page">

      <Navbar />

      <section className="appointments-header">
        <h1>My Appointments</h1>

        <p>
          View and manage your upcoming
          medical appointments.
        </p>
      </section>

      <div className="appointments-container">

        {appointments.length === 0 ? (

          <p>No appointments found.</p>

        ) : (

          appointments.map((item) => (

            <div
              className="appointment-card"
              key={item.appointmentId}
            >

              <div className="appointment-info">

                <h3>
                  {clinics[item.clinicId]}
                </h3>

                <p>
                  {doctors[item.doctorId]}
                </p>

              </div>

              <div className="appointment-details">

                <span>
                  <FaCalendarAlt />

                  {new Date(
                    item.appointmentDateTime
                  ).toLocaleDateString()}
                </span>

                <span>

                  <FaClock />

                  {new Date(
                    item.appointmentDateTime
                  ).toLocaleTimeString()}

                </span>

                <span
                  className={`status ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>

              </div>

              <div className="appointment-actions">

                <button
                  className="edit-btn"
                  onClick={() =>
                    editAppointment(item)
                  }
                >

                  <FaEdit />
                  Edit

                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    deleteAppointment(
                      item.appointmentId
                    )
                  }
                >

                  <FaTrashAlt />
                  Cancel

                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Appointments;