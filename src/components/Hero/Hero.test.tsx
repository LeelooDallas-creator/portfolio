import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { vi } from 'vitest';

vi.mock('../assets/IMG_8090.jpg', () => ({
  default: 'mocked-image.jpg',
}));

describe('Hero component', () => {
  it('renders headline and contact aside', () => {
    render(<Hero />);
    
    expect(screen.getByText(/je cherche un poste junior/i)).toBeInTheDocument();
    expect(screen.getByAltText(/illustration développeuse/i)).toBeInTheDocument();
  });

  it('shows "Voir plus" text on the back of the image card', () => {
    render(<Hero />);
    
    expect(screen.getByText(/voir plus/i)).toBeInTheDocument();
  });
});
