import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <nav className="flex nav-bar justify-between px-8 pt-4 pb-4 border-b">
        <div className="flex items-center bg-gray-800">
          <img src="./assets/img/logo.jpg"></img>
        </div>
        <ul className="flex gap-4 justify-end bg-[#AAAAAA]">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/vente">En vente</Link>
          </li>
          <li>
            <Link to="/expert">Trouver un expert</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
