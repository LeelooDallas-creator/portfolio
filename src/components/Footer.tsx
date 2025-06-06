const FlowerIcon: React.FC = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="rotating-flower"
    style={{
      width: '2.5em',           // Taille relative (≈40px si font-size = 16px)
      height: 'auto',
      maxWidth: '50px',         // Taille max pour éviter qu'elle devienne trop grande
      margin: '0.3rem auto',
      flexShrink: 0,            // Empêche la fleur de se déformer
    }}
  >
    <defs>
      <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbd6e3" />
        <stop offset="100%" stopColor="#c18fff" />
      </radialGradient>
    </defs>
    {[...Array(6)].map((_, i) => (
      <ellipse
        key={i}
        cx="100"
        cy="65"
        rx="22"
        ry="35"
        fill="url(#petalGradient)"
        transform={`rotate(${i * 60}, 100, 100)`}
      />
    ))}
    <circle cx="100" cy="100" r="20" fill="#5a2e99" />
  </svg>
);

const Footer: React.FC = () => (
  <footer className="footer" role="contentinfo"
    aria-label="Pied de page"
    style={{ textAlign: 'center', color: '#5a2e99' }}>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',             // <-- Important pour le responsive
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        lineHeight: 1.2,
        color: '#5a2e99',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>©Lise</p>
        <p style={{ margin: 0 }}>Barbey</p>
      </div>

      <FlowerIcon />

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>Leeloo</p>
        <p style={{ margin: 0 }}>Dallas</p>
      </div>
    </div>
  </footer>
);

export default Footer;
