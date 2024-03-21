import React from 'react';
import logements from '../data/logements.json'; 
import Card from './Card';
import '../styles.scss';

const Liste = () => {
    return (
        <div className="card-grid">
            {logements.map(logement => (
                <Card
                    key={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                    rating={logement.rating}
                    tags={logement.tags}
                />
            ))}
        </div>
    );
};

export default Liste;
