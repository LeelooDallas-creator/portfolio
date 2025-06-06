import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Projects from '../Projects';

// Mock ContactAside pour isoler le test
vi.mock('../components/ContactAside', () => () => <div data-testid="contact-aside" />);

describe('Projects component', () => {
  test('affiche le titre principal', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Mes projets/i })).toBeInTheDocument();
  });

  test('affiche toutes les cartes projets', async () => {
    render(<Projects />);
    // Le rôle correct d’après le rendu est "listitem", pas "article"
    const cards = await screen.findAllByRole('listitem');
    expect(cards.length).toBe(11); // adapte selon ton nombre réel de projets
  });

  test('affiche les titres et descriptions connus', () => {
    render(<Projects />);
    expect(screen.getByText(/Portfolio personnel/i)).toBeInTheDocument();
    expect(screen.getByText(/Application to do/i)).toBeInTheDocument();
    expect(screen.getByText(/Une To-Do List girly/i)).toBeInTheDocument();
  });

  test('affiche au moins un lien actif "Voir le projet →"', async () => {
    render(<Projects />);
    const activeLinks = await screen.findAllByText('Voir le projet →');
    expect(activeLinks.length).toBeGreaterThan(0);
    activeLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('affiche au moins un badge "Lien désactivé"', () => {
    render(<Projects />);
    const disabledBadges = screen.getAllByText('Lien désactivé');
    expect(disabledBadges.length).toBeGreaterThan(0);
    disabledBadges.forEach(badge => {
      expect(badge).toHaveStyle('cursor: not-allowed');
    });
  });

  test('rend le composant ContactAside', () => {
    render(<Projects />);
    expect(screen.getByTestId('contact-aside')).toBeInTheDocument();
  });
});
