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


function App() {
  return (
   <AppRouter />
  );
}


export default App;
