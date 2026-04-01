import { useState, useEffect } from 'react';
import ContactAside from '../components/ContactAside';
import LisePhoto from '../assets/Lise_Barbey.png';

type AccordionSectionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, isOpen, onToggle, children }) => {
  const sectionId = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <div>
      <h2 style={{ margin: 0 }}>
        <button
          className="accordion-btn"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`section-${sectionId}`}
        >
          <span>{title}</span>
          <span className="chevron">▶</span>
        </button>
      </h2>
      <div
        id={`section-${sectionId}`}
        hidden={!isOpen}
        style={{ paddingBottom: isOpen ? '1.5rem' : 0 }}
      >
        {children}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = (title: string) =>
    setOpenSection(prev => (prev === title ? null : title));

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const bodyStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.75,
    margin: '0.75rem 0 0',
  };

  return (
    <>
      <style>{`
        .about-layout {
          display: flex;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 2rem;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .about-layout { flex-direction: column; }
        }
        @media (max-width: 600px) {
          .intro-panel { flex-direction: column !important; align-items: center !important; text-align: center; }
        }
      `}</style>

      <div className="about-layout">
        <main style={{ flex: 1 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Profil</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
              }}
              id="about-title"
            >
              À PROPOS <span className="glow-text">DE MOI</span>
            </h1>
          </div>

          {/* Intro panel */}
          <div
            className="intro-panel"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)',
              borderLeft: '2px solid var(--violet-mid)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
            aria-labelledby="about-title"
          >
            <img
              src={LisePhoto}
              alt="Portrait de Lise Barbey"
              style={{
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '50%',
                border: '2px solid var(--border-mid)',
                flexShrink: 0,
                boxShadow: '0 0 24px rgba(168,85,247,0.25)',
              }}
            />
            <div>
              <p style={bodyStyle}>
                Je suis <strong>Lise Barbey</strong>, développeuse fullstack passionnée d'aéronautique.
                Mon parcours m'a menée des lettres modernes jusqu'à l'informatique, avec une spécialisation
                en Humanités Numériques et développement web.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1rem' }}>
                Persévérante, curieuse et créative, j'aime construire des solutions qui ont du sens,
                techniquement solides et pensées pour durer. Je m'oriente vers le{' '}
                <strong>Product Lifecycle Management (PLM)</strong> et les métiers de{' '}
                <strong>Technical Consultant / Application Engineer</strong>.
              </p>
            </div>
          </div>

          {/* Accordions */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '0 2rem',
            }}
          >
            <AccordionSection title="Parcours & sensibilité" isOpen={openSection === 'Parcours & sensibilité'} onToggle={() => toggle('Parcours & sensibilité')}>
              <p style={bodyStyle}>
                Développeuse fullstack avec une affinité marquée pour le back-end, j'aime concevoir
                des architectures à la fois solides et élégantes. Passionnée depuis toujours par
                l'architecture et les arts sous toutes leurs formes, j'intègre cette sensibilité à
                mon travail pour créer des systèmes fonctionnels et bien structurés.
              </p>
            </AccordionSection>

            <AccordionSection title="Compétences & outils" isOpen={openSection === 'Compétences & outils'} onToggle={() => toggle('Compétences & outils')}>
              <p style={bodyStyle}>
                Mon socle technique couvre <strong>JavaScript, TypeScript, React, Node.js et SQL</strong>,
                avec des outils comme Drizzle ORM et Neon pour la gestion de données. Je pratique
                les tests automatisés, le CI/CD, l'intégration d'API REST et l'automatisation de
                workflows (n8n). J'élargis mon périmètre vers C++, Java, Python et Perl (en apprentissage) ainsi que le cloud (Terraform, AWS).
              </p>
              <p style={{ ...bodyStyle, marginTop: '0.75rem' }}>
                Au-delà du code, méthodes agiles (Scrum, Linear, Notion, Trello), rédaction technique,
                modélisation de données (MCD/MLD) et accessibilité (WCAG, RGAA) complètent mon profil.
              </p>
            </AccordionSection>

            <AccordionSection title="Accessibilité & inclusion" isOpen={openSection === 'Accessibilité & inclusion'} onToggle={() => toggle('Accessibilité & inclusion')}>
              <p style={bodyStyle}>
                L'accessibilité est une valeur essentielle : HTML sémantique, attributs ARIA, tests
                Lighthouse et axe. Attention portée au contraste, à la navigation clavier et à la
                compatibilité avec les lecteurs d'écran.
              </p>
            </AccordionSection>

            <AccordionSection title="Approche & vision" isOpen={openSection === 'Approche & vision'} onToggle={() => toggle('Approche & vision')}>
              <p style={bodyStyle}>
                Comprendre les besoins réels des utilisateurs pour concevoir des solutions durables —
                rigueur technique et accessibilité au service des équipes métier. Je suis attirée
                par les environnements où l'on gère nomenclatures (BOM), configurations produit et
                processus de change management.
              </p>
              <p style={{ ...bodyStyle, marginTop: '0.75rem' }}>
                Curieuse et toujours en apprentissage, j'apprécie expérimenter de nouvelles
                approches et collaborer avec des équipes pluridisciplinaires.
              </p>
            </AccordionSection>
          </div>
        </main>

        {!isMobile && <ContactAside />}
        {isMobile && (
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <ContactAside />
          </div>
        )}
      </div>
    </>
  );
};

export default About;
