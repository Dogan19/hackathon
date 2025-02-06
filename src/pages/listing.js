import '../assets/styles/listing.css'; // Assurez-vous que le chemin du fichier est correct
import image1 from '../assets/images/art_decoratif.png';
import image2 from '../assets/images/art_tribal.png';
import image3 from '../assets/images/verrerie.png';
import image4 from '../assets/images/ceramique.png';
import image5 from '../assets/images/monnaies.png';
import image7 from '../assets/images/peinture.png';
import image6 from '../assets/images/sculpture.png';

import image8 from '../assets/images/img1.png';
import image9 from '../assets/images/img2.png';
import image10 from '../assets/images/img3.png';
import image11 from '../assets/images/personne1.png';
import image12 from '../assets/images/personne2.png';
import image13 from '../assets/images/personne3.png';
import Contact from "../pages/contact";


const Listing = () => {

    return(
        <main className="ml-40 mr-32">

            <div className="mt-20 bg-gray-500 max-w-full mx-auto p-4"
            style={{backgroundColor:'#00445F' , color:"white"}}
            >

                <p className='text-4xl mb-8'>
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
                    <a href="" target="_blank" className=" mt-4"> 

                        <button style={{backgroundColor:'#EBC785', padding:'4px'}}>
                        Aidez moi
                        </button>
                    </a>
                </div>
            </div>
    
            <form action="/rechercher" method="get" className="m-10 flex justify-center">
            <input className="border-2 border-black" type="search" id="search" name="q" placeholder="Tapez votre recherche ici..."></input>
            </form>

            <p className="flex justify-center">
                Filtrer par domaine
            </p>
    
            <div className="flex justify-evenly items-center m-2 p-2 bg-gray-500 mx-auto"
            style={{backgroundColor:'#00445F' , color:"white"}}
            >
                <a href="" target="_blank" >
                    <img src={image1} alt="Aidez moi" className='h-20 w-20'/>
                        Art Déco      
                    </a>
        
                <a href="" target="_blank">
                    <img src={image2} alt="Domaine" className='h-20 w-20'/>
                        Art tribal
                </a>
        
                <a href="" target="_blank">
                    <img src={image3} alt="Domaine" className='h-20 w-20'/>
                        verrerie
                </a>
        
                <a href="" target="_blank">
                    <img src={image4} alt="Domaine" className='h-20 w-20'/>
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src={image5} alt="Domaine" className='h-20 w-20'/>
                        Domaine
                </a>
        
                <a href="" target="_blank">
                <img src={image7} alt="Domaine" className='h-20 w-20'/>
                        Domaine
                </a>
        
                <a href="" target="_blank">
                    <img src={image6} alt="Domaine" className='h-20 w-20'/>
                        Domaine
                </a>
            </div>
    
            <h1 className="font-bold uppercase text-2xl mt-10">
                Nos experts
            </h1>
    
            <div className="flex justify-end"
            
            >
                <label>Filtrer par région:  </label>
                <select id="region" name="region" className="border-2 border-black mb-4">
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

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start"
            style={{backgroundColor:'#00445F' , color:"white"}}
            >
                <img src={image8} alt="Photo du magasin" className="h-50 w-50 mt-10 p-5" />
                <img src={image11} alt="Logo ou autre image" className="h-25 w-25 absolute top-0 right-5 mt-10 mr-5" />
                {/* Bandeau en haut */}
    <div className="absolute top-0 left-0 w-full bg-gold text-center p-2 m-3  text-2xl mt-8" >
        <p className="text-xl font-bold">Galeries Mondes d'hier</p>
    </div>

    {/* Contenu centré en dessous */}
    <div className="ml-4 flex flex-col justify-center items-center h-full pt-20">
        <div className="p-10">
        
            <p className="mb-4">Yvan Guerrin</p>
            <p className="mb-4">Art tribal</p>
            <div className="space-y-2">
            <div className='flex'>

            <svg fill="#FFF" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>pin</title>
<path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
</svg>
                <p className='ml-4'>123 Rue des Arts
                75001 Paris, France</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#FFF"/>
</svg><p className='ml-4'>+32 (0) 495 324</p>
</div>
                <div className='flex'>
     

<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <p className='ml-4'> Yvan@galerie.com</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#FFF" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>
                <p className='ml-4'>www.galerieguerrin.com</p>
                </div>
            </div>
        </div>
        <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5 p-10" style={{backgroundColor:'#EBC785', padding:'20px'}}>
            Expertise gratuite
        </a>
    </div>
</div>

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start"
            style={{backgroundColor:'#00445F' , color:"white"}}
            >
                <img src={image9} alt="Photo du magasin" className="h-50 w-50 mt-10 p-5" />
                <img src={image12} alt="Logo ou autre image" className="h-25 w-25 absolute top-0 right-5 mt-10 mr-5" />
                {/* Bandeau en haut */}
    <div className="absolute top-0 left-0 w-full bg-gold text-center p-2 m-3  text-2xl mt-8" >
        <p className="text-xl font-bold">Nom du magasin</p>
    </div>

   {/* Contenu centré en dessous */}
   <div className="ml-4 flex flex-col justify-center items-center h-full pt-20">
        <div className="p-10">
            <p className="mb-4">Nom du magasin</p>
            <p className="mb-4">Nom</p>
            <p className="mb-4">Domaines d'expertise</p>
            <div className="space-y-2">
            <div className='flex'>

            <svg fill="#FFF" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>pin</title>
<path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
</svg>
                <p className='ml-4'>Adresse</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#FFF"/>
</svg><p className='ml-4'>WhatsApp</p>
</div>
                <div className='flex'>
     

<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <p className='ml-4'> Email</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#FFF" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>
                <p className='ml-4'>Site</p>
                </div>
            </div>
        </div>
        <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5" style={{backgroundColor:'#EBC785', padding:'8px'}}>
            Expertise gratuite
        </a>
    </div>
</div>

            <div className="bg-gray-500 max-w-6xl mb-8 relative flex items-start"
    style={{backgroundColor:'#00445F', color:"white"}}>
    
    <img src={image10} alt="Photo du magasin" className="h-50 w-50 mt-10 p-5" />
    <img src={image13} alt="Logo ou autre image" className="h-25 w-25 absolute top-0 right-0 mt-10 mr-5" />

    {/* Bandeau en haut */}
    <div className="absolute top-0 left-0 w-full bg-gold text-center p-2 m-3  text-2xl mt-8" >
        <p className="text-xl font-bold">Nom du magasin</p>
    </div>

    {/* Contenu centré en dessous */}
    <div className="ml-4 flex flex-col justify-center items-center h-full pt-20">
        <div className="p-10">
            <p className="mb-4">Nom du magasin</p>
            <p className="mb-4">Nom</p>
            <p className="mb-4">Domaines d'expertise</p>
            <div className="space-y-2">
            <div className='flex'>

            <svg fill="#FFF" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>pin</title>
<path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
</svg>
                <p className='ml-4'>Adresse</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#FFF"/>
</svg><p className='ml-4'>WhatsApp</p>
</div>
                <div className='flex'>
     

<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <p className='ml-4'> Email</p>
                </div>

                <div className='flex'>
                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#FFF" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>
                <p className='ml-4'>Site</p>
                </div>
            </div>
        </div>
        <a href="" target="_blank" className="mt-auto absolute bottom-0 right-0 mb-5 mr-5" style={{backgroundColor:'#EBC785', padding:'8px'}}>
            Expertise gratuite
        </a>
    </div>
</div>

<Contact />

        </main>
     )
    }
    
    export default Listing