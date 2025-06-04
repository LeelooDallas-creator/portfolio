import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import FlowerBorder from '../components/FlowerBorder/FlowerBorder';

const Home: React.FC = () => {
  return (
    <main style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'var(--font-body)',
    }}>
     <FlowerBorder />
      <Hero />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        <Card title="À propos de moi" href='/about'>
          Passionnée par le développement web, j'aime créer des interfaces élégantes et intuitives avec un style doux, féminin et moderne.
        </Card>
        <Card title="Mes projets" href='/projects'>
          Consultez mes dernières réalisations web, allant de sites vitrines aux applications complexes.
        </Card>
       <Card title="Mon Parcours" href='/cv'>
        Découvrez mon cheminement professionnel et académique, de mes études en littérature à ma reconversion passionnée dans le développement web.
      </Card>
      </div>
    </main>
  );
};

export default Home;
