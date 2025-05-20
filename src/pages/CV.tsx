import React from 'react';
import '../styles/globals.css'; // Assure-toi d'importer ton CSS

const CV: React.FC = () => {
  return (
    <main style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontFamily: "'Poppins', sans-serif", color: '#C18FFF', fontWeight: 700, fontSize: '2.5rem' }}>
        Lise BARBEY – Développeuse Fullstack
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#5a2e99' }}>
        Passionnée d'informatique, j'ai découvert le développement grâce à un ami et confirmé cet intérêt lors d’un Master d’Humanités Numériques.
        Aujourd’hui, je souhaite mettre mes compétences au service d’un projet stimulant, avec l’objectif à terme de travailler dans l’aéronautique, un
        domaine qui me passionne depuis le lycée.
      </p>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Expériences professionnelles</h2>
        <ul className="custom-bullet">
          <li>
            <strong>2025</strong> – Développeuse Fullstack en alternance, Studio Web Crafters, Saint-Malo<br />
            <em>Astro, React</em><br />
            Développement front-end et back-end ; conception d’interfaces dynamiques ; travail en équipe agile.
          </li>
          <li>
            <strong>2023–2024</strong> – Monitrice informatique, DSI Rennes 2<br />
            <em>Support, Adobe, Suite Office</em><br />
            Assistance usagers, bureautique, communication multilingue (anglais, espagnol, russe, LSF).
          </li>
          <li>
            <strong>2022</strong> – Stage, Sodi-Art Éditions, Paris<br />
            <em>Adobe, Suite Office</em><br />
            Travail en équipe, rigueur, sens du détail, adaptation rapide.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Formation</h2>
        <ul className="custom-bullet">
          <li><strong>2024–2025</strong> – 3W Academy, Formation Développeuse Fullstack (React, Node JS...)</li>
          <li><strong>2023–2024</strong> – M1 Humanités Numériques, Université Rennes 2 (HTML, Notion, Wordpress...)</li>
          <li><strong>2022–2024</strong> – Master Littérature Générale, Rennes 2 / Dublin</li>
          <li><strong>2019–2022</strong> – Licence Lettres Modernes, Rennes 2</li>
          <li><strong>2014–2017</strong> – Bac L, LV1 russe + BIA, Lycée Marie Curie, Sceaux</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Compétences</h2>
        <ul className="custom-bullet">
          <li>HTML, CSS, JavaScript, PHP, SQL, React, Node.js, Wordpress</li>
          <li>Planification, gestion de projet, contact client</li>
          <li>Adobe, Gimp, Suite Office, Canva</li>
          <li>Conduite jusqu’à 15m³</li>
          <li>Anglais (B2), Russe (A2)</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Centres d’intérêt</h2>
        <ul className="custom-bullet">
          <li>Science-fiction</li>
          <li>Architecture, sculpture, mode</li>
          <li>Codage, poterie, dentelle, musique</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Qualités</h2>
        <p>Persévérante, créative, déterminée, sérieuse, ambitieuse.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>📞 06 33 66 03 38</p>
        <p>
          📧{' '}
          <a href="mailto:barbeylise@gmail.com" style={{ color: '#C18FFF', fontWeight: 600 }}>
            barbeylise@gmail.com
          </a>
        </p>
        <p>🔗 <a href="https://linkedin.com/in/lise-barbey" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></p>
        <p>📍 Rennes / Nantes / Paris — Permis B, véhiculée — Ouverte au télétravail</p>
      </section>
    </main>
  );
};

export default CV;
