import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

const Card = ({ id, title, cover, rating, tags }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link"> 
      <div className="card">
        <img src={cover} alt={title} className="card-image"/>
        <div className="card-title">{title}</div>
        <div className="card-tags">
          {tags && tags.map((tag, index) => <span key={index} className="card-tag">{tag}</span>)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
