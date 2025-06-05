import { render, screen, fireEvent } from '@testing-library/react';
import About from '../About';

describe('AccordionSection', () => {
  test('affiche le titre avec la flèche fermée par défaut', () => {
    render(
      <About />
    );
    // Le premier accordéon a le titre "❧ Mon parcours & sensibilité"
    const firstAccordionTitle = screen.getByText(/❧ Mon parcours & sensibilité/);
    expect(firstAccordionTitle).toBeInTheDocument();
    expect(firstAccordionTitle.textContent?.startsWith('▶')).toBe(true); // flèche fermée
  });

  test('ouvre et ferme la section au clic', () => {
    render(
      <About />
    );

    const firstAccordionTitle = screen.getByText(/❧ Mon parcours & sensibilité/);

    // Au départ, le contenu n'est pas visible
    expect(screen.queryByText(/Je suis développeuse fullstack/)).toBeNull();

    // Clique pour ouvrir
    fireEvent.click(firstAccordionTitle);
    expect(screen.getByText(/Je suis développeuse fullstack/)).toBeInTheDocument();
    expect(firstAccordionTitle.textContent?.startsWith('▼')).toBe(true); // flèche ouverte

    // Clique pour fermer
    fireEvent.click(firstAccordionTitle);
    expect(screen.queryByText(/Je suis développeuse fullstack/)).toBeNull();
    expect(firstAccordionTitle.textContent?.startsWith('▶')).toBe(true); // flèche fermée
  });
});

describe('About page', () => {
  test('affiche le titre principal', () => {
    render(<About />);
    const mainTitle = screen.getByRole('heading', { level: 1, name: /À propos de moi/i });
    expect(mainTitle).toBeInTheDocument();
  });

  test('affiche ContactAside', () => {
    render(<About />);
    // Vérifie que ContactAside est rendu via un élément qu'il contient (à adapter selon ton composant)
    // Par exemple un texte ou un role particulier dans ContactAside
    // Ici on suppose qu’il contient un titre "Contact"
    const contactHeading = screen.getByText(/Contact/i);
    expect(contactHeading).toBeInTheDocument();
  });
});
