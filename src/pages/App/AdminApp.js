import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NotFound from "../NotFound/NotFound";
import Footer from "../../components/Footer";
import AdminNav from "../../admin/AdminNav";
import Modals from "../../components/Modals";
import Breadcrumb from "../../components/Breadcrumb";
import Privacy from "../Privacy/Privacy";
import AdminHome from "../../admin/pages/AdminHome";
import CourseList from "../../admin/pages/courses/CourseList";
import AddCourse from "../../admin/pages/courses/AddCourse";
import { Toaster } from "react-hot-toast";

export default function AdminApp() {
    const [showModal, setShowModal] = useState("");
    const { pathname } = useLocation();

    return (
        <main>
            <Modals showModal={showModal} setShowModal={setShowModal} />
            <AdminNav />

            {pathname === "/privacy" && <Breadcrumb pageName="Privacy" />}
            {pathname === "/about" && <Breadcrumb pageName="About" />}
            {pathname === "/certificate" && <Breadcrumb pageName="Certificate" />}

            <Routes>
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/courses" element={<CourseList />} />
                <Route path="/admin/courses/add" element={<AddCourse />} />
                <Route path="/" element={<Navigate to="/admin" replace />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer HashLink={HashLink} setShowModal={setShowModal} />
            <Toaster />
        </main>
    );
}
