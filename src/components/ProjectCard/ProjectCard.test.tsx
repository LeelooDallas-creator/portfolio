import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Mon super projet',
    description: 'Une courte description de mon projet.',
    link: 'https://example.com',
  };

  it('affiche le titre, la description et le lien', () => {
    render(<ProjectCard {...mockProps} />);

    // Vérifie que le titre est bien affiché
    expect(screen.getByRole('heading', { name: /mon super projet/i })).toBeInTheDocument();

    // Vérifie la description
    expect(screen.getByText(/une courte description de mon projet/i)).toBeInTheDocument();

    // Vérifie le lien
    const link = screen.getByRole('link', { name: /voir le projet mon super projet/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockProps.link);
  });

  it('n’affiche pas de lien si `link` n’est pas fourni', () => {
    render(<ProjectCard title="Test sans lien" description="Pas de lien ici." />);

    expect(screen.getByText(/pas de lien ici/i)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
