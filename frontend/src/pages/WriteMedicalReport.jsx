
import React from "react";
import "../styles/report.css";
export default function WriteMedicalReport() {
  return (
    <div className="report-page">


      {/* Main */}
      <main className="main">

        {/* Topbar */}
        <header className="topbar">
          <input type="text" placeholder="Search patient files..." />

          <div className="doctor-info">
            <img
              src="https://via.placeholder.com/40"
              alt="doctor"
            />
            <div>
              <p>Dr. James Wilson</p>
              <span>Cardiologist</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container">

          {/* Title */}
          <div className="header">
            <div>
              <p className="breadcrumb">Patients / Sarah Jenkins / New Report</p>
              <h2>Create Medical Report</h2>
            </div>
            <div className="date">
              <p>Report Date</p>
              <h3>October 24, 2023</h3>
            </div>
          </div>

          {/* Form */}
          <form className="report-form">

            <div className="grid">

              {/* Patient Card */}
              <aside className="patient-card">
                <div className="patient-info">
                  <div className="avatar">SJ</div>
                  <div>
                    <h3>Sarah Jenkins</h3>
                    <p>ID: PX-88291-B</p>
                  </div>
                </div>

                <div className="details">
                  <p><b>Age:</b> 34 / Female</p>
                  <p><b>Blood:</b> O+</p>
                  <p><b>Last Visit:</b> Aug 12, 2023</p>
                </div>
              </aside>

              {/* Form Fields */}
              <section className="form-section">

                <label>Diagnosis</label>
                <input defaultValue="PSVT" />

                <label>Clinical Notes</label>
                <textarea defaultValue="Patient has tachycardia during exertion..." />

                <label>Treatment Plan</label>
                <input defaultValue="Metoprolol 25mg twice daily" />

                <div className="options">
                  <label>
                    <input type="checkbox" /> Attach lab results
                  </label>

                  <label>
                    <input type="checkbox" defaultChecked /> Share with patient
                  </label>
                </div>

              </section>
            </div>

            {/* Buttons */}
            <div className="actions">
              <button type="button" className="draft">Save Draft</button>
              <button type="submit" className="save">Save Report</button>
            </div>

          </form>

        </div>
      </main>

    </div>
  );
}