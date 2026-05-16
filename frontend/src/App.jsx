
import { useState } from "react";
import AdminManageClinics from "./pages/Admin-manageClinics";
import AdminDashboard from "./pages/Admin-dashboard";
import AddClinic from "./pages/Admin-addClinic";

import { Routes, Route } from "react-router-dom";
import AdminManageDoctors from "./pages/Admin-manageDoctors";
import EditPersonalInfo from "./pages/EditPersonalInfo";
import EditDoctor from "./pages/EditDoctor";
function App() {

  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/manage-clinics" element={<AdminManageClinics />} />
      <Route path="/add-clinic/:id?" element={<AddClinic />} />
      <Route path="/manage-doctors" element={<AdminManageDoctors />} />
      <Route path="/profile/edit" element={<EditPersonalInfo />} />
      <Route path="/manage-doctors/edit/:id" element={<EditDoctor />} />
    </Routes>
  );};


export default App;
