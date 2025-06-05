import React, { useState, useEffect } from 'react';
import Lise from '../assets/IMG_8090.jpg';
import ContactAside from './ContactAside';

const Hero: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [hoverVoirPlus, setHoverVoirPlus] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section
      data-testid="hero"
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '20px',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        background: 'var(--bg-main)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1rem',
        margin: '2rem 0',
      }}
    >
      {/* Colonne gauche */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          borderRadius: '18px',
          boxSizing: 'border-box',
          width: isMobile ? '100%' : '50%',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <div style={{ width: '100%' }}>
          <h1
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: isMobile ? '2rem' : '2.8rem',
              color: 'var(--text-main)',
              margin: 0,
              marginBottom: '1rem',
            }}
          >
            BREF, je cherche un poste junior
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#6d4e99',
              margin: 0,
              marginBottom: '2rem',
            }}
          >
            Découvrez mes projets, mon parcours et mes passions dans un univers moderne et créatif.
          </p>

          <ContactAside />
        </div>
      </div>

      {/* Colonne droite */}
      <div
        style={{
          width: isMobile ? '100%' : '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: isMobile ? '2rem' : 0,
        }}
      >
        <div
          style={{
            perspective: '1000px',
            width: '100%',
            maxWidth: isMobile ? '300px' : '400px',
            height: isMobile ? '400px' : '500px',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s ease',
              borderRadius: '1rem',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
          >
            {/* Face avant */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}
            >
              <img
                src={Lise}
                alt="Illustration développeuse"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Face arrière */}
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: '#6d4e99',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                padding: '2rem 1rem',
                textAlign: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                justifyContent: 'center',
                gap: '1rem',
                boxSizing: 'border-box',
              }}
              onMouseEnter={() => setHoverVoirPlus(true)}
              onMouseLeave={() => setHoverVoirPlus(false)}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <p>Je suis passionnée de développement back-end, et j'ai aussi beaucoup d'attrait pour le fullstack.</p>
                <p>Ce qui m'intéresse et me porte est l'idée de construire un projet de A à Z.</p>
                <p>Je suis toujours curieuse d’apprendre et de créer des expériences immersives. 👩‍💻</p>
              </div>

              <strong
                style={{
                  marginTop: 'auto',
                  display: 'block',
                  textDecoration: hoverVoirPlus ? 'underline' : 'none',
                  alignSelf: 'center',
                  fontSize: '1.1rem',
                }}
              >
                Voir plus
              </strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
