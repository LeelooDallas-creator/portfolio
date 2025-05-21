import React from 'react';
import Lise from '../assets/IMG_8090.jpg';

const Hero: React.FC = () => {
  return (
    <section style={{
      display:'flex',
      background: 'var(--bg-main)',
      padding: '4rem 2rem',
      borderRadius: '1rem',
      marginBottom: '3rem',
      textAlign: 'center',
    }}>
      <div>
      <h1 style={{
        fontFamily: 'var(--font-title)',
        fontSize: '2.8rem',
        color: 'var(--text-main)',
        marginBottom: '1rem',
      }}>
        Bienvenue sur mon portfolio
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1.1rem',
        maxWidth: '700px',
        margin: '0 auto',
        color: '#6d4e99',
      }}>
        Découvrez mes projets, mon parcours et mes passions dans un univers moderne et créatif aux tons roses et violets.
      </p>
      </div>
      <div style={{ maxWidth: '300px' }}>
        <img
          src={Lise}
          alt="Illustration développeuse"
          style={{
            width: '100%',
            borderRadius: '1rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
