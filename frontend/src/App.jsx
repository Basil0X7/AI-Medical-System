import { Routes, Route } from "react-router-dom";

import AdminLayout from "./layout/AdminLayout";

import AdminDashboard from "./pages/Admin-dashboard";
import AdminManageClinics from "./pages/Admin-manageClinics";
import AddClinic from "./pages/Admin-addClinic";
import ScheduleManagement from "./pages/ScheduleManagement";
import PatientManagement from "./pages/PatientManagement";
import ProfileManagement from "./pages/ProfileManagement";
import AddAppointment from "./pages/AddAppointment";
import WriteMedicalReport from "./pages/WriteMedicalReport";

function App() {
  return (
    <Routes>

      <Route element={<AdminLayout />}>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/manage-clinics" element={<AdminManageClinics />} />
        <Route path="/add-clinic" element={<AddClinic />} />
        <Route path="/schedule" element={<ScheduleManagement />} />
        <Route path="/patients" element={<PatientManagement />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route path="/add-appointment" element={<AddAppointment />} />
        <Route path="/write-report" element={<WriteMedicalReport />} />
      </Route>

    </Routes>
  );
}

export default App;