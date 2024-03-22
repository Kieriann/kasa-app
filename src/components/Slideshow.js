import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logements from '../data/logements.json';

const Slideshow = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logements.find((logement) => logement.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    }
  }, [id]);

  // Si aucun logement n'est trouvé ou en attente de chargement des données
  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < parseInt(logement.rating) ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card-details">
      {/* Carousel d'images */}
      <div className="image-gallery">
        {logement.pictures.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>

      {/* Contenu de la carte */}
      <div className="details-content">
        <h1>{logement.title}</h1>
        <p className="location">{logement.location}</p>
        <div className="rating">{renderRating()}</div>
        <div className="host">
          <img src={logement.host.picture} alt={logement.host.name} />
          <p>{logement.host.name}</p>
        </div>
        <p>{logement.description}</p>
        <div className="equipments">
          <h2>Équipements</h2>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <Link to="/" className="back-home">Retour à l'accueil</Link>
    </div>
  );
};

export default Slideshow;
