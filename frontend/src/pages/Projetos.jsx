
import { useIdioma } from '../context/IdiomaContext'

export default function Projetos() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <section className="page">
      <h1>{ingles ? 'Projects' : 'Projetos'}</h1>
      <p>
        {ingles
          ? 'More details about my projects will be available here soon.'
          : 'Em breve, você encontrará aqui mais detalhes sobre meus projetos.'}
      </p>
    </section>
  )
}
