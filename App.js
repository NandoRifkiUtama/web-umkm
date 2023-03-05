import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Informasi from "./pages/Informasi";
import Umkm from "./pages/Umkm";
import Footer from "./components/Footer";
import Art from "./pages/Art";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/poster" element={<Art />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
