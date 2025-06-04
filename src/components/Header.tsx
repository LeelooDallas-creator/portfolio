import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ChatGPT Image 4 juin 2025, 10_18_50-Photoroom.png';

const FlowerIcon: React.FC = () => (
  <svg
    viewBox="0 0 200 200"
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0.3rem auto' }}
    className="rotating-flower"
  >
    <defs>
      <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff7a8a" />
        <stop offset="100%" stopColor="#bf2849" />
      </radialGradient>
    </defs>
    {[...Array(6)].map((_, i) => (
      <ellipse
        key={i}
        cx="100"
        cy="65"
        rx="22"
        ry="35"
        fill="url(#petalGradient)"
        transform={`rotate(${i * 60}, 100, 100)`}
      />
    ))}
    <circle cx="100" cy="100" r="20" fill="#ffb347" />
  </svg>
);

const Header: React.FC = () => (
  <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
      <img
        src={logo}
        alt="Logo Lise Barbey"
        style={{ height: '130px', width: '80px', marginRight: '1rem' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2, color: '#bf2849' }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>Lise</p>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>Barbey</p>
        <FlowerIcon />
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>Leeloo</p>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>Dallas</p>
      </div>
    </Link>

    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/about">À propos</Link>
      <Link to="/projects">Projets</Link>
      <Link to="/cv">CV</Link>
    </nav>
  </header>
);

export default Header;
