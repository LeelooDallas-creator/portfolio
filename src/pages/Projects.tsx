import { useEffect, useState } from 'react';
import ContactAside from '../components/ContactAside';

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio personnel',
    description: 'Ce site même ! Conçu pour refléter mon univers graphique avec React et amour.',
    link: 'https://portfolio-leeloo-dallas.netlify.app',
  },
  {
    title: 'Application to do ',
    description: "Ma première to do list, simple et efficace.",
    link: 'https://tinylist.netlify.app/',
  },
  {
    title: "L'aillomètre d'Antrain",
    description: "Un site pour connaître le taux d’ail dans l’air à Antrain, vallée du Couesnon.",
    link: 'https://aillometre.netlify.app/',
  },
  {
    title: "Horizon Slavia",
    description: "Une agence fictive de voyages mystérieux imaginée par Lena Berthelin-Sannier.",
    link: '',
  },
  {
    title: "Ameteo",
    description: "Une app météo kawaii avec un petit lapin qui adapte sa tenue au temps.",
    link: '',
  },
  {
    title: 'Application Mega to do ',
    description: "Une To-Do List girly développée avec React et TypeScript.",
    link: 'https://megapinkytodo.netlify.app/',
  },
];

const Projects: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Animations & responsive layout */}
      <style>{`
        .card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .card.animate {
          opacity: 1;
          transform: translateY(0);
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .projects-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1rem;
          gap: 2rem;
        }
        @media (max-width: 960px) {
          .projects-container {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      <div className="projects-container">
        <main style={{ flex: 1 }}>
          <h1
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '2.5rem',
              textAlign: 'center',
              color: 'var(--text-main)',
              marginBottom: '3rem',
            }}
          >
            Mes projets
          </h1>

          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {projects.map((proj, idx) => {
              const isDisabled = !proj.link;

              return (
                <article
                  key={idx}
                  role="listitem"
                  data-testid={`project-card-${idx}`}
                  className={`card ${animate ? 'animate' : ''}`}
                  style={{
                    background: 'var(--rose)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transitionDelay: animate ? `${idx * 100}ms` : undefined,
                  }}
                  tabIndex={0}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-title)',
                        color: 'var(--violet)',
                      }}
                    >
                      {proj.title}
                    </h2>
                    <p style={{ color: '#5a2e99', fontSize: '1rem', lineHeight: 1.6 }}>
                      {proj.description}
                    </p>
                  </div>

                  {isDisabled ? (
                    <span
                      aria-disabled="true"
                      style={{
                        marginTop: '1.5rem',
                        alignSelf: 'flex-start',
                        backgroundColor: '#ccc',
                        color: '#666',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        cursor: 'not-allowed',
                      }}
                    >
                      Lien désactivé
                    </span>
                  ) : (
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
                  )}
                </article>
              );
            })}
          </section>
        </main>

        <aside style={{ flexShrink: 0 }}>
          <ContactAside />
        </aside>
      </div>
    </>
  );
};

export default Projects;
