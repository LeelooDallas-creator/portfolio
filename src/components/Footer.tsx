const Footer: React.FC = () => (
  <footer role="contentinfo" aria-label="Pied de page">
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
        © 2025 LISE BARBEY · LEELOO DALLAS
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a
          href="https://github.com/LeelooDallas-creator"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lise-barbey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:barbeylise@gmail.com"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
