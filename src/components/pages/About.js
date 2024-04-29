import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import BannerAbout from '../BannerAbout';
import Collapse from '../Collapse';
import Bandeaux from '../Bandeaux';

const About = () => {
  return(
    <div>
      <BannerAbout />
      <Bandeaux />
    </div>
   
  )
};

export default About;
