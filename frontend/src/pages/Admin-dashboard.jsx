import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/Admin-sidebar";
import "../styles/AdminSidebar.css";

export default function AdminDashboard() {
  const clinics = [
    { name: "General", appointments: 10 },
    { name: "Cardio", appointments: 180 },
    { name: "Peds", appointments: 6 },
    { name: "Ortho", appointments: 500 },
    { name: "Neuro", appointments: 9 },
    { name: "Onco", appointments: 4 },
    { name: "Derm", appointments: 120 },
    { name: "ENT", appointments: 300 },
    { name: "Gastro", appointments: 15 },
    { name: "Uro", appointments: 20 },
  ];
  const [clinicsCount, setClinicsCount] = useState(0);
  useEffect(() => {
    const fetchClinics = async () => {
      const res = await fetch("http://localhost:5001/api/manage-clinics");
      const data = await res.json();

      setClinicsCount(data.length);
    };

    fetchClinics();
  }, []);
  const maxAppointments = Math.max(...clinics.map((c) => c.appointments));
  return (
    <div className="layout">
      <AdminSidebar />
      <div className="content">
        <main className="flex-grow-1 p-4 overflow-auto">
          {/* Header */}
          <div className="mb-4">
            <h3 className="fw-bold mb-1">System Overview</h3>
            <small className="text-muted">
              Welcome back, here's what's happening this month.
            </small>
          </div>

          {/* Cards */}
          <div className="row g-3 mb-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="bi bi-person fs-4 text-primary"></i>
                    <span className="text-success small">+12%</span>
                  </div>
                  <p className="text-muted mb-0">Total Patients</p>
                  <h4>1,284</h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="bi bi-heart-pulse fs-4 text-danger"></i>
                    <span className="text-success small">+5%</span>
                  </div>
                  <p className="text-muted mb-0">Doctors</p>
                  <h4>42</h4>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="bi bi-building fs-4 text-warning"></i>
                    <span className="text-muted small">0%</span>
                  </div>
                  <p className="text-muted mb-0">Clinics</p>
                  <h4>{clinicsCount}</h4>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="bi bi-calendar-check fs-4 text-success"></i>
                    <span className="text-success small">+8%</span>
                  </div>
                  <p className="text-muted mb-0">Appointments (Monthly)</p>
                  <h4>650</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section Placeholder */}
          <div className="card shadow-sm p-4">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h5 className="mb-0">Appointments per Clinic</h5>
                <small className="text-muted">
                  Distribution across departments
                </small>
              </div>

              <select className="form-select w-auto">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>

            {/* Chart */}
            <div
              className="d-flex align-items-end gap-3 border p-3"
              style={{ height: "350px" }}
            >
              {clinics.map((clinic, i) => {
                const heightPercent =
                  (clinic.appointments / maxAppointments) * 100;

                return (
                  <div
                    key={i}
                    className="flex-fill d-flex flex-column justify-content-end align-items-center"
                    style={{ height: "100%" }}
                  >
                    {/* الرقم فوق العمود */}
                    <small className="fw-bold mb-1">
                      {clinic.appointments}
                    </small>

                    {/* هذا هو المهم */}
                    <div
                      className="bg-primary bg-opacity-50 rounded w-100"
                      style={{
                        height: `${heightPercent}%`,
                        minHeight: "10px",
                        transition: "height 0.3s ease",
                      }}
                    ></div>

                    {/* الاسم */}
                    <small className="text-muted mt-1">{clinic.name}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
