

const Listing = () => {

    return(
        <main>
            <div>
                <p>
                Trouvez l’expert qu’il vous faut, près de chez vous.
                Vous avez un objet d’art, une antiquité ou une pièce de collection à vendre ? 
                1. Consultez notre sélection d’experts par catégorie
                2. Envoyez vos photos par wassap directement à l’expert     
                3. Obtenez une estimation gratuite et peut être une offre d’achat    
                👇 Parcourez la liste des experts et trouvez le bon interlocuteur.
                </p> 
        
                <a href="" target="_blank">
                    Aidez moi
                </a>
            </div>
    
            <form action="/rechercher" method="get">
            <input type="search" id="search" name="q" placeholder="Tapez votre recherche ici..."></input>
            </form>

            <p>
                Filtrer par domaine
            </p>
    
            <div>
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
    
            <h1>
                Nos experts
            </h1>
    
            <label>Filtrer par région:</label>
            <select id="region" name="region">
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

            <div>
                <img src="" alt="Photo de profil" />
                <p>
                    Nom
                </p>

                <p>
                    Domaines d'expertise
                </p>

                <a href="https://google.com/maps" target="_blank">
                    Google Maps
                </a>

                <p>
                    Contacter
                    <img src="./assets/instagram.png" alt="Logo d'Instagram" />
                    <img src="./assets/facebook.png" alt="Logo de Facebook" />
                </p>

                <a href="" target="_blank">
                    Expertise gratuite
                </a>
            </div>

            <div>
                <img src="" alt="Photo de profil" />
                <p>
                    Nom
                </p>

                <p>
                    Domaines d'expertise
                </p>

                <a href="https://google.com/maps" target="_blank">
                    Google Maps
                </a>

                <p>
                    Contacter
                    <img src="./assets/instagram.png" alt="Logo d'Instagram" />
                    <img src="./assets/facebook.png" alt="Logo de Facebook" />
                </p>

                <a href="" target="_blank">
                    Expertise gratuite
                </a>
            </div>

            <div>
                <img src="" alt="Photo de profil" />
                <p>
                    Nom
                </p>

                <p>
                    Domaines d'expertise
                </p>

                <a href="https://google.com/maps" target="_blank">
                    Google Maps
                </a>

                <p>
                    Contacter
                    <img src="./assets/instagram.png" alt="Logo d'Instagram" />
                    <img src="./assets/facebook.png" alt="Logo de Facebook" />
                </p>

                <a href="" target="_blank">
                    Expertise gratuite
                </a>
            </div>
        </main>
     )
    }
    
    export default Listing