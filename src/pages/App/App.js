import { Route, Routes } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Modals from "../../components/Modals";
import Nav from "../../components/Nav";

export default function App() {
  const [showModal, setShowModal] = useState("");
  const navRef = useRef();
  const courseRef = useRef();

  return (
    <main>
      <Modals showModal={showModal} setShowModal={setShowModal} />

      <Nav useState={useState} setShowModal={setShowModal} navRef={navRef} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              showModal={showModal}
              setShowModal={setShowModal}
              navRef={navRef}
              courseRef={courseRef}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
