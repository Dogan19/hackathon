import enchere1 from "../assets/img/enchere1.jpg";
import enchere2 from "../assets/img/enchere2.jpg";
import enchere3 from "../assets/img/enchere3.jpg";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";

const Vente = () => {
    const navigate = useNavigate();
  const [compteur1, setCompteur1] = useState(60);
  const [compteur2, setCompteur2] = useState(50);
  const [compteur3, setCompteur3] = useState(50);
  const [compteur4, setCompteur4] = useState(50);
  const [compteur5, setCompteur5] = useState(50);
  const [compteur6, setCompteur6] = useState(40);
  const [compteur7, setCompteur7] = useState(70);
  const [compteur8, setCompteur8] = useState(60);
  const [compteur9, setCompteur9] = useState(50);


  useEffect(() => {
    const interval1 = setInterval(() => {
      setCompteur1((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval1);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    const interval2 = setInterval(() => {
      setCompteur2((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval2); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 
    const interval3 = setInterval(() => {
      setCompteur3((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval3); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 
    const interval4 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval4); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 

      const interval5 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval5); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 

      const interval6 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval6); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 
      const interval7 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval7); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 
      const interval8 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval8); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 
      const interval9 = setInterval(() => {
        setCompteur3((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval9); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 
   
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
      clearInterval(interval7);
      clearInterval(interval8);
      clearInterval(interval9);
    };
  }, []);

  return (
    <>
      <h1
        className="text-4xl ml-4 mt-8 mb-2 font-bold"
        style={{ color: "#00445f" }}
      >
        Ventes bientôt terminées
      </h1>

      <div className="flex justify-evenly mt-8">
      <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
          <div style={{ height: "100%" }}>
            <img src={enchere1} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XIX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                
                Ferme dans : 7j 8h 3min {compteur1}s
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
          <div style={{ height: "100%" }}>
            <img src={enchere1} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XIX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                Ferme dans : 7j 8h 3min {compteur2}
              </div>
            </div>
          </div>
        </div>
      </div>



      <h1
        className="text-4xl ml-4 mt-16 mb-2 font-bold"
        style={{ color: "#00445f" }}
      >
        Ventes bientôt ouvertes
      </h1>

      <div className="flex justify-evenly mt-3 mb-8 mt-8">
      <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
          <div style={{ height: "100%" }}>
            <img src={enchere2} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                Ouvre dans : 10j 7h 40min {compteur3}s
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
        <div style={{ height: "100%" }}>
            <img src={enchere3} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XIIX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                Ouvre dans : 4j 8h 3min {compteur4}s
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly mt-3 mb-8 mt-8">
      <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
          <div style={{ height: "100%" }}>
            <img src={enchere2} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                Ouvre dans : 10j 7h 40min {compteur3}s
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full items-stretch cursor-pointer" onClick={() => navigate(`/produit`)}>
        <div style={{ height: "100%" }}>
            <img src={enchere3} className="h-full object-cover" />
          </div>

          <div className="flex-1" style={{ backgroundColor: "#00445f"}}>
            <div
              style={{ color: "#00445f", height: "100%" }}
              className="text-xl flex flex-col justify-between h-full"
            >
              <div
                style={{ backgroundColor: "#ebc785" }}
                className="p-4 font-bold"
              >
                Objets XIIX<small>ème</small>
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-4"
              >
                Vendeur Antiquité prestige
              </div>
              <div
                style={{ backgroundColor: "#00445f", color: "white" }}
                className="p-8"
              >
                Ouvre dans : 4j 8h 3min {compteur4}s
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vente;