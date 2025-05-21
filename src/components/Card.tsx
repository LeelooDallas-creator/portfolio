import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div style={{
      backgroundColor: 'var(--rose)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      marginBottom: '2rem',
      maxWidth: '100%',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-title)',
        fontSize: '1.8rem',
        color: 'var(--text-main)',
        marginBottom: '1rem',
      }}>{title}</h2>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: '#4b3b73',
      }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
