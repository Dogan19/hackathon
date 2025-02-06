import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/home.css";
import LogoSVG from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("open");
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      ></link>
      <nav className="flex nav-bar justify-between md:px-8 md:pt-4 md:pb-4 border-b menuSection">
        <div className="flex items-center">
          <img src={LogoSVG} alt="Logo" onClick ={() => navigate(`/`)} className="w-20 shadow-lg" />
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-black p-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
         className={`flex gap-4 justify-end md:flex md:gap-4 md:block md:static ulBurger ${
          isMenuOpen
            ? "flex flex-col gap-16 absolute items-end top-16 left-0 w-full h-auto shadow-lg z-50 pt-16 pr-16 pb-64 menuBurger"
            : "hidden"
        }`}
        >
          {" "}
          <li className="listMenu">
            <Link to="/">Accueil</Link>
          </li>
          <li className="listMenu">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="listMenu">
            <Link to="/vente">En vente</Link>
          </li>
          <li className="listMenu">
            <Link to="/expert">Trouver un expert</Link>
          </li>
          <li className="listMenu">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
