import React, { useState, useEffect } from 'react';
import ContactAside from '../components/ContactAside';

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <h2 style={subtitleStyle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '▼' : '▶'} {title}
      </h2>
      {isOpen && <div>{children}</div>}
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
        >
          <h1
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
            Je suis Lise Barbey, développeuse fullstack passionnée de web, de science-fiction et d'aéronautique.<br />
            Mon parcours m’a menée des lettres modernes jusqu’à l’informatique, avec une spécialisation en Humanités
            Numériques et développement web.<br /><br />
            Je suis persévérante, curieuse et créative. J’aime construire des projets qui ont du sens, visuellement
            élégants et techniquement solides. Je travaille actuellement en alternance chez Studio Web Crafters, à
            Saint-Malo.
          </p>

          {/* Accordion Sections */}
          <AccordionSection title="❧ Mon parcours & sensibilité">
            <p style={paragraphStyle}>
              Je suis développeuse fullstack, avec une préférence marquée pour le back-end...
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Compétences & outils">
            <p style={paragraphStyle}>
              Aujourd’hui, je travaille en fullstack...
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Accessibilité & inclusion">
            <p style={paragraphStyle}>
              L’accessibilité est une valeur essentielle pour moi...
            </p>
          </AccordionSection>

          <AccordionSection title="❧ Approche & vision">
            <p style={paragraphStyle}>
              Comprendre les besoins réels des utilisateurs...
            </p>
            <p style={paragraphStyle}>
              Curieuse et toujours en apprentissage...
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
