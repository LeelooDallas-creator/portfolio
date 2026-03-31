import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Orbit SVG decoration ── */
const OrbitDecoration: React.FC = () => (
  <svg
    viewBox="0 0 420 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', opacity: 0.7 }}
    aria-hidden="true"
  >
    <circle cx="210" cy="210" r="190" stroke="rgba(124,58,237,0.3)" strokeWidth="0.75"/>
    <circle cx="210" cy="210" r="135" stroke="rgba(168,85,247,0.35)" strokeWidth="0.75" strokeDasharray="4 6"/>
    <circle cx="210" cy="210" r="80" stroke="rgba(192,132,252,0.4)" strokeWidth="1"/>
    <circle cx="210" cy="210" r="36" fill="rgba(124,58,237,0.25)"/>
    <circle cx="210" cy="210" r="22" fill="rgba(168,85,247,0.35)"/>
    <circle cx="210" cy="210" r="10" fill="rgba(192,132,252,0.6)"/>
    <circle cx="210" cy="20" r="4" fill="#ec4899"/>
    <circle cx="378" cy="262" r="3" fill="#c084fc"/>
    <circle cx="55" cy="155" r="2.5" fill="#818cf8"/>
    <line x1="0" y1="210" x2="420" y2="210" stroke="rgba(192,132,252,0.08)" strokeWidth="0.5"/>
    <line x1="210" y1="0" x2="210" y2="420" stroke="rgba(192,132,252,0.08)" strokeWidth="0.5"/>
  </svg>
);

/* ── Stat card ── */
const Stat: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
  <div
    className="fade-in-up"
    style={{
      animationDelay: `${delay}ms`,
      opacity: 0,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '1rem 1.25rem',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.6rem',
        fontWeight: 900,
        color: 'var(--violet-bright)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '0.35rem',
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}
    >
      {label}
    </div>
  </div>
);

/* ── Nav card ── */
const NavCard: React.FC<{
  title: string;
  description: string;
  href: string;
  delay: number;
}> = ({ title, description, href, delay }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={href}
      className="fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        display: 'block',
        background: hover ? 'rgba(192,132,252,0.06)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hover ? 'var(--border-mid)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        transform: hover ? 'translateY(-3px)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`Naviguer vers ${title}`}
    >
      <div
        style={{
          height: '1px',
          background: hover
            ? 'linear-gradient(90deg, transparent, var(--violet-mid), transparent)'
            : 'transparent',
          marginBottom: '1.25rem',
          transition: 'background 0.3s ease',
        }}
      />
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: hover ? 'var(--violet-bright)' : 'var(--text-primary)',
          marginBottom: '0.75rem',
          transition: 'color 0.2s ease',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {description}
      </p>
      <div
        style={{
          marginTop: '1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--violet-bright)',
          letterSpacing: '0.08em',
        }}
      >
        {hover ? '——→ EXPLORER →' : '——→ EXPLORER'}
      </div>
    </Link>
  );
};

/* ── Home page ── */
const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const tags = [
    { label: 'Fullstack Dev', active: true },
    { label: 'PLM · Aerospace +', active: true },
    { label: 'API & Intégration', active: true },
    { label: '+ Winx Tech Club', active: true },
    { label: 'CI/CD', active: false },
    { label: 'Accessibilité', active: false },
    { label: 'Agile', active: false },
  ];

  return (
    <main
      aria-labelledby="home-main-title"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(300px, 55%, 620px) 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}
        aria-labelledby="home-main-title"
      >
        {/* Left column */}
        <div>
          <div
            className="status-badge fade-in-up"
            style={{ marginBottom: '2rem', opacity: 0, display: 'inline-flex' }}
          >
            <span className="status-dot" />
            Dev Fullstack en transition vers le PLM · Aéronautique
          </div>

          <h1
            id="home-main-title"
            className="fade-in-up delay-1"
            style={{ opacity: 0, marginBottom: '0.5rem', color: 'var(--text-primary)' }}
          >
            LISE{' '}
            <span className="glow-text">BARBEY</span>
          </h1>

          <p
            className="fade-in-up delay-2"
            style={{
              opacity: 0,
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}
          >
            "L'humaine dans la machine"
          </p>

          <p
            className="fade-in-up delay-2"
            style={{
              opacity: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            React · Node.js · TypeScript · PostgreSQL
          </p>

          <p
            className="fade-in-up delay-2"
            style={{
              opacity: 0,
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '480px',
              marginBottom: '2.25rem',
            }}
          >
            Développeuse fullstack en transition vers le PLM —
            je conçois des solutions robustes pensées pour les équipes métier,
            avec une sensibilité particulière pour l'aéronautique et les
            environnements exigeants.
          </p>

          <div
            className="fade-in-up delay-3"
            style={{
              opacity: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {tags.map((t, i) => (
              <span key={i} className={`tag${t.active ? ' active' : ''}`}>{t.label}</span>
            ))}
          </div>

          <div
            className="fade-in-up delay-4"
            style={{ opacity: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none' }}>
              → Mes projets
            </Link>
            <Link to="/cv" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Télécharger le CV
            </Link>
          </div>
        </div>

        {/* Right column – orbit */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '400px',
            width: '100%',
            aspectRatio: '1',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          <OrbitDecoration />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ marginBottom: '4rem' }} aria-label="Chiffres clés">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
          }}
        >
          <Stat value="7+"  label="Projets livrés"     delay={100} />
          <Stat value="2+"  label="Ans d'expérience"   delay={150} />
          <Stat value="BIA" label="Brevet Aéro."       delay={200} />
          <Stat value="3"   label="Langues"            delay={250} />
          <Stat value="PLM" label="Orientation cible"  delay={300} />
        </div>
      </section>

      {/* ── NAV CARDS ── */}
      <section aria-label="Sections du portfolio">
        <div className="section-eyebrow">Navigation</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <NavCard
            title="À propos de moi"
            description="Parcours atypique des lettres modernes à l'ingénierie applicative. Sensibilité technique, rigueur et vision orientée métier."
            href="/about"
            delay={100}
          />
          <NavCard
            title="Mes projets"
            description="Portfolio, BOM Manager aéronautique, apps React/TypeScript — du code pensé pour durer."
            href="/projects"
            delay={200}
          />
          <NavCard
            title="Mon Parcours"
            description="Lettres → Humanités Numériques → Fullstack → PLM / Technical Consultant. Un cheminement qui a du sens."
            href="/cv"
            delay={300}
          />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section:first-of-type {
            grid-template-columns: 1fr !important;
          }
          section:first-of-type > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
