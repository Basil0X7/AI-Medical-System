import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSidebar from "../components/Admin-sidebar";
import "../styles/AdminSidebar.css";

const defaultDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    clinic: "Clinic 1",
    specialty: "General Medicine",
    status: "Active",
    img: "https://i.pravatar.cc/40?img=32",
  },
  {
    id: 2,
    name: "Dr. Elena Rodriguez",
    clinic: "Clinic 2",
    specialty: "Cardiology",
    status: "Active",
    img: "https://i.pravatar.cc/40?img=47",
  },
  {
    id: 3,
    name: "Dr. Michael Sterling",
    clinic: "Clinic 3",
    specialty: "Pediatrics",
    status: "Active",
    img: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 4,
    name: "Dr. Jonathan Wu",
    clinic: "Clinic 4",
    specialty: "Orthopedics",
    status: "On Leave",
    img: "https://i.pravatar.cc/40?img=13",
  },
  {
    id: 5,
    name: "Dr. Emily Thorne",
    clinic: "Clinic 5",
    specialty: "Neurology",
    status: "Active",
    img: "https://i.pravatar.cc/40?img=49",
  },
];

export default function AdminManageDoctors() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = JSON.parse(localStorage.getItem("doctors"));

    if (savedDoctors && savedDoctors.length > 0) {
      return savedDoctors;
    }

    localStorage.setItem("doctors", JSON.stringify(defaultDoctors));
    return defaultDoctors;
  });

  const itemsPerPage = 3;

  const filteredDoctors = doctors.filter((doctor) => {
    const term = searchTerm.toLowerCase();

    return (
      doctor.name.toLowerCase().includes(term) ||
      doctor.clinic.toLowerCase().includes(term) ||
      doctor.specialty.toLowerCase().includes(term) ||
      doctor.status.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleDeleteDoctor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This doctor will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);

        setDoctors(updatedDoctors);
        localStorage.setItem("doctors", JSON.stringify(updatedDoctors));
        setCurrentPage(1);

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Doctor deleted successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="layout">
      <AdminSidebar />

      <main className="container py-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <h1 className="fw-bold mb-1">Manage Doctors</h1>
            <p className="text-muted mb-0">
              View and manage all healthcare professionals, administrative
              staff, and clinic assignments from a centralized directory.
            </p>
          </div>

          <button
            className="btn btn-primary px-4 py-2 fw-semibold rounded-3 shadow-sm"
            onClick={() => navigate("/manage-doctors/add")}
          >
            + Add New Doctor
          </button>
        </div>

        <div className="input-group mb-3" style={{ maxWidth: "420px" }}>
          <span className="input-group-text bg-white border-end-0">🔍</span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search by name, specialty, clinic..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr className="text-muted small text-uppercase">
                  <th className="ps-4 py-3">Name</th>
                  <th className="py-3">Specialty</th>
                  <th className="py-3">Clinic Assignment</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 text-end pe-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {paginatedDoctors.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No doctors found
                    </td>
                  </tr>
                ) : (
                  paginatedDoctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td className="ps-4 py-3">
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={doctor.img}
                            alt={doctor.name}
                            className="rounded-circle"
                            style={{
                              width: "42px",
                              height: "42px",
                              objectFit: "cover",
                            }}
                          />
                          <span className="fw-semibold">{doctor.name}</span>
                        </div>
                      </td>

                      <td className="py-3 text-muted">{doctor.specialty}</td>
                      <td className="py-3 text-muted">{doctor.clinic}</td>

                      <td className="py-3">
                        <span
                          className={
                            doctor.status === "Active"
                              ? "badge bg-success-subtle text-success rounded-pill px-3"
                              : "badge bg-warning-subtle text-warning rounded-pill px-3"
                          }
                        >
                          ● {doctor.status}
                        </span>
                      </td>

                      <td className="py-3 text-end pe-4">
                        <button
                          className="btn btn-sm btn-light me-2"
                          onClick={() =>
                            navigate(`/manage-doctors/edit/${doctor.id}`)
                          }
                        >
                          ✎
                        </button>

                        <button
                          className="btn btn-sm btn-light text-danger"
                          onClick={() => handleDeleteDoctor(doctor.id)}
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center px-4 py-3 border-top">
            <span className="text-muted small">
              Showing {paginatedDoctors.length} of {filteredDoctors.length}{" "}
              staff members
            </span>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-light"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ‹
              </button>

              {[...Array(totalPages || 1)].map((_, index) => (
                <button
                  key={index + 1}
                  className={
                    currentPage === index + 1
                      ? "btn btn-sm btn-primary"
                      : "btn btn-sm btn-light"
                  }
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="btn btn-sm btn-light"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
