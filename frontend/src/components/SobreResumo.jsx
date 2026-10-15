import { Link } from 'react-router-dom'
import './SobreResumo.css'
import fotoPerfil from '../assets/foto-perfil.jpg'
import useReveal from '../hooks/useReveal'
import Luna from './Luna'
import { useIdioma } from '../context/IdiomaContext'



export default function SobreResumo() {
  const { ref, visible } = useReveal()

  const { idioma } = useIdioma()
  const ingles = idioma === 'en'
  return (
    <section className={`sobre revelar ${visible ? 'visivel' : ''}`} id="sobre" ref={ref}
>
      <div className="sobre-grid">
        <figure className="foto-perfil">
          <img src={fotoPerfil} alt="Foto da Pamela" />
          <figcaption className="foto-legenda">
            <svg
              viewBox="0 0 44 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <path d="M40,30 C26,32 12,26 8,8" />
              <path d="M2,16 L8,6 L16,14" />
            </svg>
            <span>EU!</span>
          </figcaption>
        </figure>

        <div className="sobre-texto">
          <p className="rotulo">{ingles ? '01 / ABOUT ME' : '01 / SOBRE MIM'}</p>
          <h2>{ingles ? "Hello, I'm Pamela!" : 'Olá, eu sou a Pamela!'}</h2>
          <p className="descricao">{ingles? 'I am a Software Engineering student who enjoys learning by building projects.': 'Sou estudante de Engenharia de Software e gosto de aprender construindo projetos.'}</p>
          <Link to="/sobre" className="link-seta">{ingles ? 'A little more about me →' : 'Um pouco mais sobre mim →'}</Link>
        </div>

        <div className="cartao-pixel">
          <span className="canto canto-tl" />
          <span className="canto canto-tr" />
          <span className="canto canto-bl" />
          <span className="canto canto-br" />
          <Luna />
        </div>
      </div>
    </section>
  )
}