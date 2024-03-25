import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logements from '../data/logements.json';

const Slideshow = () => {
  let { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSections, setActiveSections] = useState({
    description: false,
    equipments: false,
  });
  
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
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i < parseInt(logement.rating, 10) ? 'star filled' : 'star'}
        />
      );
    }
    return stars;
  };

  const toggleAccordion = (section) => {
    setActiveSections(prevState => {
      console.log("Avant : ", prevState);
      const newState = { ...prevState, [section]: !prevState[section] };
      console.log("Après : ", newState);
      return newState;
    });
  };

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="card-details">
      <div className="image-gallery">
        <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button onClick={goToPrevious}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={goToNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
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
        <div className="host-rating-container">
        <div className="host-info">
          <div className="host-name-rating">
            <div className="host-name">
              <p className="host-first-name">{logement.host.name.split(" ")[0]}</p>
              <p className="host-last-name">{logement.host.name.split(" ").slice(1).join(" ")}</p>
            </div>
            <div className="rating">{renderRating()}</div>
          </div>
          <img src={logement.host.picture} alt={logement.host.name} className="host-image" />
        </div>
      </div>
      </div>

        
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-title" onClick={() => toggleAccordion('description')}>
              Description
              <FontAwesomeIcon icon={faAngleDown} className={`accordion-icon ${activeSections.description ? 'active' : ''}`} />
            </button>
            {activeSections.description && (
                 
            <div className="accordion-content">
               <div class="text-background">
              <p>{logement.description}</p>
            </div>
            </div>
          )}
          </div>
          <div className="accordion-item">
            <button className="accordion-title" onClick={() => toggleAccordion('equipments')}>
              Équipements
              <FontAwesomeIcon icon={faAngleDown} className={`accordion-icon ${activeSections.equipments ? 'active' : ''}`} />
            </button>
            {activeSections.equipments && (
              <div className="accordion-content">
                    <div class="text-background">
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
              </div>
            )}
         </div>
        </div>
        

      </div>
  );
};

export default Slideshow;