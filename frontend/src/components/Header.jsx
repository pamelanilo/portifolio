
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  const [language, setLanguage] = useState(
    () => localStorage.getItem('portfolio-language') || 'pt'
  )

  const alternarTema = () => {
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

  useEffect(() => {
    document.documentElement.lang = language

    document.querySelectorAll('[data-pt][data-en]').forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`)
    })

    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/#inicio" className="logo">
          <span className="logo-icone" aria-hidden="true" />
          PAMELA.DEV
        </a>

        <nav className="menu" aria-label="Navegação principal">
          <a href="/#sobre" data-pt="SOBRE" data-en="ABOUT">
            SOBRE
          </a>

          <a href="/#projetos" data-pt="PROJETOS" data-en="PROJECTS">
            PROJETOS
          </a>

          <a href="/#experiencias"
             data-pt="EXPERIÊNCIAS"
             data-en="EXPERIENCE">
            EXPERIÊNCIAS
          </a>

          <a href="/#habilidades"
             data-pt="HABILIDADES"
             data-en="SKILLS">
            HABILIDADES
          </a>

          <a href="/#contato" data-pt="CONTATO" data-en="CONTACT">
            CONTATO
          </a>
        </nav>

        <div className="header-controls">
          <button
            className="btn-tema"
            type="button"
            onClick={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark'

              document.documentElement.dataset.theme = nextTheme
              localStorage.setItem('portfolio-theme', nextTheme)
              setTheme(nextTheme)
            }}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button
            className="btn-idioma"
            type="button"
            onClick={() => setLanguage(
              current => current === 'pt' ? 'en' : 'pt'
            )}
            aria-label={language === 'pt'
              ? 'Mudar para inglês'
              : 'Switch to Portuguese'}
          >
            {language === 'pt' ? 'PT | EN' : 'EN | PT'}
          </button>
        </div>
      </div>
    </header>
  )
}
