import React from 'react';
import '../styles.scss';
import Card from './Card';

const Grille = ({ cards }) => {
    return (
        <div className="card-grid">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} />
            ))}
        </div>
    );
};


export default Grille