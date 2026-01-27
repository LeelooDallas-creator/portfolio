import { useState, useEffect } from 'react';
import ContactAside from '../components/ContactAside';

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionId = title.replace(/\s+/g, '-').toLowerCase();

  const subtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '1.5rem 0 1rem',
    color: '#5a2e99',
    fontFamily: 'var(--font-title)',
    paddingLeft: '0.5rem',
    letterSpacing: '0.5px',
    cursor: 'pointer' as const,
  };

  return (
    <div>
      <h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`section-${sectionId}`}
          style={{
            ...subtitleStyle,
            background: 'none',
            border: 'none',
            padding: 0,
            width: '100%',
            textAlign: 'left',
          }}
        >
          {isOpen ? '▼' : '▶'} {title}
        </button>
      </h2>
      <div id={`section-${sectionId}`} hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paragraphStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#5a2e99',
    lineHeight: '1.8',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 1rem',
        gap: '2rem',
      }}
    >
      <main style={{ flex: 1 }}>
        <section
          style={{
            background: 'var(--rose)',
            padding: isMobile ? '2rem' : '3rem',
            borderRadius: '1rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
            marginBottom: '2rem',
          }}
          aria-labelledby="about-title"
        >
          <h1
            id="about-title"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: isMobile ? '2rem' : '2.5rem',
              color: 'var(--text-main)',
              marginBottom: '1.5rem',
            }}
          >
            À propos de moi
          </h1>

          <p style={paragraphStyle}>
            Je suis Lise Barbey, développeuse fullstack passionnée d'aéronautique.<br />
            Mon parcours m'a menée des lettres modernes jusqu'à l'informatique, avec une spécialisation en Humanités
            Numériques et développement web.<br /><br />
            Persévérante, curieuse et créative, j'aime construire des solutions qui ont du sens, techniquement solides
            et pensées pour durer. Je m'oriente aujourd'hui vers le Product Lifecycle Management (PLM) et les métiers
            de Technical Consultant / Application Engineer, où mes compétences fullstack rencontrent les enjeux
            de gestion du cycle de vie produit.
          </p>

          {/* Accordion Sections */}
          <AccordionSection title="❧ Mon parcours & sensibilité">
            <p style={paragraphStyle}>
              Développeuse fullstack avec une affinité marquée pour le back-end, j'aime concevoir des architectures
              à la fois solides et élégantes. Passionnée depuis toujours par l'architecture et les arts
              sous toutes leurs formes, j'intègre cette sensibilité à mon travail pour créer des systèmes fonctionnels
              et bien structurés. C'est cette même rigueur qui me pousse vers des environnements où la structuration
              de l'information et la fiabilité des données sont essentielles.
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Compétences & outils">
            <p style={paragraphStyle}>
              Mon socle technique couvre JavaScript, TypeScript, React, Node.js, PHP et SQL, avec des outils
              comme Drizzle ORM et Neon pour la gestion de données. Je pratique les tests automatisés, le CI/CD,
              l'intégration d'API REST et l'automatisation de workflows (n8n). J'élargis actuellement mon
              périmètre vers C++, Java et l'infrastructure cloud (Terraform, AWS).
            </p>
            <p style={paragraphStyle}>
              Au-delà du code, je m'appuie sur des méthodes agiles (Scrum, backlogs via Linear, Notion, Trello)
              et sur une solide capacité de rédaction technique héritée de mon parcours en lettres. La modélisation
              de données (MCD/MLD) et l'accessibilité (WCAG, RGAA) complètent mon profil. Je parle anglais
              couramment, russe (LV1 scolaire), et j'apprends l'espagnol.
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Accessibilité & inclusion">
            <p style={paragraphStyle}>
              L'accessibilité est une valeur essentielle pour moi : je m'efforce de concevoir des sites et applications
              inclusifs, utilisables par tous quelles que soient leurs contraintes. Concrètement, je travaille avec
              du HTML sémantique, des attributs ARIA, et je teste mes interfaces avec Lighthouse et axe. Je suis
              attentive au contraste, à la navigation clavier et à la compatibilité avec les lecteurs d'écran.
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Approche & vision">
            <p style={paragraphStyle}>
              Comprendre les besoins réels des utilisateurs pour concevoir des solutions durables, alliant rigueur
              technique et accessibilité, est au centre de ma démarche. Je suis particulièrement attirée par les
              environnements où l'on gère nomenclatures (BOM), configurations produit et processus de change
              management, en lien étroit avec les équipes métiers – ingénierie, qualité, production.
            </p>
            <p style={paragraphStyle}>
              Curieuse et toujours en apprentissage, j'apprécie expérimenter de nouvelles approches et collaborer avec
              des équipes pluridisciplinaires. Ce portfolio reflète mes projets, mes réussites, mais aussi les défis
              qui ont nourri mon expérience et orienté ma vision vers le consulting technique et l'ingénierie
              applicative.
            </p>
          </AccordionSection>
        </section>
      </main>

      {!isMobile && <ContactAside />}
      {isMobile && (
        <div style={{ marginTop: '2rem' }}>
          <ContactAside />
        </div>
      )}
    </div>
  );
};

export default About;
