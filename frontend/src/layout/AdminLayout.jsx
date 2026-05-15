import React from "react";
import AdminSidebar from "../components/Admin-sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
