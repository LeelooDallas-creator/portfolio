import React, { useEffect, useRef, useState } from 'react';

const CV: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);
  const sectionsRefs = {
    exp: useRef<HTMLElement>(null),
    formation: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((vis) => ({
              ...vis,
              [entry.target.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionsRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const sectionStyle = (id: string) => ({
    marginTop: '2rem',
    opacity: visibleSections[id] ? 1 : 0,
    transform: visibleSections[id] ? 'none' : 'translateY(40px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  });

  const listItemStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    marginBottom: '1rem',
    backgroundColor: 'var(--rose-light, #f9eaff)',
  };

  const handleItemHover = (e: React.MouseEvent<HTMLLIElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(90,46,153,0.15)';
  };

  const handleItemLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--rose-light, #f9eaff)';
  };

  const experiences = [
    {
      year: '2025',
      role: 'Développeuse Full-stack en alternance',
      company: 'Studio Web Crafters, Saint-Malo',
      tech: '(Astro, React)',
      description:
        'Développement front-end et back-end de sites web ; collaboration en équipe agile ; participation à la conception d’interfaces dynamiques et performantes.',
    },
    {
      year: '2023/2024',
      role: 'Monitrice informatique',
      company: 'DSI, Rennes 2',
      tech: '(Support Usager, Adobe, Suite Office, Gimp)',
      description:
        'Se confronter à différents types de publics, à diverses problématiques, pouvoir aider sur des aspects techniques (wifi, virus, ENT) ou bureautique (utilisation de certains logiciels), être multilingue (anglais, espagnol, russe, LSF).',
    },
    {
      year: '2022',
      role: 'Stage',
      company: 'Sodi-Art Editions, Paris (75)',
      tech: '(Adobe, Suite Office)',
      description:
        'Soucis du détail, apprendre vite et bien, travail d’équipe, assumer ses erreurs.',
    },
  ];

  const formations = [
    {
      title: 'Formation Développeuse fullstack (HTML, CSS, JS, PHP, SQL, React, Node JS)',
      school: '3W Academy, Télé-présentiel',
      year: '2024',
    },
    {
      title: 'M1 d’Humanités Numériques (Notion, Wordpress, HTML, CSS)',
      school: 'Université Rennes 2, Rennes (35)',
      year: '2023-2024',
    },
    {
      title: 'Master de Littérature Générale et Comparée (HTLM, CSS, Wordpress, Trello)',
      school: 'Université Rennes 2 / University College of Dublin (6 mois)',
      year: '2022-2024',
    },
    {
      title: 'Licence de Lettres Modernes Parcours Bibliothèques et Edition (HTML, CSS, Canva)',
      school: 'Université Rennes 2, Rennes (35)',
      year: '2019-2022',
    },
    {
      title: 'Bac L, LV1 russe + BIA (Brevet d’Initiation Aéronautique)',
      school: 'Lycée Marie Curie, Sceaux (92)',
      year: '2014-2017',
    },
  ];

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.3rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.4rem',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '0.5rem',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '3rem auto',
          padding: '0 1rem',
          gap: '2rem',
        }}
      >
        <main style={{ flex: 1 }}>
          <h1
            style={{
              fontFamily: 'var(--font-title)',
              color: 'var(--violet)',
              fontSize: '2.5rem',
              userSelect: 'none',
            }}
          >
            Lise BARBEY – Développeuse Fullstack
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>
            Passionnée d'informatique, j'ai découvert le développement grâce à un ami et confirmé cet intérêt lors d’un Master d’Humanités Numériques...
          </p>

          <section id="exp" ref={sectionsRefs.exp} style={sectionStyle('exp')}>
            <h2>Expériences professionnelles</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {experiences.map((exp, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemLeave}
                  tabIndex={0}
                  onFocus={handleItemHover}
                  onBlur={handleItemLeave}
                >
                  <div>
                    🌸 <strong>{exp.year}</strong> – {exp.role}, {exp.company}{' '}
                    <em style={{ color: '#7a5ab6' }}>{exp.tech}</em>
                  </div>
                  <p
                    style={{
                      marginTop: '0.4rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {exp.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="formation"
            ref={sectionsRefs.formation}
            style={sectionStyle('formation')}
          >
            <h2>Formation</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {formations.map((form, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemLeave}
                  tabIndex={0}
                  onFocus={handleItemHover}
                  onBlur={handleItemLeave}
                >
                  <div>
                    🌸 <strong>{form.year}</strong> – {form.title}
                  </div>
                  <p
                    style={{
                      marginTop: '0.4rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {form.school}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <aside
          style={{
            flexShrink: 0,
            width: '300px',
            padding: '1.5rem',
            borderRadius: '1rem',
            backgroundColor: '#f9eaff', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '2rem',
            height: 'fit-content',
          }}
        >
          <h2 style={{ color: '#5a2e99' }}>Contact</h2>
          <p>
            📧 <strong>Email :</strong>{' '}
            <a
              href="mailto:barbeylise@gmail.com"
              style={{ color: '#7a5ab6' }}
            >
              barbeylise@gmail.com
            </a>
          </p>
          <p>
            📞 <strong>Téléphone :</strong>{' '}
            <a href="tel:0633660338" style={{ color: '#7a5ab6' }}>
              06 33 66 03 38
            </a>
          </p>
          <p>
            📍 <strong>Localisation :</strong>{' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rennes+Saint-Malo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7a5ab6' }}
            >
              Rennes / Saint-Malo
            </a>
          </p>
          <p>
            💼 <strong>LinkedIn :</strong>{' '}
            <a
              href="https://www.linkedin.com/in/lise-barbey"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7a5ab6' }}
            >
              linkedin.com/in/lise-barbey
            </a>
          </p>
          <p>
            💻 <strong>GitHub :</strong>{' '}
            <a
              href="https://github.com/LeelooDallas-creator"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7a5ab6' }}
            >
              github.com/LeelooDallas
            </a>
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{ marginTop: '1.5rem', ...buttonStyle, backgroundColor: '#7a5ab6' }}
          >
            💬 Me contacter
          </button>
        </aside>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: '#5a2e99' }}>
              Formulaire de contact
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
                alert('Message simulé !');
              }}
            >
              <label>
                Nom : <input type="text" required style={inputStyle} />
              </label>
              <br />
              <label>
                Email : <input type="email" required style={inputStyle} />
              </label>
              <br />
              <label>
                Message :{' '}
                <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
              </label>
              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                }}
              >
                <button type="submit" style={{ ...buttonStyle, backgroundColor: '#5a2e99' }}>
                  Envoyer
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{ ...buttonStyle, backgroundColor: '#ccc', color: '#333' }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CV;
