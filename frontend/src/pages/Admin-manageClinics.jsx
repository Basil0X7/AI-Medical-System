import React from "react";
import AdminSidebar from '../components/Admin-sidebar';
import { Link } from "react-router-dom";
import '../styles/AdminSidebar.css';
import Swal from "sweetalert2";
import {
    FaSearch,
    FaPlus,
    FaEdit,
    FaTrash,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

export default function AdminManageClinics() {
    const clinics = [
        {
            id: 1,
            name: "City General Cardiology",
            specialty: "Cardiology",
            location: "Building A, Floor 3",
            status: "Active",
        },
        {
            id: 2,
            name: "Metropolitan Pediatrics",
            specialty: "Pediatrics",
            location: "Building B, Floor 1",
            status: "Active",
        },
        {
            id: 3,
            name: "Westside Orthopedics",
            specialty: "Orthopedics",
            location: "Building C, Floor 2",
            status: "Maintenance",
        },
        {
            id: 4,
            name: "Downtown Neurology",
            specialty: "Neurology",
            location: "Building A, Floor 4",
            status: "Active",
        },
        {
            id: 5,
            name: "Vision Care Center",
            specialty: "Ophthalmology",
            location: "Building D, Floor 1",
            status: "Active",
        },
    ];

    // تغيير لون الحالة
    const getStatusBadge = (status) => {
        return status === "Active"
            ? "badge bg-success"
            : "badge bg-warning text-dark";
    };
    return (
        <div className="layout">
            <AdminSidebar />
            <div className="content">
                <div className="container-fluid bg-light min-vh-100 p-4">

                    {/* عنوان الصفحة */}
                    <div className="mb-4">
                        <h2 className="fw-bold">Manage Clinics</h2>
                        <p className="text-muted">
                            Directory and status monitoring of all medical facilities.
                        </p>
                    </div>

                    {/* البحث + زر الإضافة */}
                    <div className="row g-3 mb-4">

                        {/* Search */}
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FaSearch />
                                </span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search clinic..."
                                />
                            </div>
                        </div>

                        {/* Add Button */}
                        <div className="col-md-6 text-md-end">
                            <Link to="/add-clinic" className="btn btn-primary">
                                <FaPlus className="me-2" />
                                Add New Clinic
                            </Link>
                        </div>
                    </div>

                    {/* الجدول */}
                    <div className="card border-0 shadow-sm">

                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">

                                {/* رأس الجدول */}
                                <thead className="table-light">
                                    <tr>
                                        <th>Clinic Name</th>
                                        <th>Specialty</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>

                                {/* محتوى الجدول */}
                                <tbody>
                                    {clinics.map((clinic) => (
                                        <tr key={clinic.id}>
                                            <td className="fw-semibold">{clinic.name}</td>
                                            <td>{clinic.specialty}</td>
                                            <td>{clinic.location}</td>

                                            {/* الحالة */}
                                            <td>
                                                <span className={getStatusBadge(clinic.status)}>
                                                    {clinic.status}
                                                </span>
                                            </td>

                                            {/* الأزرار */}
                                            <td className="text-end">
                                                <button className="btn btn-sm btn-outline-primary me-2">
                                                    <FaEdit />
                                                </button>

                                                <button className="btn btn-sm btn-outline-danger" onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "This clinic will be deleted permanently!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#dc3545",
                                                        cancelButtonColor: "#6c757d",
                                                        confirmButtonText: "Yes, delete it!",
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire({
                                                                toast: true,
                                                                position: "top",
                                                                icon: "success",
                                                                title: "Clinic deleted successfully",
                                                                showConfirmButton: false,
                                                                timer: 2000,
                                                            });
                                                        }
                                                    });
                                                }}>
                                                    <FaTrash />

                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="card-footer bg-white d-flex justify-content-between align-items-center">

                            <small className="text-muted">
                                Showing 1 to 5 of 24 clinics
                            </small>

                            <div>
                                <button className="btn btn-sm btn-outline-secondary me-2">
                                    <FaChevronLeft />
                                </button>

                                <button className="btn btn-sm btn-primary me-2">1</button>

                                <button className="btn btn-sm btn-outline-secondary me-2">
                                    2
                                </button>

                                <button className="btn btn-sm btn-outline-secondary me-2">
                                    3
                                </button>

                                <button className="btn btn-sm btn-outline-secondary">
                                    <FaChevronRight />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}