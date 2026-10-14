import { Link } from 'react-router-dom'
import StarField from '../components/StarField'
import SobreResumo from '../components/SobreResumo'
import { useIdioma } from '../context/IdiomaContext'
import ContactForm from '../components/ContactForm'
import SkillsGlobe from '../components/SkillsGlobe'
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const projetos = [
  {
    nome: {
      pt: 'Portfólio pessoal',
      en: 'Personal portfolio',
    },
    descricao: {
      pt: 'Desenvolvimento de uma página pessoal para apresentar minha trajetória, meus projetos e minhas habilidades.',
      en: 'Development of a personal website to showcase my journey, projects, and skills.',
    },
    tecnologias: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/pamelanilo/portifolio',
  },
  {
    nome: {
      pt: 'CRUD com PHP e MySQL',
      en: 'CRUD with PHP and MySQL',
    },
    descricao: {
      pt: 'Projeto acadêmico de cadastro, consulta, atualização e exclusão de registros em um banco de dados.',
      en: 'Academic project for creating, reading, updating, and deleting records in a database.',
    },
    tecnologias: ['PHP', 'MySQL'],
    github: 'https://github.com/pamelanilo',
  },
]

export default function Home() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  const habilidades = [
    'Java',
    'Python',
    'JavaScript',
    'React',
    'PHP',
    'SQL',
    'Git',
    'HTML & CSS',
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <StarField />

        <div className="hero-conteudo">
          <div className="selo">
            {ingles
              ? 'PUC MINAS • SOFTWARE ENGINEERING'
              : 'PUC MINAS • ENGENHARIA DE SOFTWARE'}
          </div>

          <h1>{ingles ? 'Welcome!' : 'Bem-vindos!'}</h1>

          <p>
            {ingles
              ? 'Turning ideas into projects with code.'
              : 'Transformando ideias em projetos com código.'}
          </p>

          <a href="#sobre" className="botao-pixel">
            {ingles ? 'MEET MY PROFILE' : 'CONHECER PERFIL'}
          </a>
        </div>

        <svg
          className="hero-onda"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 20 C360 135 800 180 1440 55 L1440 160 L0 160 Z" />
        </svg>
      </section>

      {/* SOBRE RESUMIDO */}
      <div id="sobre">
        <SobreResumo />
      </div>

      {/* PROJETOS */}
      <section className="secao-portfolio" id="projetos">
        <p className="rotulo-secao">
          {ingles ? '02 / PROJECTS' : '02 / PROJETOS'}
        </p>

        <h2>{ingles ? 'My projects' : 'Meus projetos'}</h2>

        <p className="introducao-secao">
          {ingles
            ? 'Projects from my learning journey.'
            : 'Projetos que fazem parte da minha jornada de aprendizado.'}
        </p>

        <div className="grade-projetos">
          {projetos.map((projeto, index) => (
            <article className="projeto-card" key={projeto.nome.pt}>
              <span className="projeto-numero">
                0{index + 1}
              </span>

              <h3>{projeto.nome[idioma]}</h3>

              <p>{projeto.descricao[idioma]}</p>

              <div className="tecnologias">
                {projeto.tecnologias.map((tecnologia) => (
                  <span key={tecnologia}>{tecnologia}</span>
                ))}
              </div>

              <a
                href={projeto.github}
                target="_blank"
                rel="noreferrer"
                className="link-projeto"
              >
                {ingles ? 'VIEW ON GITHUB ↗' : 'VER NO GITHUB ↗'}
              </a>
            </article>
          ))}
        </div>

        <div className="portfolio-ver-mais">
          <Link to="/projetos" className="link-seta">
            {ingles
              ? 'Explore all projects →'
              : 'Explore todos os projetos →'}
          </Link>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="secao-portfolio" id="experiencias">
        <p className="rotulo-secao">
          {ingles ? '03 / EXPERIENCE' : '03 / EXPERIÊNCIAS'}
        </p>

        <h2>{ingles ? 'My journey' : 'Minha trajetória'}</h2>

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-ponto" />

            <p className="timeline-data">
              {ingles ? 'CURRENT' : 'ATUAL'}
            </p>

            <h3>{ingles ? 'IT Support' : 'Suporte em TI'}</h3>

            <p>
              {ingles
                ? 'Experience with technical support, remote access, printers, basic computer configuration, and troubleshooting.'
                : 'Experiência com atendimento técnico, acesso remoto, impressoras, configuração básica de computadores e apoio na resolução de problemas.'}
            </p>
          </article>

          <article className="timeline-item">
            <span className="timeline-ponto" />

            <p className="timeline-data">
              {ingles ? 'EDUCATION' : 'FORMAÇÃO'}
            </p>

            <h3>
              {ingles ? 'Software Engineering' : 'Engenharia de Software'}
            </h3>

            <p>
              {ingles
                ? 'Academic training focused on software development, logic, programming, and building solutions.'
                : 'Formação acadêmica com foco em desenvolvimento de software, lógica, programação e construção de soluções.'}
            </p>
          </article>
        </div>

        <div className="portfolio-ver-mais">
          <Link to="/experiencias" className="link-seta">
            {ingles
              ? 'Discover my experiences →'
              : 'Conheça minhas experiências →'}
          </Link>
        </div>
      </section>

      {/* HABILIDADES */}
   
      <section className="secao-portfolio" id="habilidades">
        <p className="rotulo-secao">
          {ingles ? '04 / SKILLS' : '04 / HABILIDADES'}
        </p>

        <h2>
          {ingles
            ? 'Skills and technologies'
            : 'Habilidades e tecnologias'}
        </h2>

        <p className="introducao-secao">
          {ingles
            ? 'The technologies I explore while building projects and developing my skills.'
            : 'As tecnologias que exploro enquanto construo projetos e desenvolvo minhas habilidades.'}
        </p>

        <div className="home-skills-globe">
          <SkillsGlobe />
        </div>

        <div className="portfolio-ver-mais">
          <Link to="/sobre#habilidades" className="link-seta">
            {ingles
              ? 'Explore my skills →'
              : 'Conheça minhas habilidades →'}
          </Link>
        </div>
      </section>


      {/* CONTATO */}
      <section
        className="secao-portfolio contato-secao"
        id="contato"
      >
        <p className="rotulo-secao">
          {ingles ? '05 / CONTACT' : '05 / CONTATO'}
        </p>

        <h2>{ingles ? "Let's connect!" : 'Vamos conversar?'}</h2>

        <p>
          {ingles
            ? 'Want to explore my projects or talk about opportunities?'
            : 'Quer conhecer meus projetos ou conversar sobre oportunidades?'}
        </p>

        <div className="contato-links">
          <a
            href="https://wa.me/5531994682576"
            target="_blank"
            rel="noreferrer"
            aria-label="Conversar pelo WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://github.com/pamelanilo"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/SEU-PERFIL/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver LinkedIn"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </div>

        <ContactForm />
      </section>
    </>
  )
}