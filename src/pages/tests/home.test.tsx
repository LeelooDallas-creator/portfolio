import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Home from '../Home';
import type { CardProps } from '../../components/Card';

vi.mock('../components/FlowerBorder', () => () => <div data-testid="flower-border" />);
vi.mock('../components/Hero', () => () => <div data-testid="hero" />);
vi.mock('../components/Card', () => (props: CardProps) => (
  <div data-testid="card-mock">
    <h2>{props.title}</h2>
    <div>{props.children}</div>
    <a href={props.href}>Lien</a>
  </div>
));

describe('Home', () => {
  test('rend correctement le composant et ses enfants mockés', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId('flower-border')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    const cards = screen.getAllByTestId('card-mock');
    expect(cards.length).toBeGreaterThan(0);
    expect(screen.getByText(/Recherche un poste en back-end/i)).toBeInTheDocument();
  });
});
