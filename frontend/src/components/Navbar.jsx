import { Link } from "react-router-dom";
import { FaBriefcaseMedical, FaBell, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Link to="/" className="logo">
  <FaBriefcaseMedical className="medical-logo" />

  <span>AI Medical System</span>
       </Link>

       
      </Link>

      <div className="nav-links">
        <Link to="/clinics">Clinics</Link>

        <Link to="/appointments">Appointments</Link>

        <Link to="/symptom-checker">Symptom Checker</Link>

        <Link to="/contact">Contact</Link>

        

        <Link to="/profile" className="nav-btn profile-btn">
          <FaUser />
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;