import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
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
import AdminNav from "../../admin/AdminNav";

export default function AdminApp() {
    const [showModal, setShowModal] = useState("");
    const { user, isAuthenticated, isLoading } = useAuth0();

    const { pathname } = useLocation();

    const [courses, setCourses] = useState({});

    return (
        <main>
            <Modals showModal={showModal} setShowModal={setShowModal} />

            <AdminNav
                useState={useState}
                setShowModal={setShowModal}
                isAuthenticated={isAuthenticated}
            />

            {pathname === "/admin/dashboard" && <Breadcrumb pageName="Dashboard" />}

            <Routes>
                <Route
                    path="/admin"
                />

                {isAuthenticated && (
                    <Route
                        path="/dashboard"
                        element={
                            <Dashboard showModal={showModal} setShowModal={setShowModal} />
                        }
                    />
                )}
            </Routes>

            <Footer HashLink={HashLink} setShowModal={setShowModal} />
        </main>
    );
}
