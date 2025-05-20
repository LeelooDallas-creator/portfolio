import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #C18FFF 0%, #F7C6D5 100%)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        marginBottom: '3rem',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(193, 143, 255, 0.3)',
      }}
    >
      <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '3rem', margin: 0, textShadow: '2px 2px 6px rgba(0,0,0,0.2)' }}>
        Créativité & Modernité
      </h1>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.2rem', marginTop: '1rem', fontWeight: 500, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textShadow: '1px 1px 4px rgba(0,0,0,0.15)' }}>
        Un portfolio qui allie douceur des couleurs roses et violettes avec un design moderne et épuré.
      </p>
    </section>
  );
};

export default Hero;
