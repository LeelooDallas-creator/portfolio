import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <p
     style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#6d4e99',
              margin: 0,
              marginBottom: '2rem',
              maxWidth: '100%',
              textAlign: 'left',
            }}
    >© 2025 Mon Portfolio. Tous droits réservés.</p>
  </footer>
);

export default Footer;
