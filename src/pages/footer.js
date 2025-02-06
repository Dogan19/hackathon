// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import '../assets/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Colonne 1 - Navigation */}
        <div className="footer-navigation">
          <h3 className="footer-title">Navigation</h3>
          <div className="footer-links-grid">
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/vnete" className="footer-link">En vente</Link></li>
            </ul>
            <ul className="footer-links">
              <li><Link to="/expert" className="footer-link">Trouver un expert</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Colonne 2 - Contact */}
        <div className="footer-contact">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">47 Rue des Collectionneurs, 1000 Bruxelles, Belgique</p>
          <p className="footer-text">
            Email: <a href="mailto:contact@antiquitesdupasse.be" className="footer-highlight">contact@antiquitesdupasse.be</a>
          </p>
          <p className="footer-text">
            Téléphone: <a href="tel:+3221234567" className="footer-highlight">+32 2 123 45 67</a>
          </p>
        </div>

        {/* Colonne 3 - Réseaux Sociaux */}
        <div className="footer-social">
          <h3 className="footer-title">Suivez-nous</h3>
          <div className="footer-icons">
            <a href="#" className="footer-icon"><Facebook size={28} /></a>
            <a href="#" className="footer-icon"><Instagram size={28} /></a>
            <a href="#" className="footer-icon"><Twitter size={28} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer; 
