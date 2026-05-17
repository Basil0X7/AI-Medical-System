import Navbar from "../components/Navbar";
import "../styles/profile.css";
import { useState } from "react";
import axios from "axios";

function Profile() {
  const [loginEmail, setLoginEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
  });

  const getInitials = () => {
    if (!formData.fullName) return "?";

    return formData.fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:5001/api/users/email/${loginEmail}`
      );

      setUserId(res.data.userId);
      setFormData({
        fullName: res.data.fullName || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        dateOfBirth: res.data.dateOfBirth || "",
        address: res.data.address || "",
      });

      setIsLoggedIn(true);
      alert("Logged in successfully");
    } catch (error) {
      setFormData({
        fullName: "",
        email: loginEmail,
        phone: "",
        dateOfBirth: "",
        address: "",
      });

      setIsLoggedIn(true);
      alert("New user. Complete your information and save.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (userId) {
        await axios.put(
          `http://localhost:5001/api/users/${userId}`,
          formData
        );

        alert("Profile updated successfully");
      } else {
        const res = await axios.post(
          "http://localhost:5001/api/users/create",
          formData
        );

        setUserId(res.data.user.userId);
        alert("Profile created successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to save profile");
    }
  };

  return (
    <div className="profile-page">
      <Navbar />

      <section className="profile-header">
        <h1>Edit Personal Information</h1>
        <p>Login with your email and update your personal details.</p>
      </section>

      <div className="profile-container">
        {!isLoggedIn ? (
          <form className="profile-card" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email to login"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="save-profile-btn">
              Login
            </button>
          </form>
        ) : (
          <form className="profile-card" onSubmit={handleSave}>
            <div className="profile-avatar">{getInitials()}</div>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Address</label>

              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="save-profile-btn">
              Save Changes
            </button>

            <p className="confirmation-message">
              Your profile will be saved in the database.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;