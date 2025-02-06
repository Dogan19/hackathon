import React, { useState } from 'react';
import '../assets/contact.css'; // Assurez-vous que le chemin du fichier est correct
import Footer from "../pages/footer";

const Contact = () => {
  const [string] = useState('Contact');

  const checkboxes = [
    "Amateur d’art / Brocanteur ",
    "Antiquaire / Marchant ",
    "Vendeur ambulant ",
    "Artiste ",
    "Organisateur d’expositions ",
  ];

  return (
    <div className="contact-container"> {/* Appliquer la classe CSS */}
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Formulaire de contact</h1>
          <p className="text-lg text-gray-600 mb-2">Vous voulez rejoindre notre liste de merveilleux antiquaires et partager votre passion? Contactez - nous! </p>
          
        </div>

        <div className="md:w-2/3">
          <form className="contact-form flex flex-col space-y-4"> {/* Appliquer la classe CSS */}
            <div>
              <label htmlFor="email" className="block text-gray-700">E-mail :</label>
              <input 
                type="email" 
                id="email" 
                className="w-full" 
                placeholder="prenomnom@gmail.com "
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <label htmlFor="firstname" className="block text-gray-700">Prénom :</label>
                <input 
                  type="text" 
                  id="firstname" 
                  className="w-full" 
                  placeholder="Juliette "
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="block text-gray-700">Nom :</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full" 
                  placeholder="Normand"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="block text-gray-700">Je suis :</label>
              {checkboxes.map((checkbox, index) => (
                <div key={index} className="flex items-center">
                  <input 
                    type="radio" 
                    name="interests" 
                    id={`radio-${index}`} 
                    className="mr-2"
                  />
                  <label htmlFor={`radio-${index}`} className="text-gray-700">{checkbox}</label>
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message :</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full" 
                placeholder="J’aimerais organiser un événement "
              />
            </div>

            {/* Button section */}
            <div className="text-center mt-6">
              <button className="px-6 py-3">Envoyer</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;





