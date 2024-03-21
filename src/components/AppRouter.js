import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './Home';
import AboutPage from './About';
import NotFoundPage from './Page404';
import Liste from './Liste';

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
       <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/liste" element={<Liste />} />
      </Routes>
       <Footer />
       </div>
    </Router>
  );
};

export default AppRouter;
