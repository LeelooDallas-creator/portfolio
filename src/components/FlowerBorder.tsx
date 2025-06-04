const FlowerBorder = () => {
  const flowerEmoji = '🌸'; // tu peux changer par 🌺, 🌼, 🌻, etc.

  const borderStyle = {
    position: 'relative',
    fontSize: '1.1rem',
    color: 'var(--text-main)',
    textAlign: 'center',
    padding: '1.5rem 2rem',
    margin: '2rem',
  };

  const beforeAfterStyle = {
    content: `"${flowerEmoji.repeat(20)}"`, // répète la fleur 20 fois
    position: 'absolute',
    width: '100%',
    left: 0,
    fontSize: '1.2rem',
    letterSpacing: '0.3rem',
    color: 'var(--violet)',
    userSelect: 'none',
  };

  return (
    <p style={borderStyle}>
      <style>{`
        .flower-border::before,
        .flower-border::after {
          content: "${flowerEmoji.repeat(20)}";
          position: absolute;
          left: 0;
          width: 100%;
          font-size: 1.2rem;
          letter-spacing: 0.3rem;
          color: var(--violet);
          user-select: none;
        }
        .flower-border::before {
          top: 0;
        }
        .flower-border::after {
          bottom: 0;
        }
        .flower-border > span::before,
        .flower-border > span::after {
          content: "${flowerEmoji.repeat(3)}";
          font-size: 1.2rem;
          letter-spacing: 0.3rem;
          color: var(--violet);
          user-select: none;
          position: absolute;
        }
        .flower-border > span::before {
          left: -3.5rem;
          top: 0;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .flower-border > span::after {
          right: -3.5rem;
          bottom: 0;
          writing-mode: vertical-rl;
        }
      `}</style>

      <span className="flower-border" style={{ position: 'relative', display: 'inline-block', padding: '2.5rem' }}>
        Recherche un poste en back-end ou en fullstack pour janvier 2026
      </span>
    </p>
  );
};

export default FlowerBorder;
