import React from "react";
import enchere1 from "../assets/img/enchere1.jpg";

export default function produit() {
  return (
    <>
    <h1
    className="text-4xl ml-16 mt-8 mb-2 font-bold"
    style={{ color: "#00445f" }}
  >
    Page produit
  </h1>
    <div className=" mt-8 bg-gray-50 p-6 flex items-center justify-center">
      <div style={{backgroundColor:"#00445f", color:"white"}} className="max-w-4xl w-full shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={enchere1}
              alt="Product Image"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">
              Objets XIX<small>ème</small>
              </h1>
              <p className="text-white-600 mb-6">
              Vendeur Antiquité prestige <br/>
                Vente ferme dans : 3j 5h 40min
              </p>
              <p className="text-xl font-semibold text-green-600">49,99 €</p>
            </div>

            <button style={{ backgroundColor: "#ebc785", color:"#00445f"}}a className="mt-8 w-full text-white py-3 hover:bg-blue-500 transition">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
