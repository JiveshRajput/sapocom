import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import Footer from "../Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import DeleteModal from "@/components/modals/DeleteModal";
import JobModal from "@/components/modals/JobModal";

function AdminLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Loader />
      <DeleteModal />
      <JobModal />
      <AdminNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      {showSidebar && <AdminSidebar showSidebar={showSidebar} />}
      <main>{children}</main>
    </>
  );
}

export default AdminLayout;
