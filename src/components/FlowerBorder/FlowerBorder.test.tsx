import { render, screen } from '@testing-library/react'
import FlowerBorder from './FlowerBorder'

describe('FlowerBorder', () => {
  it('affiche le message principal', () => {
    render(<FlowerBorder />)

    const message = screen.getByText(/recherche un poste en back-end/i)
    expect(message).toBeInTheDocument()
  })

  it('contient bien l’emoji de fleur dans la feuille de style', () => {
    const { container } = render(<FlowerBorder />)

    const styleTag = container.querySelector('style')
    expect(styleTag).toBeInTheDocument()
    expect(styleTag?.textContent).toContain('🌸')
  })
})
