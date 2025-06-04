import React, { useState } from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  href: string;  // <-- ajouter une prop href
}

const Card: React.FC<CardProps> = ({ title, children, href }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: 'var(--rose)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: hover
            ? '0 15px 30px rgba(0,0,0,0.15)'
            : '0 10px 20px rgba(0,0,0,0.05)',
          marginBottom: '2rem',
          maxWidth: '100%',
          transform: hover ? 'scale(1.05) translateZ(20px)' : 'scale(1) translateZ(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.8rem',
            color: 'var(--text-main)',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#4b3b73',
          }}
        >
          {children}
        </div>
      </div>
    </a>
  );
};

export default Card;
