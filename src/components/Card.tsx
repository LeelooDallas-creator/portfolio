import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, link, onClick, className }) => {
  const content = (
    <>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`card ${className || ''}`}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <div className={`card ${className || ''}`} onClick={onClick}>
      {content}
    </div>
  );
};

export default Card;
