import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i < parseInt(rating, 10) ? 'star filled' : 'star'}
      />
    );
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
