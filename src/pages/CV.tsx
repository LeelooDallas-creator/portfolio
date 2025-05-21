import React from 'react';

const CV: React.FC = () => {
  return (
    <main style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--violet)', fontSize: '2.5rem' }}>
        Lise BARBEY – Développeuse Fullstack
      </h1>

      <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>
        Passionnée d'informatique, j'ai découvert le développement grâce à un ami et confirmé cet intérêt lors d’un Master d’Humanités Numériques...
      </p>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Expériences professionnelles</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>📌 <strong>2025</strong> – Développeuse Fullstack, Studio Web Crafters</li>
          <li>📌 <strong>2023–2024</strong> – Monitrice informatique, DSI Rennes 2</li>
          <li>📌 <strong>2022</strong> – Stage, Sodi-Art Éditions</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Formation</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>📌 3W Academy, Développeuse Fullstack</li>
          <li>📌 Humanités Numériques, Rennes 2</li>
          <li>📌 Master LGC, Rennes 2 / Dublin</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>📞 06 33 66 03 38</p>
        <p>
          📧 <a href="mailto:barbeylise@gmail.com" style={{ color: 'var(--violet)', fontWeight: 600 }}>
            barbeylise@gmail.com
          </a>
        </p>
        <p>🔗 <a href="https://linkedin.com/in/lise-barbey" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></p>
      </section>
    </main>
  );
};

export default CV;
