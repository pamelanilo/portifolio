
import { useIdioma } from '../context/IdiomaContext'

export default function Sobre() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <section className="page">
      <h1>{ingles ? 'About me' : 'Sobre mim'}</h1>
      <p>
        {ingles
          ? 'More information about my journey and interests will be available here soon.'
          : 'Em breve, você encontrará aqui mais informações sobre minha trajetória e meus interesses.'}
      </p>
    </section>
  )
}
