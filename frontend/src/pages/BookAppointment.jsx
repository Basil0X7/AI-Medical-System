import Navbar from "../components/Navbar";
import "../styles/bookAppointment.css";

function BookAppointment() {
  return (
    <div className="book-page">
      <Navbar />

      <section className="book-header">
        <h1>Book Appointment</h1>
        <p>Choose your clinic, doctor, date, and time to reserve your visit.</p>
      </section>

      <div className="book-container">
        <form className="book-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Select Clinic</label>
              <select>
                <option>Dental Clinic</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Doctor</label>
              <select>
                <option>Dr. Ahmad Saleh</option>
                <option>Dr. Lina Nasser</option>
                <option>Dr. Omar Khaled</option>
                <option>Dr. Sara Yousef</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Appointment Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input type="time" />
            </div>
          </div>

          <div className="form-group">
            <label>Reason / Notes</label>
            <textarea placeholder="Write your symptoms or reason for visit..."></textarea>
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