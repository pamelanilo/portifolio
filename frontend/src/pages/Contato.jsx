
import { useIdioma } from '../context/IdiomaContext'

export default function Contato() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <section className="page">
      <h1>{ingles ? 'Contact' : 'Contato'}</h1>
      <p>
        {ingles
          ? 'Contact information and ways to get in touch will be available here soon.'
          : 'Em breve, você encontrará aqui informações de contato e formas de falar comigo.'}
      </p>
    </section>
  )
}
