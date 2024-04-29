import React from 'react';
import Rating from './Rating';

const HostInfo = ({ host }) => {
  return (
    <div className="host-rating-container">
      <div className="host-name-and-image">
        <div className="host-name">
          <p className="host-first-name">{host.name.split(" ")[0]}</p>
          <p className="host-last-name">{host.name.split(" ").slice(1).join(" ")}</p>
        </div>
        <div className="host-image-container">
          <img src={host.picture} alt={host.name} className="host-image" />
        </div>
      </div>
      <Rating rating={host.rating} />
    </div>
  );
};

export default HostInfo;
