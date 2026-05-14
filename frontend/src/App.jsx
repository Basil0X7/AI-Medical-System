import AdminManageClinics from "./pages/Admin-manageClinics";
import AdminDashboard from "./pages/Admin-dashboard";
import AddClinic from "./pages/Admin-addclinic";
import Home from "./pages/Home";
import Clinics from "./pages/Clinics";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import SymptomChecker from "./pages/SymptomChecker";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/manage-clinics" element={<AdminManageClinics />} />
      <Route path="/add-clinic" element={<AddClinic />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/symptom-checker" element={<SymptomChecker />} />
    </Routes>
  );
}

export default App;