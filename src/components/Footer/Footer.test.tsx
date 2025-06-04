import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('affiche le texte copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 Mon Portfolio\. Tous droits réservés\./i)).toBeInTheDocument()
  })

  it('contient la classe "footer"', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveClass('footer')
  })
})
