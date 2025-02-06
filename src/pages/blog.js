import React, { useState } from 'react';
import Footer from './footer';
import '../assets/blog.css'; // Fichier CSS externe
import masque from '../assets/images/unsplash_a1YTbDLV5zc.jpg';
import egypte from '../assets/images/egypte.jpg';

const BlogPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false); // Nouvel état pour afficher/masquer les filtres
  const articlesPerPage = 6;

  const articles = [
    { id: 1, title: 'Comment j’ai gagné 500€ en chinant un matin sur une brocante', excerpt: 'Astuces et récit d’un chineur qui a flairé la bonne affaire', date: '15 Janvier 2025', category: 'Témoignages & success stories', image : ''},

    { id: 2, title: 'Masques africains : vraie antiquité ou simple déco ? Nos conseils pour ne pas se faire avoir', excerpt: 'Guide pour distinguer les pièces authentiques des reproductions', date: '25 Décembre 2024', category: 'Authentification & estimation', image: masque },

    { id: 3, title: 'Ne manquez pas la grande exposition sur Tutankhamun au palais 12 à Bruxelles', excerpt: 'Une exposition incontournable en Belgique', date: '10 Novembre 2024', category: 'Événements & expositions', image: egypte },

    { id: 4, title: 'Les 5 erreurs à éviter quand on débute en brocante', excerpt: 'Les pièges courants et comment bien préparer ses achats', date: '8 Février 2025', category: 'Chiner et négocier', image: 'https://source.unsplash.com/800x600/?temple,thailand' },

    { id: 5, title: 'Où vendre vos trouvailles au meilleur prix ? Les plateformes et antiquaires à privilégier', date: '18 Mars 2025', category: 'Chiner et négocier', image: 'https://source.unsplash.com/800x600/?javascript,framework' },

    { id: 6, title: 'Les signes qui montrent qu’un meuble ancien a de la valeur', excerpt: 'Indices visuels, matériaux et marques pour repérer un meuble précieux', date: '20 Avril 2025', category: 'Authentification & estimation', image: 'https://source.unsplash.com/800x600/?success,habit' },

    { id: 7, title: 'Rencontre avec un antiquaire : les secrets d’un expert pour reconnaître un objet rare', excerpt: 'Interview exclusive avec un professionnel du marché de l’art', date: '10 Mai 2025', category: 'Authentification & estimation', image: 'https://source.unsplash.com/800x600/?hiking,patagonia' },
  ];

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((category) => category !== value));
    }
  };

  const filteredArticles = selectedCategories.length === 0
    ? articles
    : articles.filter(article => selectedCategories.includes(article.category));

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  const changePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-container">
      <div className="sidebar">
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
        </button>
        
        {showFilters && (
          <div>
            <h2>Filtrer par catégorie</h2>
            <ul>
              {['Chiner et négocier', 'Authentification & estimation', 'Histoire & culture', 'Témoignages & success stories', 'Événements & expositions'].map((cat) => (
                <li key={cat}>
                  <label>
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes(cat)}
                    />
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="articles-container">
        <div className="articles-grid">
          {currentArticles.map((article) => (
            <div key={article.id} className="article-card">
              
              <div className="article-content">
              <p>{article.date}</p>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => changePage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
          ))}
          <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>Suivant</button>
        </div>
      </div>
     
    </div>
  );
};

export default BlogPage;










