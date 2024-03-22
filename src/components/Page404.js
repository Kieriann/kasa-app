import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const Page404 = () => {
  return (
  <div className='error'>
    <h1 className='h1error'>404</h1>
    <p className='perror'>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className='retouraccueil'>Retourner sur la page d'accueil</Link>
  </div>
  )
};

export default Page404;
