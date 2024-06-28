import { Route, Routes, useLocation } from "react-router-dom";
import { useState, createContext } from "react";
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
export const SpanishContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState("");
  const { pathname } = useLocation();
  const [spanish, setSpanish] = useState(false);
  const handleClick = () => setSpanish(!spanish);

  return (
    <main>
      <div className="language-select" style={{ position: "fixed", left: 0 }}>
        <input type="checkbox" onClick={handleClick} checked={spanish} />
        {spanish ? "hi" : "bye"}
      </div>
      <Modals showModal={showModal} setShowModal={setShowModal} />

      <Nav useState={useState} setShowModal={setShowModal} />

      {pathname === "/privacy" && <Breadcrumb pageName="Privacy" />}
      {pathname === "/about" && <Breadcrumb pageName="About" />}
      {pathname === "/certificate" && <Breadcrumb pageName="Certificate" />}
      {pathname === "/dashboard" && <Breadcrumb pageName="Dashboard" />}

      <SpanishContext.Provider
        value={{
          spanish: spanish,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home showModal={showModal} setShowModal={setShowModal} />}
          />
          <Route path="/*" element={<NotFound />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard showModal={showModal} setShowModal={setShowModal} />
            }
          />
        </Routes>
      </SpanishContext.Provider>

      <Footer HashLink={HashLink} setShowModal={setShowModal} />
    </main>
  );
}
