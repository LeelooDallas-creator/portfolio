import { useEffect, useRef, useState } from 'react';
import ContactAside from '../components/ContactAside';

const CV: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);

  const sectionsRefs = {
    competences: useRef<HTMLElement>(null),
    exp:         useRef<HTMLElement>(null),
    formation:   useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((v) => ({ ...v, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionsRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = (id: string): React.CSSProperties => ({
    opacity: visibleSections[id] ? 1 : 0,
    transform: visibleSections[id] ? 'none' : 'translateY(28px)',
    transition: 'opacity 0.55s ease, transform 0.55s ease',
  });

  const experiences = [
    {
      year: '2025',
      role: 'Développeuse Full-stack en alternance',
      company: 'Studio Web Crafters, Saint-Malo',
      tech: 'Astro · React',
      description: "Développement front-end et back-end de sites web ; collaboration en équipe agile ; interfaces dynamiques et performantes.",
    },
    {
      year: '2023/2024',
      role: 'Monitrice informatique',
      company: 'DSI, Rennes 2',
      tech: 'Support · Adobe · Suite Office · Gimp',
      description: "Assistance technique multi-public : wifi, virus, ENT, bureautique. Polyvalence linguistique (EN, ES, RU, LSF).",
    },
    {
      year: '2022/2023',
      role: 'Bénévolat',
      company: 'Festival Transversales, Université Rennes 2',
      description: "Organisation d'événements, planification, accueil public et invités, travail d'équipe.",
    },
    {
      year: '2022',
      role: 'Stage',
      company: 'Sodi-Art Editions, Paris 75',
      tech: 'Adobe · Suite Office',
      description: "Rigueur, apprentissage rapide, travail d'équipe.",
    },
    {
      year: '2022',
      role: 'Bénévolat',
      company: "Festival L'Ouest Hurlant",
      description: "Accueil, gestion de foule, librairie, communication auteurs/libraires.",
    },
  ];

  const formations = [
    {
      year: '2024',
      title: 'Formation Développeuse fullstack',
      detail: 'HTML, CSS, JS, SQL, React, Node.js',
      school: '3W Academy · Télé-présentiel',
    },
    {
      year: '2023–2024',
      title: "M1 d'Humanités Numériques",
      detail: 'Notion, WordPress, HTML, CSS',
      school: 'Université Rennes 2',
    },
    {
      year: '2022–2024',
      title: 'Master Littérature Générale et Comparée',
      detail: 'HTML, CSS, WordPress, Trello',
      school: 'Université Rennes 2 / University College of Dublin (6 mois)',
    },
    {
      year: '2019–2022',
      title: 'Licence Lettres Modernes – Bibliothèques & Édition',
      detail: 'HTML, CSS, Canva',
      school: 'Université Rennes 2',
    },
    {
      year: '2014–2017',
      title: 'Bac L + BIA (Brevet d\'Initiation Aéronautique)',
      detail: 'LV1 russe',
      school: 'Lycée Marie Curie, Sceaux 92',
    },
  ];

  const skills = [
    { category: 'Langages',                 detail: 'JavaScript · TypeScript · SQL · HTML · CSS · C++ (apprentissage) · Java (apprentissage) · Python (apprentissage) · Perl (apprentissage)' },
    { category: 'Frameworks & librairies',  detail: 'React · React Router · Node.js · Astro · Vite · Drizzle ORM' },
    { category: 'Outils & environnement',   detail: 'Git · Docker · Neon (Postgres serverless) · API REST · webhooks · n8n · Terraform · AWS (apprentissage)' },
    { category: 'Tests & CI/CD',            detail: 'Vitest · Testing Library · GitLab CI · GitHub Actions · déploiement automatisé' },
    { category: 'Gestion de projet',        detail: 'Trello · Notion · Linear · GitLab/GitHub Issues · Scrum' },
    { category: 'Documentation',            detail: "Rédaction technique · spécifications fonctionnelles · cahiers des charges · MCD/MLD" },
    { category: 'Orientation PLM',          detail: "Modélisation de données · structuration d'information produit · gestion de versions · BOM · cycle de vie" },
    { category: 'Accessibilité',            detail: "WCAG · RGAA · conception inclusive et tests d'accessibilité" },
    { category: 'Langues',                  detail: 'Anglais (B2) · Russe (B1) · Polonais (A1) · Espagnol (notions) · LSF (notions)' },
  ];

  return (
    <>
      <style>{`
        .cv-layout {
          display: flex;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 2rem;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .cv-layout { flex-direction: column; }
        }
      `}</style>

      <div className="cv-layout">
        <main style={{ flex: 1 }}>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Curriculum Vitæ</div>
            <h1
              id="cv-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              LISE BARBEY{' '}
              <span
                style={{
                  color: 'var(--violet-bright)',
                  display: 'block',
                  fontSize: '0.65em',
                  letterSpacing: '0.15em',
                  fontWeight: 400,
                  marginTop: '0.3rem',
                }}
              >
                Développeuse Fullstack · Orientation PLM
              </span>
            </h1>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '640px',
              }}
              aria-describedby="cv-title"
            >
              Passionnée d'informatique, confirmé lors d'un Master d'Humanités Numériques.
              Je m'oriente vers le PLM et les postes de Technical Consultant / Application Engineer,
              idéalement dans l'aéronautique — domaine qui me passionne depuis mon BIA au lycée.
            </p>
          </div>

          {/* Compétences */}
          <section
            id="competences"
            ref={sectionsRefs.competences}
            style={{ marginBottom: '2.5rem', ...sectionStyle('competences') }}
            aria-labelledby="competences-title"
          >
            <h2
              id="competences-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--violet-bright)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--violet-mid)' }}/>
              Compétences
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.map((item, i) => (
                <li key={i} className="cv-item" tabIndex={0}>
                  <div className="cv-item-year">{item.category}</div>
                  <div className="cv-item-sub">{item.detail}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* Expériences */}
          <section
            id="exp"
            ref={sectionsRefs.exp}
            style={{ marginBottom: '2.5rem', ...sectionStyle('exp') }}
            aria-labelledby="exp-title"
          >
            <h2
              id="exp-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--violet-bright)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--violet-mid)' }}/>
              Expériences professionnelles
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {experiences.map((exp, i) => (
                <li
                  key={i}
                  className="cv-item"
                  tabIndex={0}
                  role="group"
                  aria-label={`${exp.year} — ${exp.role}`}
                >
                  <div className="cv-item-year">{exp.year}</div>
                  <div className="cv-item-title">
                    {exp.role}
                    {exp.tech && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--violet-bright)',
                          marginLeft: '0.75rem',
                          background: 'rgba(192,132,252,0.1)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {exp.tech}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      marginTop: '0.2rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {exp.company}
                  </div>
                  <div className="cv-item-sub">{exp.description}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* Formations */}
          <section
            id="formation"
            ref={sectionsRefs.formation}
            style={{ ...sectionStyle('formation') }}
            aria-labelledby="formation-title"
          >
            <h2
              id="formation-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--violet-bright)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--violet-mid)' }}/>
              Formations
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {formations.map((form, i) => (
                <li
                  key={i}
                  className="cv-item"
                  tabIndex={0}
                  role="group"
                  aria-label={`${form.year} — ${form.title}`}
                >
                  <div className="cv-item-year">{form.year}</div>
                  <div className="cv-item-title">{form.title}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--violet-bright)',
                      margin: '0.2rem 0',
                    }}
                  >
                    {form.detail}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {form.school}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {!isMobile && <ContactAside />}
        {isMobile && (
          <div style={{ width: '100%' }}>
            <ContactAside />
          </div>
        )}
      </div>
    </>
  );
};

export default CV;
