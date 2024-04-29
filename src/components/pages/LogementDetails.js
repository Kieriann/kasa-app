import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import ImageGallery from '../ImageGallery';
import HostInfo from '../HostInfo';
import AccordionSection from '../AccordionSection';
import TagList from '../TagList';

const LogementDetails = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [logement, setLogement] = useState(null);
  
  useEffect(() => {
    const foundLogement = logements.find(l => l.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate("/not-found", { replace: true });
    }
  }, [id, navigate]);

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="card-details">
      <ImageGallery logement={logement} />
      <div className="leftandright">
        <div className="left">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <TagList tags={logement.tags} />
        </div>
        <HostInfo host={logement.host} />
      </div>
      <AccordionSection logement={logement} />
    </div>
  );
};

export default LogementDetails;
