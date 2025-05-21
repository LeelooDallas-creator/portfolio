import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <h1 className="logo">Lise Barbey</h1>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
      <Link to="/projects">Projets</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
