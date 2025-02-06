import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Menu from './pages/menu'
import Vente from './pages/vente'
import Listing from './pages/listing'
import Produit from './pages/produit'

// import Expert from './pages/expert'



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vente" element={<Vente />} />
        {/* <Route path="/expert" element={<Expert />} /> */}
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produit" element={<Produit />} />

      </Routes>
    </Router>
  );
}

export default App;
