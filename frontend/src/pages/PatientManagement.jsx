
import "../styles/patient.css";

export default function PatientManagement() {
  return (
    <div className="patient-layout">

   
      {/* Main */}
      <main className="main">

        {/* Top Bar */}
        <header className="topbar">
          <input placeholder="Search patient name, ID, or phone..." />

          <div className="doctor-info">
            <div>
              <h4>Dr. Sarah Jenkins</h4>
              <span>Senior Cardiologist</span>
            </div>
            <div className="avatar">👩‍⚕️</div>
          </div>
        </header>

        {/* Title */}
        <section className="header">
          <div>
            <h2>Patient Directory</h2>
            <p>Manage and access patient records</p>
          </div>

          <div className="actions">
            <button>Filter</button>
            <button className="primary">+ New Patient</button>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="card">
            <h4>Total Patients</h4>
            <p>1248</p>
          </div>
          <div className="card">
            <h4>Active Cases</h4>
            <p>42</p>
          </div>
          <div className="card">
            <h4>Pending Reports</h4>
            <p>12</p>
          </div>
        </section>

        {/* Table */}
        <section className="table-container">
          <h3>Recent Patients</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>James Robertson</td>
                <td>#PC-4421</td>
                <td>42</td>
                <td>+1 555 234 8890</td>
                <td>Oct 12</td>
                <td className="stable">Stable</td>
                <td><button>View</button></td>
              </tr>

              <tr>
                <td>Alice Cunningham</td>
                <td>#PC-8892</td>
                <td>29</td>
                <td>+1 555 112 4040</td>
                <td>Oct 15</td>
                <td className="critical">Critical</td>
                <td><button>View</button></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="footer">
          System Status: Optimal | v4.2.1
        </footer>

      </main>
    </div>
  );
}