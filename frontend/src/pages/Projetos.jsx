import { useState } from 'react'
import { useIdioma } from '../context/IdiomaContext'
import './Projetos.css'

const projetos = [
  {
    id: 'floricultura',
    numero: '01',
    tema: 'floricultura',
    nome: { pt: 'Floricultura Login', en: 'Flower Shop Login' },
    categoria: { pt: 'DESENVOLVIMENTO WEB', en: 'WEB DEVELOPMENT' },
    descricao: {
      pt: 'Uma interface web para uma floricultura, desenvolvida para explorar os fundamentos do desenvolvimento web.',
      en: 'A flower shop web interface built to explore the fundamentals of web development.',
    },
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pamelanilo/FloriculturaLogin',
    chamada: { pt: 'Floresça com novas ideias.', en: 'Let ideas bloom.' },
    midias: [
      {
        tipo: 'imagem',
        src: '/projetos/floricultura/cadastro.png',
        legenda: 'Cadastro',
      },
      {
        tipo: 'imagem',
        src: '/projetos/floricultura/tela-login.png',
        legenda: 'Tela login',
      },
      {
        tipo: 'imagem',
        src: '/projetos/floricultura/tela-recuperacao-senha.png',
        legenda: 'Tela recuperação senha',
      },
    ],
  },
  {
    id: 'pygame',
    numero: '02',
    tema: 'pygame',
    nome: { pt: 'Projeto Pygame', en: 'Pygame Project' },
    categoria: { pt: 'DESENVOLVIMENTO DE JOGOS', en: 'GAME DEVELOPMENT' },
    descricao: {
      pt: 'Um projeto em Python que explora lógica de programação e experiências interativas com Pygame.',
      en: 'A Python project exploring programming logic and interactive experiences with Pygame.',
    },
    tecnologias: ['Python', 'Pygame'],
    github: 'https://github.com/pamelanilo/trabalho_pygame',
    chamada: { pt: 'Um mundo feito de código.', en: 'A world made of code.' },
    midias: [
      {
        tipo: 'gif',
        src: '/projetos/pygame/trabalho_pygame.gif',
        legenda: 'Gameplay',
      },
      {
        tipo: 'imagem',
        src: '/projetos/pygame/tela-principal.png',
        legenda: 'Tela principal',
      },
      {
        tipo: 'imagem',
        src: '/projetos/pygame/fase2_blocos_montados.png',
        legenda: 'Resultado',
      },
    ],
  },
  {
    id: 'ia',
    numero: '03',
    tema: 'ia',
    nome: { pt: 'Imersão IA', en: 'AI Immersion' },
    categoria: { pt: 'INTELIGÊNCIA ARTIFICIAL', en: 'ARTIFICIAL INTELLIGENCE' },
    descricao: {
      pt: 'Projeto desenvolvido durante a Imersão IA da Alura com Google Gemini, explorando aplicações de inteligência artificial.',
      en: 'A project developed during Alura’s AI Immersion with Google Gemini, exploring AI applications.',
    },
    tecnologias: ['IA', 'Google Gemini'],
    github: 'https://github.com/pamelanilo/Projeto-Imers-o-IA-Alura-Google-Gemini',
    chamada: { pt: 'Ideias que vão além.', en: 'Ideas beyond limits.' },
    midias: [
      {
        tipo: 'imagem',
        src: '/projetos/ia/demo.gif',
        legenda: 'Demonstração',
      },
      {
        tipo: 'imagem',
        src: '/projetos/ia/sugestao_por_humor.png',
        legenda: 'Sugestão por Humor',
      },
      {
        tipo: 'imagem',
        src: '/projetos/ia/menu.png',
        legenda: 'Menu',
      },
    ],
  },
]

function GaleriaProjeto({ projeto, ingles }) {
  const [selecionada, setSelecionada] = useState(0)
  const [falhas, setFalhas] = useState({})

  const midiaAtual = projeto.midias[selecionada]

  return (
    <div className="projeto-galeria">
      <div className="galeria-principal">
        {falhas[selecionada] ? (
          <div className="galeria-placeholder">
            <span className="galeria-placeholder-icone">＋</span>
            <strong>
              {ingles ? 'Add your media here' : 'Adicione sua mídia aqui'}
            </strong>
            <span>{midiaAtual.legenda}</span>
            <small>{midiaAtual.src}</small>
          </div>
        ) : (
          <img
            key={midiaAtual.src}
            src={midiaAtual.src}
            alt={`${projeto.nome[ingles ? 'en' : 'pt']} — ${midiaAtual.legenda}`}
            onError={() =>
              setFalhas((anterior) => ({
                ...anterior,
                [selecionada]: true,
              }))
            }
          />
        )}

        <span className="galeria-contador">
          {String(selecionada + 1).padStart(2, '0')} /{' '}
          {String(projeto.midias.length).padStart(2, '0')}
        </span>

        <span className="galeria-legenda">{midiaAtual.legenda}</span>
      </div>

      <div
        className="galeria-miniaturas"
        aria-label={ingles ? 'Project media' : 'Mídias do projeto'}
      >
        {projeto.midias.map((midia, indice) => (
          <button
            key={midia.src}
            type="button"
            className={`galeria-miniatura ${
              indice === selecionada ? 'ativa' : ''
            }`}
            onClick={() => setSelecionada(indice)}
            aria-pressed={indice === selecionada}
            aria-label={midia.legenda}
          >
            {falhas[indice] ? (
              <span className="miniatura-vazia">＋</span>
            ) : (
              <img
                src={midia.src}
                alt=""
                onError={() =>
                  setFalhas((anterior) => ({
                    ...anterior,
                    [indice]: true,
                  }))
                }
              />
            )}

            <span>
              {midia.tipo === 'gif' ? 'GIF' : `0${indice + 1}`}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Projetos() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  return (
    <main className="projetos-page" id="top">
      <section className="projeto-tela abertura-projetos">
        <div className="projeto-abertura-conteudo">
          <span className="projeto-etiqueta">
            {ingles
              ? 'SELECTED WORKS · 2025—2026'
              : 'PROJETOS SELECIONADOS · 2025—2026'}
          </span>

          <h1>
            {ingles ? (
              <>
                Ideas become
                <br />
                <span>experiences.</span>
              </>
            ) : (
              <>
                Ideias viram
                <br />
                <span>experiências.</span>
              </>
            )}
          </h1>

          <p>
            {ingles
              ? 'A collection of things I have been learning, creating, and bringing to life with code.'
              : 'Uma coleção de coisas que venho aprendendo, criando e tirando do papel com código.'}
          </p>

          <a
            href="#projeto-floricultura"
            className="projeto-scroll-link"
          >
            {ingles ? 'EXPLORE THE PROJECTS ↓' : 'EXPLORE OS PROJETOS ↓'}
          </a>
        </div>

        <span className="projeto-abertura-numero">03 PROJECTS</span>
      </section>

      {projetos.map((projeto) => (
        <section
          key={projeto.id}
          id={`projeto-${projeto.id}`}
          className={`projeto-tela tema-${projeto.tema}`}
          onPointerMove={(event) => {
            if (event.pointerType !== 'mouse') return

            const rect = event.currentTarget.getBoundingClientRect()

            event.currentTarget.style.setProperty(
              '--mouse-x',
              `${event.clientX - rect.left}px`
            )

            event.currentTarget.style.setProperty(
              '--mouse-y',
              `${event.clientY - rect.top}px`
            )
          }}
        >
          <div
            className="projeto-fundo-decorativo"
            aria-hidden="true"
          />

          <div className="projeto-tela-topo">
            <span>{projeto.categoria[idioma]}</span>
            <span>{projeto.numero} / 03</span>
          </div>

          <div className="projeto-tela-conteudo">
            <div className="projeto-informacoes">
              <p className="projeto-chamada">
                {projeto.chamada[idioma]}
              </p>

              <h2>{projeto.nome[idioma]}</h2>

              <p className="projeto-descricao">
                {projeto.descricao[idioma]}
              </p>

              <div className="projeto-tags">
                {projeto.tecnologias.map((tecnologia) => (
                  <span key={tecnologia}>{tecnologia}</span>
                ))}
              </div>

              <a
                className="projeto-botao"
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ingles ? 'EXPLORE THE CODE ↗' : 'EXPLORAR O CÓDIGO ↗'}
              </a>
            </div>

            <GaleriaProjeto
              key={projeto.id}
              projeto={projeto}
              ingles={ingles}
            />
          </div>

          <div className="projeto-tela-rodape">
            <span>
              {ingles
                ? 'PERSONAL & ACADEMIC PROJECTS'
                : 'PROJETOS PESSOAIS E ACADÊMICOS'}
            </span>

            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              {ingles ? 'BACK TO TOP ↑' : 'VOLTAR AO TOPO ↑'}
            </a>
          </div>
        </section>
      ))}
    </main>
  )
}