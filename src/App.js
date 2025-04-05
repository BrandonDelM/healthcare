// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/about.js';
import React from 'react';
import Navbar from './components/navbar.js';
import Main from './components/main.js'

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <AboutUs />
    </div>
  );
}
