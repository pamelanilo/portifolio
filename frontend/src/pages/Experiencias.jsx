
import { useIdioma } from '../context/IdiomaContext'

export default function Experiencias() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <section className="page">
      <h1>{ingles ? 'Experience' : 'Experiências'}</h1>
      <p>
        {ingles
          ? 'More information about my academic and professional experience will be available here soon.'
          : 'Em breve, você encontrará aqui mais informações sobre minhas experiências acadêmicas e profissionais.'}
      </p>
    </section>
  )
}
