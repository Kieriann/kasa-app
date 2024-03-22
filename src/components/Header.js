import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../LogoKasa.png';
import '../styles.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="LogoKasa"/>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
        <Link to="*">404</Link>
      </nav>
    </header>
  );
};

export default Header;
