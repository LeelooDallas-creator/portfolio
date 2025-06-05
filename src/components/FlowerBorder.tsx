import React, { useEffect, useState } from 'react';

const FlowerBorder = () => {
  const flowerEmoji = '🌸';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 600);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const borderStyle: React.CSSProperties = {
    position: 'relative',
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: 'var(--text-main)',
    textAlign: 'center',
    padding: isMobile ? '1rem' : '1.5rem 2rem',
    margin: isMobile ? '1.5rem' : '2rem',
  };

  const spanStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    padding: isMobile ? '1.5rem' : '2.5rem',
  };

  return (
    <p data-testid="flower-border" style={borderStyle}>
      <style>{`
        .flower-border::before,
        .flower-border::after {
          content: "${flowerEmoji.repeat(isMobile ? 10 : 20)}";
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

        @media (max-width: 600px) {
          .flower-border > span::before,
          .flower-border > span::after {
            display: none;
          }
        }
      `}</style>

      <span className="flower-border" style={spanStyle}>
        Recherche un poste en back-end ou en fullstack pour janvier 2026
      </span>
    </p>
  );
};

export default FlowerBorder;
