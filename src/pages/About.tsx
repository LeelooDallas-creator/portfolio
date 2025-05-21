import React from 'react';

const About: React.FC = () => {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <section style={{
        background: 'var(--rose)',
        padding: '3rem',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-title)',
          fontSize: '2.5rem',
          color: 'var(--text-main)',
          marginBottom: '1.5rem',
        }}>
          À propos de moi
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#5a2e99', lineHeight: '1.8' }}>
          Je suis Lise Barbey, développeuse fullstack passionnée de web, de science-fiction et d'aéronautique.
          Mon parcours m’a menée des lettres modernes jusqu’à l’informatique, avec une spécialisation en Humanités Numériques et développement web.
          <br /><br />
          Je suis persévérante, curieuse et créative. J’aime construire des projets qui ont du sens, visuellement élégants et techniquement solides.
          Je travaille actuellement en alternance chez Studio Web Crafters, à Saint-Malo.
        </p>
      </section>
    </main>
  );
};

export default About;
