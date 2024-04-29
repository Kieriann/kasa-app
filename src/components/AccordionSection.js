import React from 'react';
import Collapse from './Collapse';

const AccordionSection = ({ logement }) => {
  return (
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
  );
};

export default AccordionSection;
