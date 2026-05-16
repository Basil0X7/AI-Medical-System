import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSidebar from "../components/Admin-sidebar";
import "../styles/AdminSidebar.css";

const defaultWorkingHours = [
  {
    day: "Monday",
    shift: "Morning Shift",
    start: "09:00",
    end: "17:00",
    active: true,
  },
  {
    day: "Tuesday",
    shift: "Morning Shift",
    start: "09:00",
    end: "17:00",
    active: true,
  },
  {
    day: "Wednesday",
    shift: "Morning Shift",
    start: "09:00",
    end: "17:00",
    active: true,
  },
  {
    day: "Thursday",
    shift: "Evening Shift",
    start: "14:00",
    end: "22:00",
    active: true,
  },
  {
    day: "Friday",
    shift: "Morning Shift",
    start: "09:00",
    end: "17:00",
    active: true,
  },
  { day: "Saturday", shift: "", start: "", end: "", active: false },
];

export default function EditDoctor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [doctor, setDoctor] = useState(() => {
    const savedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const selectedDoctor = savedDoctors.find((doc) => doc.id === Number(id));

    return {
      name: selectedDoctor?.name || "",
      email: selectedDoctor?.email || "",
      phone: selectedDoctor?.phone || "",
      license: selectedDoctor?.license || "",
      specialty: selectedDoctor?.specialty || "",
      clinic: selectedDoctor?.clinic || "",
      status: selectedDoctor?.status || "Active",
      workingHours: selectedDoctor?.workingHours || defaultWorkingHours,
      img: selectedDoctor?.img || "https://i.pravatar.cc/40",
    };
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkingHourChange = (index, field, value) => {
    const updatedHours = [...doctor.workingHours];
    updatedHours[index][field] = value;

    setDoctor({
      ...doctor,
      workingHours: updatedHours,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const savedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    const updatedDoctors = savedDoctors.map((doc) =>
      doc.id === Number(id) ? { ...doc, ...doctor } : doc,
    );

    localStorage.setItem("doctors", JSON.stringify(updatedDoctors));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Doctor updated successfully",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
       navigate("/manage-doctors");
    }, 800);
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
          paddingBottom: "120px",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-2 small">
              <span
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/manage-doctors")}
              >
                Manage Doctors
              </span>
              <span className="text-muted">›</span>
              <span className="fw-semibold text-dark">Edit Doctor #{id}</span>
            </div>

            <h1 className="fw-bold mb-1">Edit Doctor</h1>
            <p className="text-muted mb-0">
              Update doctor professional profile and working hours.
            </p>
          </div>

          <form onSubmit={handleSave}>
            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-header bg-white py-3 fw-semibold">
                👤 Personal & Contact Information
              </div>

              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      name="name"
                      value={doctor.name}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      name="email"
                      value={doctor.email}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="jane.smith@hospital.com"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      name="phone"
                      value={doctor.phone}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Identity Number / License ID
                    </label>
                    <input
                      name="license"
                      value={doctor.license}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="LIC-987654321"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-header bg-white py-3 fw-semibold">
                🏥 Professional Details
              </div>

              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Specialization</label>
                    <input
                      name="specialty"
                      value={doctor.specialty}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter specialization"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Assigned Clinic</label>
                    <input
                      name="clinic"
                      value={doctor.clinic}
                      onChange={handleChange}
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter assigned clinic"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-header bg-white py-3 fw-semibold">
                🛡️ Account Security & Status
              </div>

              <div className="card-body p-4">
                <div className="row g-4 align-items-end">
                  <div className="col-md-6">
                    <label className="form-label">Temporary Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3"
                      value="12345678"
                      readOnly
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label d-block">Initial Status</label>

                    <div className="d-flex gap-4 align-items-center">
                      <label className="d-flex gap-2 align-items-center">
                        <input
                          type="radio"
                          name="status"
                          value="Active"
                          checked={doctor.status === "Active"}
                          onChange={handleChange}
                        />
                        Active
                      </label>

                      <label className="d-flex gap-2 align-items-center">
                        <input
                          type="radio"
                          name="status"
                          value="On Leave"
                          checked={doctor.status === "On Leave"}
                          onChange={handleChange}
                        />
                        On Leave
                      </label>

                      <label className="d-flex gap-2 align-items-center">
                        <input
                          type="radio"
                          name="status"
                          value="Inactive"
                          checked={doctor.status === "Inactive"}
                          onChange={handleChange}
                        />
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="card border shadow-sm rounded-4 mb-4">
              <div className="card-header bg-white py-3 fw-semibold">
                🕘 Working Hours
              </div>

              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="table-light text-muted small text-uppercase">
                    <tr>
                      <th className="ps-4">Day</th>
                      <th>Shift Type</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th className="text-end pe-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {doctor.workingHours.map((item, index) => (
                      <tr key={item.day}>
                        <td className="ps-4">{item.day}</td>

                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={item.shift}
                            placeholder="-"
                            disabled={!item.active}
                            onChange={(e) =>
                              handleWorkingHourChange(
                                index,
                                "shift",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        <td>
                          <input
                            type="time"
                            className="form-control"
                            value={item.start}
                            disabled={!item.active}
                            onChange={(e) =>
                              handleWorkingHourChange(
                                index,
                                "start",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        <td>
                          <input
                            type="time"
                            className="form-control"
                            value={item.end}
                            disabled={!item.active}
                            onChange={(e) =>
                              handleWorkingHourChange(
                                index,
                                "end",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        <td className="text-end pe-4">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={item.active}
                            onChange={(e) =>
                              handleWorkingHourChange(
                                index,
                                "active",
                                e.target.checked,
                              )
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="d-flex justify-content-end gap-3 border-top pt-4 pb-4">
              <button
                type="button"
                className="btn btn-outline-secondary px-5 py-2 rounded-3"
                onClick={() => navigate("/manage-doctors")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-3 shadow-sm"
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
