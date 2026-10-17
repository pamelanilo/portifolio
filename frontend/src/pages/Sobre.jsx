
import { useIdioma } from '../context/IdiomaContext'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sobre.css'

const conteudo = {
  pt: {
    marca: 'PAMELA.DEV',
    navegacao: ['SOBRE', 'PROJETOS', 'EXPERIÊNCIAS', 'HABILIDADES', 'CONTATO'],
    etiqueta: 'PORTFÓLIO / SOBRE MIM',
    titulo: <>Olá,<br />eu sou a <span>Pamela!</span></>,
    resumo: 'Estudante de Engenharia de Software na PUC Minas. Aprendo criando projetos, explorando tecnologias e transformando ideias em soluções.',
    github: 'Conheça meu GitHub',
    contato: 'Contato',
    local: 'Belo Horizonte, Brasil',
    email: 'Entre em contato por e-mail',
    formacao: 'Formação',
    curso: 'Engenharia de Software',
    instituicao: 'PUC Minas',
    periodo: 'Graduação em andamento',
    bolsa: 'Bolsista integral',
    experiencias: 'Experiências e atividades',
    experiencia1: 'Aprendizagem em tecnologia',
    experiencia1Texto: 'Suporte técnico, configuração de computadores e resolução de problemas.',
    experiencia2: 'Projetos pessoais',
    experiencia2Texto: 'Desenvolvimento de aplicações e experiências práticas com programação.',
    experiencia3: 'Projetos acadêmicos',
    experiencia3Texto: 'Trabalhos em equipe, lógica de programação e desenvolvimento de software.',
    tags: ['Criatividade', 'Curiosidade', 'Resolução de problemas', 'Aprendizado contínuo'],
    motivo: 'O que me move',
    motivoTexto: 'Transformar curiosidade em soluções.',
    motivoTexto2: 'Gosto de aprender na prática, experimentar ideias e construir coisas úteis.',
    sobreMim: 'Um pouco mais sobre mim',
    sobreMim1: 'Minha trajetória combina o aprendizado acadêmico em Engenharia de Software com a experiência prática em suporte de TI. Gosto de entender como as coisas funcionam, investigar problemas e encontrar soluções com calma e curiosidade.',
    sobreMim2: 'Nos estudos, tenho explorado lógica de programação, desenvolvimento web e construção de projetos. Cada projeto é uma oportunidade de transformar teoria em prática, aprender com os erros e evoluir um pouco mais.',

    jornada: 'Jornada tecnológica',
    jornadaTexto: 'Tecnologias que estudo e utilizo nos meus projetos.',
    nivel: 'Em aprendizado',
    idiomas: 'Idiomas',
    portugues: 'Português',
    nativo: 'Nativo',
    ingles: 'Inglês',
    estudando: 'Em desenvolvimento',
    hobbies: 'Hobbies e interesses',
    musica: 'Música',
    musicaTexto: 'Teclado e melodias',
    desenho: 'Desenho',
    desenhoTexto: 'Grafite e giz a óleo',
    pixel: 'Pixel art',
    pixelTexto: 'Arte com pixels',
    sudoku: 'Sudoku',
    sudokuTexto: 'Lógica e concentração',
    calistenia: 'Calistenia',
    calisteniaTexto: 'Movimento e consistência',
    rodape: 'Feito com curiosidade e vontade de aprender.',
    fotoAlt: 'Foto de Pamela',
    selo1: 'Curiosidade ativa',
    selo2: 'Aprendendo sempre',
    linkedin: 'Meu LinkedIn',
  },
  en: {
    marca: 'PAMELA.DEV',
    navegacao: ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'],
    etiqueta: 'PORTFOLIO / ABOUT ME',
    titulo: <>Hello,<br />I'm <span>Pamela!</span></>,
    resumo: 'Software Engineering student at PUC Minas. I learn by building projects, exploring technologies, and turning ideas into solutions.',
    github: 'Visit my GitHub',
    contato: 'Contact',
    local: 'Belo Horizonte, Brazil',
    email: 'Contact me by email',
    formacao: 'Education',
    curso: 'Software Engineering',
    instituicao: 'PUC Minas',
    periodo: 'Degree in progress',
    bolsa: 'Full scholarship',
    experiencias: 'Experience and activities',
    experiencia1: 'Technology learning',
    experiencia1Texto: 'Technical support, computer configuration, and troubleshooting.',
    experiencia2: 'Personal projects',
    experiencia2Texto: 'Application development and hands-on programming experience.',
    experiencia3: 'Academic projects',
    experiencia3Texto: 'Teamwork, programming logic, and software development.',
    tags: ['Creativity', 'Curiosity', 'Problem-solving', 'Continuous learning'],
    motivo: 'What motivates me',
    motivoTexto: 'Turning curiosity into solutions.',
    motivoTexto2: 'I enjoy hands-on learning, experimenting with ideas, and building useful things.',
    sobreMim: 'A little more about me',
    sobreMim1: 'My path combines academic learning in Software Engineering with practical experience in IT support. I enjoy understanding how things work, investigating problems, and finding solutions with patience and curiosity.',
    sobreMim2: 'In my studies, I have been exploring programming logic, web development, databases, and building projects. Each project is a chance to turn theory into practice, learn from mistakes, and keep improving.',
    sobreMim3: 'Outside technology, I enjoy music, drawing, pixel art, and logic challenges such as Sudoku. These interests feed my creativity and attention to detail.',
    jornada: 'Tech journey',
    jornadaTexto: 'Technologies I study and use in my projects.',
    nivel: 'Currently learning',
    idiomas: 'Languages',
    portugues: 'Portuguese',
    nativo: 'Native',
    ingles: 'English',
    estudando: 'Improving',
    hobbies: 'Hobbies and interests',
    musica: 'Music',
    musicaTexto: 'Keyboard and melodies',
    desenho: 'Drawing',
    desenhoTexto: 'Graphite and oil pastels',
    pixel: 'Pixel art',
    pixelTexto: 'Pixel-based art',
    sudoku: 'Sudoku',
    sudokuTexto: 'Logic and focus',
    calistenia: 'Calisthenics',
    calisteniaTexto: 'Movement and consistency',
    rodape: 'Made with curiosity and a desire to learn.',
    fotoAlt: 'Photo of Pamela',
    selo1: 'Curiosity in action',
    selo2: 'Always learning',
    linkedin: 'My LinkedIn',
  },
}

const tecnologias = [
  { nome: 'Java', icone: 'bi-cup-hot' },
  { nome: 'Python', icone: 'bi-code-slash' },
  { nome: 'JavaScript', icone: 'bi-braces' },
  { nome: 'HTML & CSS', icone: 'bi-filetype-html' },
  { nome: 'React', icone: 'bi-code-square' },
  { nome: 'SQL', icone: 'bi-database' },
]

export default function Sobre() {
  const { idioma } = useIdioma()
  const texto = idioma === 'en' ? conteudo.en : conteudo.pt

  const email = 'SEU_EMAIL_AQUI'
  const github = 'https://github.com/pamelanilo'
  const linkedin = 'SEU_LINKEDIN_AQUI'

  const hobbies = [
    { icone: 'bi-music-note-beamed', titulo: texto.musica, descricao: texto.musicaTexto },
    { icone: 'bi-pencil', titulo: texto.desenho, descricao: texto.desenhoTexto },
    { icone: 'bi-grid-3x3-gap', titulo: texto.pixel, descricao: texto.pixelTexto },
    { icone: 'bi-puzzle', titulo: texto.sudoku, descricao: texto.sudokuTexto },
    { icone: 'bi-activity', titulo: texto.calistenia, descricao: texto.calisteniaTexto },
  ]

  return (
    <main className="sobre-page">
      <section className="sobre-hero">
        <div className="sobre-hero-texto">
          <span className="sobre-etiqueta">
            <span>✦</span>
            {texto.etiqueta}
          </span>

          <section className="sobre-motivo sobre-mim-detalhado">
            <h2>{texto.sobreMim}</h2>
            <p>{texto.sobreMim1}</p>
            <p>{texto.sobreMim2}</p>
            <p>{texto.sobreMim3}</p>
          </section>

          <a
            className="sobre-botao"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" aria-hidden="true" />
            {texto.github}
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
        </div>

        <div className="sobre-perfil">
          <div className="sobre-quadrado-verde" />

          <img
            className="sobre-foto"
            src="/images/pamela.png"
            alt={texto.fotoAlt}
          />

          <span className="sobre-selo sobre-selo-data">{texto.selo1}</span>
          <span className="sobre-selo sobre-selo-lingua">{texto.selo2}</span>

          <article className="sobre-cartao-contato">
            <h2>{texto.contato}</h2>
            <p><i className="bi bi-geo-alt-fill" /> {texto.local}</p>
            <a href={`mailto:${email}`}>
              <i className="bi bi-envelope-fill" /> {texto.email}
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" /> {texto.linkedin}
            </a>
          </article>
        </div>
      </section>

      <div className="sobre-faixa" aria-hidden="true">
        <span>PORTFOLIO · TECH JOURNEY · PORTFOLIO · TECH JOURNEY ·</span>
      </div>

      <div className="sobre-conteudo">
        <div className="sobre-coluna-esquerda">
          <section className="sobre-formacao">
            <h2>{texto.formacao}</h2>

            <div className="sobre-formacao-item">
              <span className="sobre-estrela">✦</span>
              <div>
                <h3>{texto.curso}</h3>
                <p>{texto.instituicao}</p>
                <div className="sobre-tags">
                  <span>{texto.periodo}</span>
                  <span>{texto.bolsa}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="sobre-experiencias">
            <h2>{texto.experiencias}</h2>

            <article>
              <span className="sobre-experiencia-ponto">01</span>
              <div>
                <h3>{texto.experiencia1}</h3>
                <p>{texto.experiencia1Texto}</p>
              </div>
            </article>

            <article>
              <span className="sobre-experiencia-ponto">02</span>
              <div>
                <h3>{texto.experiencia2}</h3>
                <p>{texto.experiencia2Texto}</p>
              </div>
            </article>

            <article>
              <span className="sobre-experiencia-ponto">03</span>
              <div>
                <h3>{texto.experiencia3}</h3>
                <p>{texto.experiencia3Texto}</p>
              </div>
            </article>

            <div className="sobre-tags sobre-tags-escuras">
              {texto.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </section>

          
        </div>

        <div className="sobre-coluna-direita">
          <section className="sobre-tecnologias" id="tecnologias">
            <span className="sobre-titulo-contorno">TECH JOURNEY</span>
            <h2>{texto.jornada}</h2>
            <p>{texto.jornadaTexto}</p>

            <div className="sobre-tecnologias-grid">
              {tecnologias.map((tecnologia) => (
                <article key={tecnologia.nome} className="sobre-tecnologia">
                  <i className={`bi ${tecnologia.icone}`} aria-hidden="true" />
                  <span>{tecnologia.nome}</span>
                  <small>{texto.nivel}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="sobre-idiomas">
            <h2>{texto.idiomas}</h2>
            <div>
              <article>
                <h3>{texto.portugues}</h3>
                <p>{texto.nativo}</p>
              </article>
              <article>
                <h3>{texto.ingles}</h3>
                <p>{texto.estudando}</p>
              </article>
            </div>
          </section>

          <section className="sobre-hobbies">
            <h2>{texto.hobbies}</h2>
            <div className="sobre-hobbies-grid">
              {hobbies.map((hobby) => (
                <article key={hobby.titulo}>
                  <i className={`bi ${hobby.icone}`} aria-hidden="true" />
                  <h3>{hobby.titulo}</h3>
                  <p>{hobby.descricao}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

    </main>
  )
}
