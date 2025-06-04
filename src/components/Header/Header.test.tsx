import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/logo lise barbey/i)).toBeInTheDocument();
    expect(screen.getByText(/À propos/i)).toBeInTheDocument();
    expect(screen.getByText(/Projets/i)).toBeInTheDocument();
    expect(screen.getByText(/CV/i)).toBeInTheDocument();
  });
});
