import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Listing from "./pages/listing";
import Menu from "./pages/menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert" element={<Listing />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </Router>
  );
}

export default App;
