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
      pt: 'Programação Modular — Formas Geométricas',
      en: 'Modular Programming — Geometric Shapes',
    },
    descricao: {
      pt: 'Projeto de programação modular relacionado a formas geométricas. Confira o código-fonte para conhecer sua implementação.',
      en: 'A modular programming project involving geometric shapes. Explore the source code to learn more about its implementation.',
    },
    tecnologias: ['Programação Modular', 'GitHub'],
    github: 'https://github.com/pamelanilo/ProgMod_FormasGeometricas',
    imagem: '/images/projetos/formas-geometricas.gif',
  },
  {
    nome: {
      pt: 'API REST — Clima',
      en: 'Weather REST API',
    },
    descricao: {
      pt: 'Projeto relacionado a uma API REST de clima. Acesse o repositório para conhecer os recursos e detalhes da implementação.',
      en: 'A project involving a weather REST API. Visit the repository to explore its features and implementation details.',
    },
    tecnologias: ['API REST', 'GitHub'],
    github: 'https://github.com/pamelanilo/API-REST-clima',
    imagem: '/images/projetos/api-rest-clima.gif',
  },
]

export default function Home() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

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
            <article className="projeto-card" key={projeto.github}>
              <span className="projeto-numero">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{projeto.nome[idioma] || projeto.nome.pt}</h3>

              <p>{projeto.descricao[idioma] || projeto.descricao.pt}</p>

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
      <section className="secao-portfolio contato-secao" id="contato">
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