import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

const Slideshow = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('description');

  useEffect(() => {
    const foundLogement = logements.find(l => l.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
      setCurrentIndex(0);
    }
  }, [id]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : logement.pictures.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < logement.pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  const renderRating = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < parseInt(logement.rating, 10) ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const toggleAccordion = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="card-details">
      {/* Carousel d'images avec navigation */}
      <div className="image-gallery">
        <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>

      {/* Conteneurs gauche et droite pour les informations */}
      <div className="leftandright">
        {/* Conteneur gauche pour le titre, la localisation et les tags */}
        <div className="left">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Conteneur droite pour l'image de l'hôte, le nom et l'évaluation */}
        <div className="right">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-image" />
          <div className="rating">{renderRating()}</div>
        </div>
        </div>

        
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-title" onClick={() => toggleAccordion('description')}>
              Description
            </button>
            {activeSection === 'description' && (
              <div className="accordion-content">
                <p>{logement.description}</p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <button className="accordion-title" onClick={() => toggleAccordion('equipments')}>
              Équipements
            </button>
            {activeSection === 'equipments' && (
              <div className="accordion-content">
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        

      </div>
  );
};

export default Slideshow;
