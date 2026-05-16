import React from "react";
import AdminSidebar from "../components/Admin-sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/AdminSidebar.css";
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
  const [clinics, setClinics] = useState([]);

  const fetchClinics = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/manage-clinics");

      const data = await response.json();

      setClinics(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchClinics();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredClinics = clinics.filter(
    (clinic) =>
      (clinic.clinicName || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (clinic.clinicSpecialty || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (clinic.clinicLocation || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (clinic.clinicStatus || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClinics = filteredClinics.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredClinics.length / itemsPerPage);

  // تغيير لون الحالة
  const getStatusBadge = (status) => {
    return status === "Active"
      ? "badge bg-success"
      : status === "Not Active"
        ? "badge bg-danger"
        : "badge bg-warning text-dark";
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/manage-clinics/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      Swal.fire({
        toast: true,
        position: "top",
        icon: "success",
        title: "Deleted successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      // تحديث القائمة
      setClinics((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    }
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
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
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
                  {currentClinics.map((clinic) => (
                    <tr key={clinic.id}>
                      <td className="fw-semibold">{clinic.clinicName}</td>
                      <td>{clinic.clinicSpecialty}</td>
                      <td>{clinic.clinicLocation}</td>

                      {/* الحالة */}
                      <td>
                        <span className={getStatusBadge(clinic.clinicStatus)}>
                          {clinic.clinicStatus}
                        </span>
                      </td>

                      {/* الأزرار */}
                      <td className="text-end">
                        <Link
                          to={`/add-clinic/${clinic.id}`}
                          state={{ clinic }}
                          className="btn btn-sm btn-outline-primary me-2"
                        >
                          <FaEdit />
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => {
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
                                handleDelete(clinic.id);
                              }
                            });
                          }}
                        >
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
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, filteredClinics.length)} of{" "}
                {filteredClinics.length} clinics
              </small>

              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <FaChevronLeft />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm me-2 ${
                      currentPage === index + 1
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="btn btn-sm btn-outline-secondary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
