
import { useEffect, useState } from 'react'
import { useIdioma } from '../context/IdiomaContext'

export default function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  const { idioma, alternarIdioma } = useIdioma()
  const ingles = idioma === 'en'

  function alternarTema() {
    const temaAtual = document.documentElement.dataset.theme || theme
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = novoTema
    localStorage.setItem('portfolio-theme', novoTema)
    setTheme(novoTema)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/#inicio" className="logo">
          <span className="logo-icone" aria-hidden="true" />
          PAMELA.DEV
        </a>

        <nav
          className="menu"
          aria-label={ingles ? 'Main navigation' : 'Navegação principal'}
        >
          <a href="/#sobre">{ingles ? 'ABOUT' : 'SOBRE'}</a>
          <a href="/#projetos">{ingles ? 'PROJECTS' : 'PROJETOS'}</a>
          <a href="/#experiencias">
            {ingles ? 'EXPERIENCE' : 'EXPERIÊNCIAS'}
          </a>
          <a href="/#habilidades">{ingles ? 'SKILLS' : 'HABILIDADES'}</a>
          <a href="/#contato">{ingles ? 'CONTACT' : 'CONTATO'}</a>
        </nav>

        <div className="header-controls">
          <button
            className="btn-tema"
            type="button"
            onClick={alternarTema}
            aria-label={
              theme === 'dark'
                ? (ingles ? 'Enable light theme' : 'Ativar tema claro')
                : (ingles ? 'Enable dark theme' : 'Ativar tema escuro')
            }
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button
            className="btn-idioma"
            type="button"
            onClick={alternarIdioma}
            aria-label={
              ingles ? 'Switch to Portuguese' : 'Mudar para inglês'
            }
          >
            {ingles ? 'EN | PT' : 'PT | EN'}
          </button>
        </div>
      </div>
    </header>
  )
}
