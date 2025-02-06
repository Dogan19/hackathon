import Slider from "../components/slider";
import React, {useState,useEffect} from "react";
import Event from "../components/event";
import "../assets/styles/home.css";
import imgLogo from "../assets/img/imgLogo.jpg";
import vaseHome from "../assets/img/vaseHome.png";
import VenteEnchere from "../components/venteEnchere";
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";

const Home = () => {


  return (
    <>
      <div className="flex justify-between blocPresentation">
        <div className="md:mt-16 md:ml-16 introBloc">
          <h1 className="text-4xl mb-2 font-bold" style={{ color: "#00445f" }}>
            Trouvez, vendez, évaluez
          </h1>
          <p className="text-xl" style={{ color: "#00445f" }}>
            L'art à portée de main,
          </p>
          <p className="text-xl" style={{ color: "#00445f" }}>
            Partout en Belgique.
          </p>

          <img src={imgLogo} alt="Logo"></img>
        </div>
        <div
          className="md:mt-64 flex flex-col p-4 gap-4"
          style={{ backgroundColor: "#00445f" }}
        >
          <p style={{ color: "white" }} className="text-xl">
            Ne manquez rien ! <br />
            Inscrivez-vous et suivez-nous.
          </p>

          <p style={{ color: "#ebc785" }}>
            ✓ Restez informé des événements et expositions incontournables{" "}
            <br />
            ✓ Profitez de réductions exclusives chez nos partenaires  <br />✓
            Assistez à des webinars gratuits animés par des experts antiquaires
          </p>

          <div className="flex mt-5">
            <input
              type="text"
              placeholder="Entrez votre recherche"
              className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-500 text-white p-2 hover:bg-blue-600"
              style={{ backgroundColor: "#ebc785", color: "#00445f" }}
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <h1
        className="mt-32 ml-16 text-2xl font-bold"
        style={{ color: "#00445f" }}
      >
        Evénements
      </h1>

      <Event />

      <div
        className="mt-16 pl-16  flex justify-around"
        style={{ backgroundColor: "#00445f", color: "white" }}
      >
        <div className="p-16">
          <h1 className="text-2xl mb-2 font-bold" style={{ color: "white" }}>
            Vous avez déniché un trésor?
          </h1>
          <p>
            Nos antiquaires partenaires vous <br /> apprennent plus <br />{" "}
            gratuitement!
          </p>
          <button
            style={{ backgroundColor: "#ebc785", color: "#00445f" }}
            className="pb-2 pt-2 pl-4 pr-4 mt-4"
          >
            Consultez un expert
          </button>
        </div>

        <img src={vaseHome} className="imgTresor"></img>
      </div>

      <h1
        className="mt-16 ml-16 text-2xl font-bold"
        style={{ color: "#00445f" }}
      >
        Pour les amateurs de vente aux enchères
      </h1>

      <VenteEnchere />

      <h1
        className="mt-16 ml-16 mb-16 text-2xl font-bold"
        style={{ color: "#00445f" }}
      >
        Blog
      </h1>

      <div className="flex md:ml-16 mb-16 blocBlog">
        <div className="flex">
        <div style={{ backgroundColor: "#00445f", width: "2vw" }}></div>
        <div style={{ backgroundColor: "#ebc785" }} className="">
          <p className="text-sm pl-4 pt-4" style={{ color: "#00445f" }}>
            5 février 2025
          </p>
          <h1 className="text-2xl font-bold pl-4" style={{ color: "#00445f" }}>
            Masques africains : <br />
            vraie antiquité ou <br /> simple déco?{" "}
          </h1>

          <p style={{ color: "#00445f" }} className="pl-4">
            Guide pour distinguer <br /> les pièces authentiques <br />
            des reproductions
          </p>
          <img src={blog1}></img>
        </div>
        </div>

        <div className="flex blocBlog2">
        <div style={{ backgroundColor: "#00445f", width: "2vw" }} className="md:ml-32 "></div>
        <div style={{ backgroundColor: "#ebc785" }}>
          <p className="text-sm pl-4 pt-4" style={{ color: "#00445f" }}>
            25 décembre 2024
          </p>
          <h1 className="text-2xl font-bold pl-4" style={{ color: "#00445f" }}>
            Artéfacts égyptiens :<br /> Trésors antiques ou <br />
            simples répliques?
          </h1>

          <p className="pl-4" style={{ color: "#00445f" }}>
            Comment reconnaître
            <br /> l’authenticité des objets
            <br /> du passé?
          </p>
          <img src={blog2}></img>
        </div>
        </div>

      </div>
    </>
  );
};

export default Home;
