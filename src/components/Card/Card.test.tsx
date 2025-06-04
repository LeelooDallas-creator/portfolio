import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  const title = 'Titre de la carte';
  const href = 'https://example.com';
  const content = 'Contenu de la carte';

  it('affiche le titre et le contenu', () => {
    render(<Card title={title} href={href}>{content}</Card>);
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(title);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('le lien possède le bon href et les bons attributs', () => {
    render(<Card title={title} href={href}>{content}</Card>);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('change de style au survol', async () => {
    render(<Card title={title} href={href}>{content}</Card>);
    
    const user = userEvent.setup();
    const cardDiv = screen.getByRole('link').firstChild; // le div à l’intérieur du <a>
    
    expect(cardDiv).toHaveStyle('transform: scale(1) translateZ(0)');
    
    // Simuler le hover
    await user.hover(cardDiv!);
    expect(cardDiv).toHaveStyle('transform: scale(1.05) translateZ(20px)');
    
    // Simuler la sortie du hover
    await user.unhover(cardDiv!);
    expect(cardDiv).toHaveStyle('transform: scale(1) translateZ(0)');
  });
});
