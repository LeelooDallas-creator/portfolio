import { render, screen, fireEvent } from '@testing-library/react';
import About from '../About';

describe('AccordionSection', () => {
  test('affiche le titre avec la flèche fermée par défaut', () => {
    render(<About />);
    // Le premier accordéon a le titre "❧ Mon parcours & sensibilité"
    const firstAccordionTitle = screen.getByText(/❧ Mon parcours & sensibilité/);
    expect(firstAccordionTitle).toBeInTheDocument();
    expect(firstAccordionTitle.textContent?.startsWith('▶')).toBe(true); // flèche fermée
  });

  test('ouvre et ferme la section au clic', () => {
    render(<About />);
    const firstAccordionTitle = screen.getByText(/❧ Mon parcours & sensibilité/);

    // Au départ, on vérifie que le contenu n'est pas visible via aria-expanded
    expect(firstAccordionTitle).toHaveAttribute('aria-expanded', 'false');

    // Clique pour ouvrir
    fireEvent.click(firstAccordionTitle);
    expect(firstAccordionTitle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/Développeuse fullstack avec une affinité marquée/)).toBeInTheDocument();

    // Clique pour fermer
    fireEvent.click(firstAccordionTitle);
    expect(firstAccordionTitle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(/Développeuse fullstack avec une affinité marquée/)).toBeInTheDocument();
  }); // <-- fermeture test ouvre et ferme
}); // <-- fermeture describe AccordionSection

describe('About page', () => {
  test('affiche le titre principal', () => {
    render(<About />);
    const mainTitle = screen.getByRole('heading', { level: 1, name: /À propos de moi/i });
    expect(mainTitle).toBeInTheDocument();
  });

  test('affiche ContactAside', () => {
    render(<About />);
    const contactHeading = screen.getByText(/Contact/i);
    expect(contactHeading).toBeInTheDocument();
  });
});
