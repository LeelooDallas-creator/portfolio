import { render, screen } from '@testing-library/react'
import ContactAside from './ContactAside'

describe('ContactAside', () => {
  it('render le titre "Contact"', () => {
    render(<ContactAside />)
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
  })

  it('affiche les liens avec les bons textes', () => {
    render(<ContactAside />)

    expect(screen.getByText('barbeylise@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('06 33 66 03 38')).toBeInTheDocument()
    expect(screen.getByText('Rennes / Saint-Malo')).toBeInTheDocument()
    expect(screen.getByText('Lise Barbey')).toBeInTheDocument()
    expect(screen.getByText('LeelooDallas')).toBeInTheDocument()
  })

  it('contient tous les liens avec les bonnes URLs', () => {
    render(<ContactAside />)

    expect(screen.getByText('barbeylise@gmail.com')).toHaveAttribute('href', 'mailto:barbeylise@gmail.com')
    expect(screen.getByText('06 33 66 03 38')).toHaveAttribute('href', 'tel:0633660338')
    expect(screen.getByText('Rennes / Saint-Malo')).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.google.com/maps/search/')
    )
    expect(screen.getByText('Lise Barbey')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/lise-barbey'
    )
    expect(screen.getByText('LeelooDallas')).toHaveAttribute(
      'href',
      'https://github.com/LeelooDallas-creator'
    )
  })
})
