import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
