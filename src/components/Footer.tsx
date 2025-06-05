import React from 'react';

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
        <stop offset="0%" stopColor="#fbd6e3" />       {/* --rose */}
        <stop offset="100%" stopColor="#c18fff" />      {/* --violet */}
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
    <circle cx="100" cy="100" r="20" fill="#5a2e99" /> {/* --text-main */}
  </svg>
);

const Footer: React.FC = () => (
  <footer className="footer" style={{ textAlign: 'center', color: '#5a2e99' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        lineHeight: 1.2,
        color: '#5a2e99',
      }}
    >
      {/* Lise + Barbey */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>©Lise</p>
        <p style={{ margin: 0 }}>Barbey</p>
      </div>

      {/* Fleur */}
      <FlowerIcon />

      {/* Leeloo + Dallas */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>Leeloo</p>
        <p style={{ margin: 0 }}>Dallas</p>
      </div>
    </div>
  </footer>
);

export default Footer;
