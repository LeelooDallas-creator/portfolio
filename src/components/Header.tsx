import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.Lise_Barbey.png';

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
        <stop offset="0%" stopColor="#fbd6e3" />
        <stop offset="100%" stopColor="#c18fff" />
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
    <circle cx="100" cy="100" r="20" fill="#5a2e99" />
  </svg>
);

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        flexWrap: 'wrap',
        borderBottom: '1px solid #eee',
      }}
    >
      {/* Logo + Nom */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img
          src={logo}
          alt="Logo Lise Barbey"
          style={{ height: '100px', width: 'auto', marginRight: '1rem' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1.2,
            color: '#5a2e99',
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Lise</p>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Barbey</p>
          </div>
          <FlowerIcon />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Leeloo</p>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Dallas</p>
          </div>
        </div>
      </Link>

      {/* Bouton burger (visible en mobile) */}
      <button
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.8rem',
          display: 'none',
          color: '#5a2e99',
        }}
        className="burger-menu"
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          width: '100%',
          marginTop: '1rem',
          gap: '0.8rem',
        }}
        className="nav-links"
      >
        <Link to="/about" style={{ color: '#5a2e99' }}>À propos</Link>
        <Link to="/projects" style={{ color: '#5a2e99' }}>Projets</Link>
        <Link to="/cv" style={{ color: '#5a2e99' }}>CV</Link>
      </nav>

      {/* Desktop nav (visible en large) */}
      <nav
        style={{
          display: 'flex',
          gap: '1rem',
        }}
        className="nav-desktop"
      >
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/cv">CV</Link>
      </nav>

      {/* Responsive CSS (injecté ici) */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .burger-menu {
            display: block !important;
          }
          .nav-links {
            display: ${menuOpen ? 'flex' : 'none'};
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
