import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Lise from '../assets/Lise_Barbey.jpg';
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
      aria-labelledby="hero-title"
      role="region"
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
            aria-live="polite"

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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end', // place le texte en bas
                padding: '1rem',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={Lise}
                alt="Illustration développeuse"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <div
                role="note" // indique que c’est une note informative
                aria-label="Slogan sur l’image : La vérité est ailleurs flèche"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  color: '#F0EFFF', // Couleur claire, bon contraste avec violet foncé
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  textShadow: '0 0 8px rgba(0, 0, 0, 0.7)', // ombre renforcée pour lisibilité
                  backgroundColor: 'rgba(109, 78, 153, 0.85)', // fond violet plus opaque pour contraste élevé
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  userSelect: 'none',
                  maxWidth: '90%',
                  textAlign: 'center',
                }}
              >
                La vérité est ailleurs →
              </div>

            </div>

            {/* Face arrière */}
            <Link
              to="/cv"
              aria-label="Vers le CV de Lise Barbey"
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
              onClick={(e) => e.stopPropagation()} // Empêche le clic de retourner la carte si tu as un flip au clic
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
