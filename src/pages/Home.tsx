import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <main style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'var(--font-body)',
    }}>
      <Hero />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        <Card title="À propos de moi">
          Passionnée par le développement web, j'aime créer des interfaces élégantes et intuitives avec un style doux, féminin et moderne.
        </Card>
        <Card title="Mes projets">
          Consultez mes dernières réalisations web, allant de sites vitrines aux applications complexes.
        </Card>
        <Card title="Contact">
          Je suis disponible pour des missions freelance, un CDI ou une alternance dans une équipe créative.
        </Card>
      </div>
    </main>
  );
};

export default Home;
