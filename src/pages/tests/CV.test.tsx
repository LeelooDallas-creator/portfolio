import { render, screen } from '@testing-library/react';
import CV from '../CV';

describe('CV component', () => {
  it('affiche le titre principal', () => {
    render(<CV />);
    expect(screen.getByText(/Lise BARBEY – Développeuse Fullstack/i)).toBeInTheDocument();
  });

  it('affiche la section expériences', () => {
    render(<CV />);
    expect(screen.getByRole('heading', { name: /Expériences professionnelles/i })).toBeInTheDocument();
  });

  it('affiche des items d’expérience', () => {
    render(<CV />);
    expect(screen.getByText(/Studio Web Crafters, Saint-Malo/i)).toBeInTheDocument();
  });
});
