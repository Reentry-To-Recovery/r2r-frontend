import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserRole } from "../../hooks/useUserRole";
import { useAuth0 } from "@auth0/auth0-react";
import { HashLink } from "react-router-hash-link";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Modals from "../../components/Modals";
import Nav from "../../components/Nav";
import Privacy from "../Privacy/Privacy";
import About from "../About/About";
import Breadcrumb from "../../components/Breadcrumb";
import Certificate from "../Certificate/Certificate";
import Footer from "../../components/Footer";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../../components/Auth/Profile";

export default function App() {
  const [showModal, setShowModal] = useState("");
  const { isAuthenticated } = useAuth0();
  const { userRole } = useUserRole();

  const { pathname } = useLocation();

  const [courses, setCourses] = useState({});

  const fetchCourses = async () => {
    try {
      const res = await fetch(
        "https://reentrytorecoveryapi.fly.dev/admin/courses"
      );
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <main>
      <Modals showModal={showModal} setShowModal={setShowModal} />

      <Nav useState={useState} setShowModal={setShowModal} />

      {pathname === "/privacy" && <Breadcrumb pageName="Privacy" />}
      {pathname === "/about" && <Breadcrumb pageName="About" />}
      {pathname === "/certificate" && <Breadcrumb pageName="Certificate" />}
      {isAuthenticated && pathname === "/dashboard" && (
        <Breadcrumb
          pageName={
            userRole === "admin" ? "Admin Dashboard" : "Student Dashboard"
          }
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Home showModal={showModal} setShowModal={setShowModal} />}
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/profile" element={<Profile />} />

        {isAuthenticated && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>

      <Footer HashLink={HashLink} setShowModal={setShowModal} />
    </main>
  );
}
