import React from 'react';

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio personnel',
    description: 'Ce site même ! Conçu pour refléter mon univers graphique avec React et amour.',
    link: 'https://example.com',
  },
  {
    title: 'Application to do ',
    description: "Ma première to do list, simple et efficace.",
    link: 'https://tinylist.netlify.app/',
  },
  {
    title: "L'aillomètre d'Antrain",
    description: "Il y a dans la vallée du Couesnon une petite ville qui sent presque toujours l'ail. J'ai donc créé un petit site pour que les habitants ou les voyageurs de passage puissent connaître le taux d'ail dans l'air.",
    link: 'https://aillometre.netlify.app/',
  },
  {
    title: "Horizon Slavia",
    description: "Horizon Slavia est une agence de voyage fictive crée par Lena Berthelin-Sannier, étudiante en tourisme au Canada. Pour ses études, Elle a inventé une agence de voyages hauts de gammes, permettant de découvrir le monde à travers un prisme mystérieux et envoutant.",
    link: 'https://aillometre.netlify.app/',
  },
   {
    title: "Ameteo",
    description: "Ame (雨, pluie en japonais) est un petit lapin adorable qui t’accompagne chaque jour pour te présenter la météo avec douceur, charme et style. Dans cette application girly, la météo prend vie à travers Ame, qui change de tenue et d'expression selon le temps qu'il fait dehors",
    link: 'https://aillometre.netlify.app/',
  },
  {
    title: 'Application Mega to do ',
    description: "Ma To-Do List Girly est une application web simple, intuitive et esthétique développée avec React et TypeScript.",
    link: 'https://megapinkytodo.netlify.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <main style={{ maxWidth: '1000px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{
        fontFamily: 'var(--font-title)',
        fontSize: '2.5rem',
        textAlign: 'center',
        color: 'var(--text-main)',
        marginBottom: '3rem'
      }}>
        Mes projets
      </h1>

      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            background: 'var(--rose)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-title)',
                color: 'var(--violet)',
              }}>
                {proj.title}
              </h2>
              <p style={{ color: '#5a2e99', fontSize: '1rem', lineHeight: 1.6 }}>
                {proj.description}
              </p>
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1.5rem',
                alignSelf: 'flex-start',
                backgroundColor: 'var(--violet)',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Voir le projet →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
