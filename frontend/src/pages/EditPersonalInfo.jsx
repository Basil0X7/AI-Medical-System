import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSidebar from "../components/Admin-sidebar";
import "../styles/AdminSidebar.css";

export default function EditPersonalInfo() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/100?img=12",
  );

  const [profile, setProfile] = useState({
    fullName: "Alex Rivers",
    role: "Administrator",
    email: "alex.rivers@medadmin.org",
    phone: "+1 (555) 092-4322",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "" ,
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("adminToken");

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/login");
        }, 700);
      }
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (profile.newPassword !== profile.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password mismatch",
        text: "New password and confirm password do not match",
      });
      return;
    }

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Personal information updated successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div
      className="layout bg-light"
      style={{ minHeight: "100vh", overflowY: "auto" }}
    >
      <AdminSidebar />

      <main
        className="py-4 px-4"
        style={{
          flex: 1,
          minWidth: 0,
          maxHeight: "100vh",
          overflowY: "auto",
          paddingBottom: "100px",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <div className="d-flex justify-content-end align-items-center mb-3">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="mb-4">
            <h1 className="fw-bold mb-1">Edit Personal Information</h1>
            <p className="text-muted mb-0">
              Update your professional profile and security settings.
            </p>
          </div>

          <form onSubmit={handleSave}>
            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="mb-4">Profile Picture</h4>

                <div className="d-flex align-items-center gap-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-4"
                    style={{
                      width: "95px",
                      height: "95px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <label className="btn btn-primary px-4 py-2 fw-semibold mb-0">
                      Upload New
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/gif"
                        hidden
                        onChange={handleImageUpload}
                      />
                    </label>

                    <p className="text-muted mt-3 mb-0">
                      JPG, GIF or PNG. Max size of 800K
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="mb-4">Basic Information</h4>

                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      className="form-control form-control-lg rounded-3"
                      value={profile.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Role / Position
                    </label>
                    <input
                      name="role"
                      className="form-control form-control-lg rounded-3"
                      value={profile.role}
                      disabled
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Email Address
                    </label>
                    <input
                      name="email"
                      className="form-control form-control-lg rounded-3"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      className="form-control form-control-lg rounded-3"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="mb-4">🛡️ Change Password</h4>

                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Current Password
                    </label>
                    <input
                      name="currentPassword"
                      type="password"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Current password"
                      value={profile.currentPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6"></div>

                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      New Password
                    </label>
                    <input
                      name="newPassword"
                      type="password"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Min. 8 characters"
                      value={profile.newPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-uppercase">
                      Confirm New Password
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Repeat new password"
                      value={profile.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="d-flex justify-content-end gap-3 pt-3 pb-4">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate("/manage-doctors")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary px-5 py-3 rounded-3 shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
