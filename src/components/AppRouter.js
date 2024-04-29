import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/Page404'; 
import Liste from './Liste';
import Slideshow from './pages/LogementDetails';

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/logement/:id" element={<Slideshow />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
