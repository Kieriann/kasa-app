import '../App.css';
import data from '../data/logements.json';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import AppRouter from './AppRouter';
import '../styles.scss';
import Header from './Header';


function App() {
  return (
    <div>
      <Header />
    <h1>Liste des appartements</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
