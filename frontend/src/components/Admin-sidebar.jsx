import React from "react";
import { MdDashboard } from "react-icons/md";
import { BiSolidClinic } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import logo from "../assets/logo-admin.PNG";
import "../styles/AdminSidebar.css";
import { NavLink, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="sidebar d-flex flex-column bg-white border-end p-3">

      {/* Logo Section */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="logo-box text-white rounded d-flex align-items-center justify-content-center">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <div>
          <h6 className="mb-0 fw-bold">Admin Panel</h6>
          <small className="text-muted">AI Medical System</small>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1">
        <ul className="nav flex-column gap-2">

          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link active rounded" : "nav-link text-dark"
            }>
              <MdDashboard /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/manage-clinics" className={({ isActive }) =>
              isActive ? "nav-link active rounded" : "nav-link text-dark"
            }
              onClick={(e) => {
                // إذا أنتِ أصلاً في نفس الصفحة → لا تعمل شيء
                if (location.pathname === "/manage-clinics") {
                  e.preventDefault(); // يمنع أي إعادة تنفيذ
                }
              }}>
              <BiSolidClinic /> Manage Clinics
            </NavLink>
          </li>

          <li>
            <NavLink to="/manage-doctors" className={({ isActive }) =>
              isActive ? "nav-link active rounded" : "nav-link text-dark"
            }>
              <FaUserDoctor /> Manage Doctors
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* User Profile */}
      <div className="border-top pt-3 mt-auto">
        <div className="d-flex align-items-center gap-2 p-2 rounded hover-bg-light">

          <img
            src="https://via.placeholder.com/40"
            alt="user"
            className="rounded-circle"
          />

          <div className="min-w-0">
            <p className="mb-0 fw-bold small">Dr. Sarah Miller</p>
            <small className="text-muted">Chief Surgeon</small>
          </div>

        </div>
      </div>

    </div>
  );
}