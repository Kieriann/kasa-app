import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';
import logo from '../LogoKasaBlack.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div><img src={logo} alt="LogoKasa"/></div>
      <div><p>© 2020 Kasa. All rights reserved</p></div>
    </footer>
  );
};

export default Footer;
