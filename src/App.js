import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
  <>
       <Navbar />
       <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/contact" element={<Contact />} />
       </Routes>
  </>
  );
}

export default App;
