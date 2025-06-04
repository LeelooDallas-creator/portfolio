// components/ContactAside.tsx
import React from 'react';

const ContactAside: React.FC = () => {
  return (
    <aside
      style={{
        flexShrink: 0,
        width: '300px',
        padding: '1.5rem',
        borderRadius: '1rem',
        backgroundColor: '#f9eaff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: '2rem',
        height: 'fit-content',
      }}
    >
      <h2 style={{ color: '#5a2e99' }}>Contact</h2>
      <p>
        📧 <strong>Email :</strong>{' '}
        <a href="mailto:barbeylise@gmail.com" style={{ color: '#7a5ab6' }}>
          barbeylise@gmail.com
        </a>
      </p>
      <p>
        📞 <strong>Téléphone :</strong>{' '}
        <a href="tel:0633660338" style={{ color: '#7a5ab6' }}>
          06 33 66 03 38
        </a>
      </p>
      <p>
        📍 <strong>Localisation :</strong>{' '}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rennes+Saint-Malo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#7a5ab6' }}
        >
          Rennes / Saint-Malo
        </a>
      </p>
      <p>
        💼 <strong>LinkedIn :</strong>{' '}
        <a
          href="https://www.linkedin.com/in/lise-barbey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#7a5ab6' }}
        >
          Lise Barbey
        </a>
      </p>
      <p>
        💻 <strong>GitHub :</strong>{' '}
        <a
          href="https://github.com/LeelooDallas-creator"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#7a5ab6' }}
        >
          LeelooDallas
        </a>
      </p>
    </aside>
  );
};

export default ContactAside;
