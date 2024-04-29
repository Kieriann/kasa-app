import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
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
  );
};

export default ImageGallery;
