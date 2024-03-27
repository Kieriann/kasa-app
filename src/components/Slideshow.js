import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logements from '../data/logements.json';
import Collapse from './Collapse';

const Slideshow = () => {
  let navigate = useNavigate();
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
    } else {
      navigate("/not-found", { replace: true }); 
    }
  }, [id, navigate]);

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
      const newState = { ...prevState, [section]: !prevState[section] };
      return newState;
    });
  };

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="card-details">
<div className="image-gallery">
  {logement.pictures.length > 1 && (
    <>
      <button onClick={goToPrevious}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span className="image-counter">{`${currentIndex + 1}/${logement.pictures.length}`}</span>
      <button onClick={goToNext}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </>
  )}
  <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
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
  
  {/* Évaluation */}
  <div className="rating">{renderRating()}</div>

  {/* Nom de l'hôte */}
  <div className="host-name">
    <p className="host-first-name">{logement.host.name.split(" ")[0]}</p>
    <p className="host-last-name">{logement.host.name.split(" ").slice(1).join(" ")}</p>
  </div>
  
  {/* Image de l'hôte */}
  <div className="host-image-container">
    <img src={logement.host.picture} alt={logement.host.name} className="host-image" />
  </div>
  </div>  
</div>

      <div className="accordion-container">
      <div className="accordion-item">
        <Collapse title="Description">
          <div className="text-background">
            <p>{logement.description}</p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <Collapse title="Équipements">
          <div className="text-background">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
    </div>
  );
};

export default Slideshow;