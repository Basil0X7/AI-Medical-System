import React from "react";

export default function ClinicStatus({ status, setStatus }) {
  return (
    <div>
      {/* Title */}
      <label className="form-label mb-2">Clinic Status</label>

      {/* Container */}
      <div className="bg-light rounded-3 p-1 d-flex gap-1 w-100">
        {/* Active */}
        <button
          type="button"
          onClick={() => setStatus("Active")}
          className={`btn flex-fill ${
            status === "Active"
              ? "btn-white shadow-sm border text-primary fw-semibold"
              : "btn-light text-muted"
          }`}
        >
          Active
        </button>

        {/* Maintenance */}
        <button
          type="button"
          onClick={() => setStatus("Maintenance")}
          className={`btn flex-fill ${
            status === "Maintenance"
              ? "btn-white shadow-sm border text-warning fw-semibold"
              : "btn-light text-muted"
          }`}
        >
          Maintenance
        </button>

        {/* Not Active */}
        <button
          type="button"
          onClick={() => setStatus("Not Active")}
          className={`btn flex-fill ${
            status === "Not Active"
              ? "btn-white shadow-sm border text-danger fw-semibold"
              : "btn-light text-muted"
          }`}
        >
          Not Active
        </button>
      </div>
    </div>
  );
}
