import React from 'react';

const About: React.FC = () => {
  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#5a2e99',
    lineHeight: '1.8',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '2rem 0 1rem',
    color: '#5a2e99',
    fontFamily: 'var(--font-title)',
    paddingLeft: '0.5rem',
    letterSpacing: '0.5px',
  };

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <section
        style={{
          background: 'var(--rose)',
          padding: '3rem',
          borderRadius: '1rem',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
          marginBottom: '2rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '2.5rem',
            color: 'var(--text-main)',
            marginBottom: '1.5rem',
          }}
        >
          À propos de moi
        </h1>

        <p style={paragraphStyle}>
          Je suis Lise Barbey, développeuse fullstack passionnée de web, de science-fiction et d'aéronautique.<br />
          Mon parcours m’a menée des lettres modernes jusqu’à l’informatique, avec une spécialisation en Humanités
          Numériques et développement web.<br /><br />
          Je suis persévérante, curieuse et créative. J’aime construire des projets qui ont du sens, visuellement
          élégants et techniquement solides. Je travaille actuellement en alternance chez Studio Web Crafters, à
          Saint-Malo.
        </p>

        <h2 style={subtitleStyle}>❧ Mon parcours &amp; sensibilité</h2>
        <p style={paragraphStyle}>
          Je suis développeuse fullstack, avec une préférence marquée pour le back-end, où j’aime concevoir des
          architectures à la fois solides et élégantes. Passionnée depuis toujours par l’architecture et les arts sous
          toutes leurs formes, j’intègre cette sensibilité à mon travail pour créer des systèmes fonctionnels,
          esthétiques et bien structurés. La qualité du code et la résolution précise des problématiques techniques
          sont au cœur de ma démarche.
        </p>

        <h2 style={subtitleStyle}>❧ Compétences &amp; outils</h2>
        <p style={paragraphStyle}>
          Aujourd’hui, je travaille en fullstack, ce qui me permet de suivre un projet de A à Z, de la conception à la
          mise en production. Je maîtrise principalement JavaScript, Astro et React, et je viens de commencer un projet
          en Node.js. Dans le cadre de ma formation, je découvre également PHP ainsi que les bases de données,
          renforçant ainsi mes compétences back-end. En parallèle, je continue à me former sur divers sujets techniques,
          avec pour objectif d’apprendre prochainement le Perl, un langage qui m’intéresse particulièrement.
        </p>

        <h2 style={subtitleStyle}>❧ Accessibilité &amp; inclusion</h2>
        <p style={paragraphStyle}>
          L’accessibilité est une valeur essentielle pour moi : je m’efforce de concevoir des sites et applications
          inclusifs, pensés pour être accessibles et utilisables par tous, quelles que soient leurs contraintes.
        </p>

        <h2 style={subtitleStyle}>❧ Approche &amp; vision</h2>
        <p style={paragraphStyle}>
          Comprendre les besoins réels des utilisateurs pour créer des solutions durables, alliant rigueur technique,
          esthétique et accessibilité, est au centre de mon travail.
        </p>

        <p style={paragraphStyle}>
          Curieuse et toujours en apprentissage, j’apprécie expérimenter de nouvelles approches et collaborer avec des
          équipes passionnées. Ce portfolio reflète mes projets, mes réussites, mais aussi les défis qui ont nourri mon
          expérience et affiné ma vision du développement.
        </p>
      </section>
    </main>
  );
};

export default About;
