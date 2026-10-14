
import { useIdioma } from '../context/IdiomaContext'

export default function Footer() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <footer className="footer">
      <p>
        {ingles
          ? '© 2026 Pamela Fernandes Nilo · Software Engineering · PUC Minas'
          : '© 2026 Pamela Fernandes Nilo · Engenharia de Software · PUC Minas'}
      </p>
    </footer>
  )
}
