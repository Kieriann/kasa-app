import React from 'react';
import '../styles.scss';

const Card = ({ title, cover, rating, tags }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image"/>
        <div className="card-title">{title}</div>
          {tags.map((tag, index) => <span key={index} className="card-tag">{tag}</span>)}
        </div>    
  );
};


export default Card