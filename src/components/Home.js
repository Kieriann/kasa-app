import React from 'react';
import { Link } from 'react-router-dom';
import Liste from './Liste';
import Banner from './Banner';
import Card from './Card';
import Grille from './Grille';

const Home = () => {
  return (
    <div>
      <Banner />
      <Liste />    
    </div>
    
      );
};

export default Home;