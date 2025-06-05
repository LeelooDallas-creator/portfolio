import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Projects from '../Projects';

// Mock du composant ContactAside (pour isoler le test)
vi.mock('../components/ContactAside', () => () => <div data-testid="contact-aside" />);

describe('Projects component', () => {
  test('rend le titre principal', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Mes projets/i })).toBeInTheDocument();
  });

  test('rend la liste des projets avec liens ou badge désactivé', () => {
    render(<Projects />);
    // Sélectionne les articles (cartes projets)
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBe(6);

    // Vérifie les titres des projets connus
    expect(screen.getByText(/Portfolio personnel/i)).toBeInTheDocument();
    expect(screen.getByText(/Application to do/i)).toBeInTheDocument();

    // Vérifie la présence d'au moins un lien actif
    const activeLinks = screen.getAllByText('Voir le projet →');
    expect(activeLinks.length).toBeGreaterThan(0);

    // Vérifie la présence d'au moins un badge désactivé
    expect(screen.getAllByText('Lien désactivé').length).toBeGreaterThan(0);
  });

  test('ajoute la classe animate après 100ms', async () => {
    render(<Projects />);
    const cards = screen.getAllByRole('article');

    cards.forEach(card => {
      expect(card).not.toHaveClass('animate');
    });

    await waitFor(() => {
      cards.forEach(card => {
        expect(card).toHaveClass('animate');
      });
    }, { timeout: 200 });
  });

  test('ouvre les liens dans une nouvelle fenêtre avec rel noopener noreferrer', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link', { name: /Voir le projet →/i });
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('rend le composant ContactAside', () => {
    render(<Projects />);
    expect(screen.getByTestId('contact-aside')).toBeInTheDocument();
  });
});
