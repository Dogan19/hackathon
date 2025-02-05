

const Listing = () => {

    return(
        <main className="ml-40 mr-32">
            <div className="mt-20 bg-gray-500 max-w-full mx-auto">
                <p>
                    Trouvez l’expert qu’il vous faut, près de chez vous.
                </p>

                <p>
                    Vous avez un objet d’art, une antiquité ou une pièce de collection à vendre ? 
                </p>

                <p>
                    1. Consultez notre sélection d’experts par catégorie                    
                </p>

                <p>
                    2. Envoyez vos photos par wassap directement à l’expert     
                </p>

                <p className="mb-4">
                    3. Obtenez une estimation gratuite et peut être une offre d’achat    
                </p>

                <p>
                    👇 Parcourez la liste des experts et trouvez le bon interlocuteur.
                </p>

                <div className="flex justify-center mr-20">
                    <a href="" target="_blank" className="border-2 border-black">
                        Aidez moi
                    </a>
                </div>
            </div>
    
            <form action="/rechercher" method="get" className="m-10 flex justify-center">
            <input className="border-2 border-black" type="search" id="search" name="q" placeholder="Tapez votre recherche ici..."></input>
            </form>

            <p className="flex justify-center">
                Filtrer par domaine
            </p>
    
            <div className="flex justify-evenly items-center m-5 p-5 bg-gray-500 mx-auto">
                <a href="" target="_blank">
                    <img src="" alt="Aidez moi" />
                        Aidez moi         
                    </a>
        
                <a href="" target="_blank">
                    <img src="" alt="Domaine" />
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src="" alt="Domaine" />
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src="" alt="Domaine" />
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src="" alt="Domaine" />
                        Domaine
                </a>
        
                <a href="" target="_blank">
                <img src="" alt="Domaine" />
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src="" alt="Domaine" />
                        Domaine
                </a>
            </div>
    
            <h1 className="font-bold uppercase text-2xl mt-10">
                Nos experts
            </h1>
    
            <div className="flex justify-end">
                <label>Filtrer par région:</label>
                <select id="region" name="region" className="border-2 border-black">
                    <option value="Bruxelles">
                        Bruxelles
                    </option>
        
                    <option value="Jette">
                        Jette
                    </option>
        
                    <option value="Ganshoren">
                        Ganshoren
                    </option>
        
                    <option value="Berchem-Sainte-Agathe">
                        Berchem-Sainte-Agathe
                    </option>
                    
                    <option value="Koekelberg">
                        Koekelberg
                    </option>
        
                    <option value="Molenbeek">
                        Molenbeek
                    </option>
        
                    <option value="Anderlecht">
                        Anderlecht
                    </option>
        
                    <option value="Forest">
                        Forest
                    </option>
        
                    <option value="Saint-Gilles">
                        Saint-Gilles
                    </option>
        
                    <option value="Schaerbeek">
                        Schaerbeek
                    </option>
        
                    <option value="Saint-Josse-ten-Noode">
                        Saint-Josse-ten-Noode
                    </option>
        
                    <option value="Evere">
                        Evere
                    </option>
        
                    <option value="Woluwe-Saint-Lambert">
                        Woluwe-Saint-Lambert
                    </option>
        
                    <option value="Woluwe-Saint-Pierre">
                        Woluwe-Saint-Pierre
                    </option>
        
                    <option value="Etterbeek">
                        Etterbeek
                    </option>
        
                    <option value="Auderghem">
                        Auderghem
                    </option>
        
                    <option value="Ixelles">
                        Ixelles
                    </option>
        
                    <option value="Watermael-Boitsfort">
                        Watermael-Boitsfort
                    </option>
        
                    <option value="Uccle">
                        Uccle
                    </option>
                </select>
            </div>

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start">
                <img src="" alt="Photo du magasin" className="h-32 w-32 mt-10 p-5" />
                <img src="" alt="Logo ou autre image" className="h-16 w-16 absolute top-0 right-0 mt-10 mr-5" />
                <div className="ml-4 flex flex-col justify-between h-full">
                    <div className="p-10">
                        <p className="mb-4">Nom du magasin</p>
                        <p className="mb-4">Nom</p>
                        <p className="mb-4">Domaines d'expertise</p>
                        <div className="space-y-2">
                            <p>Adresse</p>
                            <p>WhatsApp</p>
                            <p>Email</p>
                            <p>Site</p>
                        </div>
                    </div>
                    <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5 p-5 border-2 border-black">Expertise gratuite</a>
                </div>
            </div>

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start">
                <img src="" alt="Photo du magasin" className="h-32 w-32 mt-10 p-5" />
                <img src="" alt="Logo ou autre image" className="h-16 w-16 absolute top-0 right-0 mt-10 mr-5" />
                <div className="ml-4 flex flex-col justify-between h-full">
                    <div className="p-10">
                        <p className="mb-4">Nom du magasin</p>
                        <p className="mb-4">Nom</p>
                        <p className="mb-4">Domaines d'expertise</p>
                        <div className="space-y-2">
                            <p>Adresse</p>
                            <p>WhatsApp</p>
                            <p>Email</p>
                            <p>Site</p>
                        </div>
                    </div>
                    <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5 p-5 border-2 border-black">Expertise gratuite</a>
                </div>
            </div>

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start">
                <img src="" alt="Photo du magasin" className="h-32 w-32 mt-10 p-5" />
                <img src="" alt="Logo ou autre image" className="h-16 w-16 absolute top-0 right-0 mt-10 mr-5" />
                <div className="ml-4 flex flex-col justify-between h-full">
                    <div className="p-10">
                        <p className="mb-4">Nom du magasin</p>
                        <p className="mb-4">Nom</p>
                        <p className="mb-4">Domaines d'expertise</p>
                        <div className="space-y-2">
                            <p>Adresse</p>
                            <p>WhatsApp</p>
                            <p>Email</p>
                            <p>Site</p>
                        </div>
                    </div>
                    <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5 p-5 border-2 border-black">Expertise gratuite</a>
                </div>
            </div>

        </main>
     )
    }
    
    export default Listing