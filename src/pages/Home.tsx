import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import FlowerBorder from '../components/FlowerBorder';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Appel initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main
      aria-labelledby="home-main-title"
      style={{
        maxWidth: isMobile ? '95%' : '1000px',
        margin: '0 auto',
        padding: isMobile ? '1rem' : '2rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      <FlowerBorder />
      <Hero />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem',
        }}
      >
        <Card title="À propos de moi" href="/about">
          Développeuse fullstack en transition vers le PLM, je conçois des solutions techniques
          pensées pour durer, accessibles et orientées métier.
        </Card>
        <Card title="Mes projets" href="/projects">
          Consultez mes dernières réalisations, allant de la classique to do list aux applications
          plus complexes.
        </Card>
        <Card title="Mon Parcours" href="/cv">
          Découvrez mon cheminement professionnel et académique, de mes études en littérature à ma
          reconversion vers le développement et le consulting technique.
        </Card>
      </div>
    </main>
  );
};

export default Home;
