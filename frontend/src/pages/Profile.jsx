import Navbar from "../components/Navbar";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <Navbar />

      <section className="profile-header">
        <h1>Edit Personal Information</h1>
        <p>Update your account details and keep your information accurate.</p>
      </section>

      <div className="profile-container">
        <form className="profile-card">
          <div className="profile-avatar">BH</div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="Batool Hanani" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" defaultValue="batoolhanani157@gmail.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address"></textarea>
          </div>

          <button type="submit" className="save-profile-btn">
            Save Changes
          </button>

          <p className="confirmation-message">
            Changes will be saved and a confirmation message will appear.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Profile;