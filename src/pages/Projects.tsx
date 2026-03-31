import { useEffect, useState } from 'react';
import ContactAside from '../components/ContactAside';

type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  wip?: boolean;
};

const projects: Project[] = [
  {
    title: 'BOM Manager – Nomenclature aéronautique',
    description:
      'Gestionnaire de nomenclature produit (BOM) pour un drone : arborescence de pièces, gestion de révisions, traçabilité des modifications et cycle de vie.',
    link: '',
    tags: ['PLM', 'React', 'TypeScript', 'PostgreSQL'],
    wip: true,
  },
  {
    title: 'Portfolio personnel',
    description: 'Ce site même — conçu pour refléter mon univers avec React, TypeScript et une attention aux détails.',
    link: 'https://portfolio-leeloo-dallas.netlify.app',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'Application to do',
    description: 'Ma première to-do list, simple et efficace.',
    link: 'https://tinylist.netlify.app/',
    tags: ['JavaScript', 'CSS'],
  },
  {
    title: "L'aillomètre d'Antrain",
    description: "Un site pour connaître le taux d'ail dans l'air à Antrain, vallée du Couesnon.",
    link: 'https://aillometre.netlify.app/',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Horizon Slavia',
    description: "Une agence fictive de voyages mystérieux imaginée par Lena Berthelin-Sannier.",
    link: 'https://horizon-slavia.netlify.app/',
    tags: ['HTML', 'CSS', 'Design'],
  },
  {
    title: 'Ameteo',
    description: "Une app météo kawaii avec un petit lapin qui adapte sa tenue au temps.",
    link: '',
    tags: ['React', 'API'],
    wip: true,
  },
  {
    title: 'Application Mega to do',
    description: 'Une To-Do List développée avec React et TypeScript.',
    link: 'https://megapinkytodo.netlify.app/',
    tags: ['React', 'TypeScript'],
  },
];

const Projects: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .proj-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .proj-card.animate {
          opacity: 1;
          transform: translateY(0);
        }
        .proj-card:hover {
          border-color: var(--border-mid) !important;
          box-shadow: 0 8px 32px rgba(124,58,237,0.18) !important;
          transform: translateY(-4px);
        }
        .proj-card:hover .top-line {
          opacity: 1 !important;
        }
        .projects-layout {
          display: flex;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 2rem;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .projects-layout { flex-direction: column; }
        }
      `}</style>

      <div className="projects-layout">
        <main style={{ flex: 1 }}>
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-eyebrow">Réalisations</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              MES <span className="glow-text">PROJETS</span>
            </h1>
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {projects.map((proj, idx) => {
              const isDisabled = !proj.link;
              return (
                <article
                  key={idx}
                  role="listitem"
                  data-testid={`project-card-${idx}`}
                  className={`proj-card${animate ? ' animate' : ''}`}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transitionDelay: animate ? `${idx * 80}ms` : undefined,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  tabIndex={0}
                >
                  <div
                    className="top-line"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, var(--violet-mid), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    aria-hidden="true"
                  />

                  <div>
                    {proj.wip && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            color: '#fbbf24',
                            background: 'rgba(251,191,36,0.1)',
                            border: '1px solid rgba(251,191,36,0.25)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.2rem 0.5rem',
                          }}
                        >
                          WIP · EN COURS
                        </span>
                      </div>
                    )}

                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: 'var(--violet-bright)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {proj.title}
                    </h2>

                    <p style={{ fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {proj.description}
                    </p>

                    {proj.tags && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {proj.tags.map((t, i) => (
                          <span key={i} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {isDisabled ? (
                    <span className="project-link-disabled">Lien désactivé</span>
                  ) : (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Voir le projet ${proj.title}`}
                    >
                      Voir le projet →
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </main>

        <aside>
          <ContactAside />
        </aside>
      </div>
    </>
  );
};

export default Projects;
