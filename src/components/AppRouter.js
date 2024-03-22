import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './Home';
import AboutPage from './About';
import NotFoundPage from './Page404'; 
import Liste from './Liste';
import Slideshow from './Slideshow';

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/liste" element={<Liste />} />
          <Route path="/logement/:id" element={<Slideshow />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
