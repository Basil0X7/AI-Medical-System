import React from "react";
import AdminSidebar from "../components/Admin-sidebar";
import { Link } from "react-router-dom";
import ClinicImageUpload from "../components/Admin-UploadImage";
import ClinicStatus from "../components/Admin-clinicStatus";
import "../styles/AdminSidebar.css";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaSave,
  FaPlus,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaUsers,
  FaStethoscope,
  FaTimes,
  FaImage,
  FaSearch,
} from "react-icons/fa";

export default function AddClinic() {
  const navigate = useNavigate();
  const location = useLocation();
  const clinic = location.state?.clinic;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    specialty: "",
  });
  useEffect(() => {
    if (clinic) {
      setFormData({
        name: clinic.name || "",
        description: clinic.description || "",
        location: clinic.location || "",
        specialty: clinic.specialty || "",
      });
    }
  }, [clinic]);

  const [workingHours, setWorkingHours] = useState({
    Sunday: { status: "Open", open: "", close: "" },
    Monday: { status: "Open", open: "", close: "" },
    Tuesday: { status: "Open", open: "", close: "" },
    Wednesday: { status: "Open", open: "", close: "" },
    Thursday: { status: "Open", open: "", close: "" },
    Friday: { status: "Closed", open: "", close: "" },
    Saturday: { status: "Closed", open: "", close: "" },
  });
  const days = Object.keys(workingHours);
  return (
    <div className="layout">
      <AdminSidebar />
      <div className="content">
        <div className="container-fluid bg-light min-vh-100 py-4 px-3">
          <div className="d-flex align-items-center gap-2 mb-4 small text-muted">
            {/* الصفحة السابقة */}
            <Link
              to="/manage-clinics"
              className="text-decoration-none text-primary"
              onClick={(e) => {
                e.preventDefault();

                Swal.fire({
                  title: "Discard changes?",
                  text: "All unsaved data will be lost.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#dc3545",
                  cancelButtonColor: "#6c757d",
                  confirmButtonText: "Yes, discard",
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/manage-clinics");
                  }
                });
              }}
            >
              Clinics
            </Link>

            {/* سهم */}
            <FaChevronRight size={12} />

            {/* الصفحة الحالية */}
            <span className="fw-semibold text-dark">
              {clinic ? "Edit Clinic" : "Add New Clinic"}
            </span>
          </div>
          {/* Header */}
          <div className="mb-4">
            <h2 className="fw-bold">
              {clinic ? "Edit Clinic" : "Add New Clinic"}
            </h2>
            <p className="text-muted">
              Register a new medical facility within the hospital management
              system.
            </p>
          </div>

          {/* ============================ */}
          {/* Basic Information */}
          {/* ============================ */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <FaInfoCircle className="me-2 text-primary" />
                Basic Information
              </h5>

              <div className="row g-3">
                {/* Name */}
                <div className="col-md-12">
                  <label className="form-label">Clinic Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="North Wing Cardiology"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Description */}
                <div className="col-md-12">
                  <label className="form-label">Clinic Description</label>
                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Clinic details..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                {/* Row جديد */}
                <div className="row g-3">
                  {/* Clinic Image */}

                  <ClinicImageUpload />
                  {/* ===================== */}
                  <div className="col-md-6 mt-4">
                    {/* Location */}
                    <div className="mb-4">
                      <label className="form-label">Clinic Location</label>

                      <div className="input-group">
                        <span className="input-group-text">
                          <FaMapMarkerAlt />
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Room / Building / Floor"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              location: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mt-3">
                      <ClinicStatus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================ */}
          {/* Doctors + Services */}
          {/* ============================ */}
          <div className="row g-4 mb-4">
            {/* Doctors */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">
                    <FaUsers className="me-2 text-primary" />
                    Doctor Assignment
                  </h5>

                  <label className="form-label">Select Doctors</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaSearch />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select doctors..."
                      />
                    </div>
                  </div>

                  {/* Selected Doctors */}
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-light text-dark p-2">
                      Dr. Emily Stone <FaTimes className="ms-1" />
                    </span>

                    <span className="badge bg-light text-dark p-2">
                      Dr. Michael Chen <FaTimes className="ms-1" />
                    </span>

                    <span className="badge bg-light text-dark p-2">
                      Dr. Sarah Wilson <FaTimes className="ms-1" />
                    </span>
                    <span className="badge bg-light text-dark p-2">
                      Dr. Emily Stone <FaTimes className="ms-1" />
                    </span>
                    <span className="badge bg-light text-dark p-2">
                      Dr. Emily Stone <FaTimes className="ms-1" />
                    </span>
                    <span className="badge bg-light text-dark p-2">
                      Dr. Emily Stone <FaTimes className="ms-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">
                    <FaStethoscope className="me-2 text-primary" />
                    Clinic Specialty
                  </h5>

                  <label className="form-label">Select Specialty</label>

                  <select
                    className="form-select mb-3"
                    value={formData.specialty}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialty: e.target.value,
                      })
                    }
                  >
                    <option>Clinic Specialty...</option>
                    <option>General Consultation</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ============================ */}
          {/* Working Hours */}
          {/* ============================ */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Working Hours</h5>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Day</th>
                      <th>Status</th>
                      <th>Open</th>
                      <th>Close</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Object.keys(workingHours).map((day) => (
                      <tr key={day}>
                        {/* Day */}
                        <td className="fw-semibold">{day}</td>

                        {/* Toggle Switch */}

                        <td>
                          <span
                            onClick={() =>
                              setWorkingHours({
                                ...workingHours,
                                [day]: {
                                  ...workingHours[day],
                                  status:
                                    workingHours[day].status === "Open"
                                      ? "Closed"
                                      : "Open",
                                  open:
                                    workingHours[day].status === "Open"
                                      ? ""
                                      : workingHours[day].open,
                                  close:
                                    workingHours[day].status === "Open"
                                      ? ""
                                      : workingHours[day].close,
                                },
                              })
                            }
                            className={`badge status-badge ${
                              workingHours[day].status === "Open"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {workingHours[day].status}
                          </span>
                        </td>

                        {/* Open Time */}
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            value={workingHours[day].open}
                            disabled={workingHours[day].status === "Closed"}
                            onChange={(e) =>
                              setWorkingHours({
                                ...workingHours,
                                [day]: {
                                  ...workingHours[day],
                                  open: e.target.value,
                                },
                              })
                            }
                          />
                        </td>

                        {/* Close Time */}
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            value={workingHours[day].close}
                            disabled={workingHours[day].status === "Closed"}
                            onChange={(e) =>
                              setWorkingHours({
                                ...workingHours,
                                [day]: {
                                  ...workingHours[day],
                                  close: e.target.value,
                                },
                              })
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-end">
            <button
              className="btn btn-outline-secondary me-3"
              onClick={() => {
                Swal.fire({
                  title: "Discard changes?",
                  text: "All unsaved data will be lost.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#dc3545",
                  cancelButtonColor: "#6c757d",
                  confirmButtonText: "Yes, discard",
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/manage-clinics");
                  }
                });
              }}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary px-4"
              onClick={() => {
                Swal.fire({
                  toast: true,
                  position: "top",
                  icon: "success",
                  title: clinic
                    ? "Update Clinic Successfully"
                    : "Add Clinic Successfully",
                  showConfirmButton: false,
                  timer: 2000,
                }).then(() => {
                  navigate("/manage-clinics");
                });
              }}
            >
              <i class="fa-regular fa-pen-to-square"></i>
              <FaSave className="me-2" />
              {clinic ? "Update Clinic" : "Save Clinic"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
