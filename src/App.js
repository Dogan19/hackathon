import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Listing from "./pages/listing";
import Menu from "./pages/menu";
import BlogPage from "./pages/blog";
import Vente from "./pages/vente";
import Produit from "./pages/produit";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert" element={<Listing />} />

        <Route path="/contact" element={<Contact />} />
        
        <Route path="/vente" element={<Vente />} />
        <Route path="/produit" element={<Produit />} />


        <Route path="/blog" element={<BlogPage />} />
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
