import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
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

export default function App() {
  const [showModal, setShowModal] = useState("");
  const { pathname } = useLocation();

  return (
    <main>
      <Modals showModal={showModal} setShowModal={setShowModal} />

      <Nav useState={useState} setShowModal={setShowModal} />

      {pathname === "/privacy" && <Breadcrumb pageName="Privacy" />}
      {pathname === "/about" && <Breadcrumb pageName="About" />}
      {pathname === "/certificate" && <Breadcrumb pageName="Certificate" />}

      <Routes>
        <Route
          path="/"
          element={<Home showModal={showModal} setShowModal={setShowModal} />}
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>

      <Footer HashLink={HashLink} setShowModal={setShowModal} />
    </main>
  );
}
