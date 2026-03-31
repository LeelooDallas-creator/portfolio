import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/about',    label: 'À propos' },
    { to: '/projects', label: 'Projets'  },
    { to: '/cv',       label: 'CV'       },
  ];

  return (
    <header>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
          aria-label="Retour à l'accueil"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="3.5" fill="#c084fc"/>
            <circle cx="14" cy="14" r="10" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.5"/>
            <circle cx="14" cy="14" r="6" stroke="#a855f7" strokeWidth="0.75" fill="none" strokeDasharray="2 2"/>
            <circle cx="22" cy="8" r="1.5" fill="#ec4899"/>
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}
          >
            LISE{' '}
            <span style={{ color: 'var(--violet-bright)' }}>BARBEY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          aria-label="Navigation principale"
        >
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--violet-bright)' : 'var(--text-secondary)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'rgba(192,132,252,0.1)' : 'transparent',
                  border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:barbeylise@gmail.com"
            className="btn-primary"
            style={{ marginLeft: '1rem', textDecoration: 'none' }}
          >
            Contact
          </a>
        </nav>

        {/* Burger */}
        <button
          className="burger-menu"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--violet-bright)',
            padding: '0.4rem 0.65rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="nav-mobile"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            background: 'rgba(10,8,20,0.97)',
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .burger-menu { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
