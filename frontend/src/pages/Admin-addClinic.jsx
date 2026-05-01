import React from "react";
import AdminSidebar from '../components/Admin-sidebar';
import { Link } from "react-router-dom";
import ClinicImageUpload from "../components/Admin-UploadImage";
import ClinicStatus from "../components/Admin-clinicStatus";
import '../styles/AdminSidebar.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


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
} from "react-icons/fa";



export default function AddClinic() {
    const navigate = useNavigate();
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
                            Create New Clinic
                        </span>

                    </div>
                    {/* Header */}
                    <div className="mb-4">
                        <h2 className="fw-bold">Add New Clinic</h2>
                        <p className="text-muted">
                            Register a new medical facility within the hospital management system.
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
                                    />
                                </div>

                                {/* Description */}
                                <div className="col-md-12">
                                    <label className="form-label">Clinic Description</label>
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        placeholder="Clinic details..."
                                    ></textarea>
                                </div>

                                {/* Row جديد */}
                                <div className="row g-3">

                                    {/* ===================== */}
                                    {/* الصورة على الشمال */}
                                    {/* ===================== */}


                                    {/* Clinic Image */}


                                    <ClinicImageUpload />


                                    {/* ===================== */}
                                    {/* الموقع + الحالة على اليمين */}
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

                                    <select className="form-select mb-3">
                                        <option>Choose doctors...</option>
                                        <option>Dr. Emily Stone</option>
                                        <option>Dr. Michael Chen</option>
                                        <option>Dr. Sarah Wilson</option>
                                    </select>

                                    {/* Selected Doctors */}
                                    <div className="d-flex flex-wrap gap-2">

                                        <span className="badge bg-light text-dark p-2">
                                            Dr. Emily Stone <FaTimes className="ms-1" />
                                        </span>

                                        <span className="badge bg-light text-dark p-2">
                                            Dr. Michael Chen <FaTimes className="ms-1" />
                                        </span>

                                        <span className="badge bg-light text-dark p-2">
                                            Dr. Sarah Wilson <FaTimes className="ms-1" />
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">

                                    <h5 className="fw-bold mb-4">
                                        <FaStethoscope className="me-2 text-primary" />
                                        Clinic Services
                                    </h5>

                                    <label className="form-label">Add Service</label>

                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Echocardiogram"
                                        />

                                        <button className="btn btn-primary">
                                            <FaPlus />
                                        </button>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2">

                                        <span className="badge bg-primary">
                                            General Consultation
                                        </span>

                                        <span className="badge bg-primary">
                                            Blood Tests
                                        </span>

                                        <span className="badge bg-primary">
                                            X-Ray
                                        </span>

                                    </div>

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

                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                                            (day, index) => (
                                                <tr key={index}>
                                                    <td>{day}</td>
                                                    <td>
                                                        <span className="badge bg-success">Open</span>
                                                    </td>
                                                    <td>
                                                        <input type="time" className="form-control" />
                                                    </td>
                                                    <td>
                                                        <input type="time" className="form-control" />
                                                    </td>
                                                </tr>
                                            )
                                        )}

                                        {["Saturday", "Sunday"].map((day, index) => (
                                            <tr key={index}>
                                                <td>{day}</td>
                                                <td>
                                                    <span className="badge bg-secondary">Closed</span>
                                                </td>
                                                <td>
                                                    <input
                                                        type="time"
                                                        className="form-control"
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="time"
                                                        className="form-control"
                                                        disabled
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

                        <button className="btn btn-outline-secondary me-3" onClick={() => {
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
                        }}>
                            Cancel
                        </button>

                        <button className="btn btn-primary px-4" onClick={() => {
                            Swal.fire({
                                toast: true,
                                position: "top",
                                icon: "success",
                                title: "Clinic added successfully",
                                showConfirmButton: false,
                                timer: 2000,
                            }).then(() => {
                                navigate("/manage-clinics");
                            });
                        }}>
                            <FaSave className="me-2" />
                            Save Clinic
                        </button>

                    </div>
                </div>
            </div>
        </div >
    );
}