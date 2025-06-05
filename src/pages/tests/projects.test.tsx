import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { vi } from 'vitest';
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
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(6);
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

  test('ajoute la classe animate après un délai', async () => {
    render(<Projects />);
    const cards = screen.getAllByRole('article');
    // Au départ, pas de classe animate
    cards.forEach(card => expect(card).not.toHaveClass('animate'));

    // Attendre un peu que l'animation démarre
    await waitFor(() => {
      cards.forEach(card => {
        expect(card).toHaveClass('animate');
      });
    }, { timeout: 500 });
  });

  test('rend le composant ContactAside', () => {
    render(<Projects />);
    expect(screen.getByTestId('contact-aside')).toBeInTheDocument();
  });
});
