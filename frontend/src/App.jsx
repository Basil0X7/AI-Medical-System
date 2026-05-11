//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import AdminManageDoctors from "./pages/Admin-manageDoctors";
import AddDoctor from "./pages/AddDoctor";
import EditPersonalInfo from "./pages/EditPersonalInfo";
import EditDoctor from "./pages/EditDoctor";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* الصفحة الرئيسية */}
      <Route path="/" element={<AdminManageDoctors />} />

      <Route path="/manage-doctors" element={<AdminManageDoctors />} />
      <Route path="/manage-doctors/add" element={<AddDoctor />} />
      <Route path="/profile/edit" element={<EditPersonalInfo />} />
      <Route path="/manage-doctors/edit/:id" element={<EditDoctor />} />
      <Route path="/profile/edit" element={<EditPersonalInfo />} />
    </Routes>
  );
}

export default App;
