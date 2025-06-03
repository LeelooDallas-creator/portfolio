import React, { useState } from 'react';
import Lise from '../assets/IMG_8090.jpg';

const Hero: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      style={{
        display: 'flex',
        gap: '20px',
        padding: '4rem 2rem',
        background: 'var(--bg-main)',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
        borderRadius: '1rem',
        margin: '2rem 0',
      }}
    >
      {/* Colonne gauche : texte */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '18px',
          boxSizing: 'border-box',
          height: '100%',
          width: '50%',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '2.8rem',
              color: 'var(--text-main)',
              margin: 0,
              marginBottom: '1rem',
              textAlign: 'left',
              width: '100%',
            }}
          >
            Bienvenue sur mon portfolio
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#6d4e99',
              margin: 0,
              marginBottom: '2rem',
              maxWidth: '100%',
              textAlign: 'left',
            }}
          >
            Découvrez mes projets, mon parcours et mes passions dans un univers moderne et créatif aux tons roses et violets.
          </p>
        </div>
      </div>

      {/* Colonne droite : image avec flip */}
      <div
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            perspective: '1000px',
            width: '100%',
            maxWidth: '400px',
            height: '500px',
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
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: '#6d4e99',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1rem',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <p>
                Je suis passionnée de développement web, toujours curieuse d’apprendre et de créer des expériences immersives. 👩‍💻
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
