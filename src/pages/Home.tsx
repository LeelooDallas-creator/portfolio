import React from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <main style={{ maxWidth: 900, margin: '3rem auto', padding: '0 1rem' }}>
      <Hero />

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", color: '#C18FFF', fontWeight: 700, fontSize: '2rem' }}>
          Bienvenue sur mon portfolio
        </h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.1rem', color: '#5a2e99', maxWidth: 600 }}>
          Découvrez mes projets créatifs et mon parcours professionnel dans un univers doux et moderne aux tons roses et violets.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <section style={{ flex: 1, minWidth: '280px' }}>
          <Card title="À propos de moi">
            Passionnée par le développement web, j'aime créer des interfaces élégantes et intuitives, avec un style moderne et féminin.
          </Card>
        </section>

        <section style={{ flex: 1, minWidth: '280px' }}>
          <Card title="Mes projets">
            N'hésitez pas à me contacter pour discuter de projets ou collaborations. Je suis toujours ouverte aux nouvelles opportunités !
          </Card>
        </section>

        <section style={{ flex: 1, minWidth: '280px' }}>
          <Card title="Contactez-moi">
            N'hésitez pas à me contacter pour discuter de projets ou collaborations. Je suis toujours ouverte aux nouvelles opportunités !
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Home;
