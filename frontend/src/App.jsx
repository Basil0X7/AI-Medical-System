import { useState } from 'react'
import AdminManageClinics from './pages/Admin-manageClinics';
import AdminDashboard from './pages/Admin-dashboard';
import AddClinic from "./pages/Admin-addClinic";
import { Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/manage-clinics" element={<AdminManageClinics />} />
      <Route path="/add-clinic" element={<AddClinic />} />
    </Routes>
  )
}

export default App;
