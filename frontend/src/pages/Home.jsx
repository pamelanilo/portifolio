
import { Link } from 'react-router-dom'
import StarField from '../components/StarField'
import SobreResumo from '../components/SobreResumo'
import ContactForm from '../components/ContactForm'

const projetos = [
  {
    nome: 'Portfólio pessoal',
    descricao:
      'Desenvolvimento de uma página pessoal para apresentar minha trajetória, meus projetos e minhas habilidades.',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/pamelanilo/portifolio',
  },
  {
    nome: 'CRUD com PHP e MySQL',
    descricao:
      'Projeto acadêmico de cadastro, consulta, atualização e exclusão de registros em um banco de dados.',
    tecnologias: ['PHP', 'MySQL'],
    github: 'https://github.com/pamelanilo',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="inicio">
        <StarField />

        <div className="hero-conteudo">
          <div className="selo"
            data-pt="PUC MINAS • ENGENHARIA DE SOFTWARE"
            data-en="PUC MINAS • SOFTWARE ENGINEERING">
            PUC MINAS • ENGENHARIA DE SOFTWARE
          </div>

          <h1 data-pt="Bem-vindos!" data-en="Welcome!">
            Bem-vindos!
          </h1>

          <p
            data-pt="Transformando ideias em projetos com código."
            data-en="Turning ideas into projects with code."
          >
            Transformando ideias em projetos com código.
          </p>

          <a
            href="#sobre"
            className="botao-pixel"
            data-pt="CONHECER PERFIL"
            data-en="MEET MY PROFILE"
          >
            CONHECER PERFIL
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

      <div className="revelar-rolagem">
        <SobreResumo />
      </div>

      <section className="secao-portfolio" id="projetos">
        <p className="rotulo-secao">02 / PROJECTS</p>

        <h2 data-pt="Meus projetos" data-en="My projects">
          Meus projetos
        </h2>

        <p className="introducao-secao"
          data-pt="Projetos que fazem parte da minha jornada de aprendizado."
          data-en="Projects from my learning journey.">
          Projetos que fazem parte da minha jornada de aprendizado.
        </p>

        <div className="grade-projetos">
          {projetos.map((projeto, index) => (
            <article className="projeto-card" key={projeto.nome}>
              <span className="projeto-numero">
                0{index + 1}
              </span>

              <h3>{projeto.nome}</h3>

              <p>{projeto.descricao}</p>

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
                VER NO GITHUB ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="secao-portfolio" id="experiencias">
        <p className="rotulo-secao">03 / EXPERIENCE</p>

        <h2 data-pt="Minha trajetória" data-en="My journey">
          Minha trajetória
        </h2>

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-ponto" />

            <p className="timeline-data">ATUAL</p>

            <h3 data-pt="Suporte em TI"
                data-en="IT Support">
              Suporte em TI
            </h3>

            <p
              data-pt="Experiência com atendimento técnico, acesso remoto, impressoras, configuração básica de computadores e apoio na resolução de problemas."
              data-en="Experience with technical support, remote access, printers, basic computer configuration, and troubleshooting."
            >
              Experiência com atendimento técnico, acesso remoto,
              impressoras, configuração básica de computadores e
              apoio na resolução de problemas.
            </p>
          </article>

          <article className="timeline-item">
            <span className="timeline-ponto" />

            <p className="timeline-data">FORMAÇÃO</p>

            <h3 data-pt="Engenharia de Software"
                data-en="Software Engineering">
              Engenharia de Software
            </h3>

            <p
              data-pt="Formação acadêmica com foco em desenvolvimento de software, lógica, programação e construção de soluções."
              data-en="Academic training focused on software development, logic, programming, and building solutions."
            >
              Formação acadêmica com foco em desenvolvimento de
              software, lógica, programação e construção de soluções.
            </p>
          </article>
        </div>
      </section>

      <section className="secao-portfolio" id="habilidades">
        <p className="rotulo-secao">04 / SKILLS</p>

        <h2 data-pt="Habilidades e tecnologias"
            data-en="Skills and technologies">
          Habilidades e tecnologias
        </h2>

        <div className="grade-habilidades">
          {['Java', 'Python', 'JavaScript', 'React', 'PHP', 'SQL', 'Git', 'HTML & CSS'].map((item) => (
            <div className="habilidade-card" key={item}>
              <span aria-hidden="true">&lt;/&gt;</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="secao-portfolio contato-secao" id="contato">
        <p className="rotulo-secao">05 / CONTACT</p>

        <h2 data-pt="Vamos conversar?"
            data-en="Let's connect!">
          Vamos conversar?
        </h2>

        <p
          data-pt="Quer conhecer meus projetos ou conversar sobre oportunidades?"
          data-en="Want to explore my projects or talk about opportunities?"
        >
          Quer conhecer meus projetos ou conversar sobre oportunidades?
        </p>

        <div className="contato-links">
          <a href="https://github.com/pamelanilo"
             target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/"
             target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <p className="aviso-contato">
          Personalize os links de contato com seus perfis reais.
        </p>

        <a href="/#inicio" className="voltar-topo">
        ↑ VOLTAR AO TOPO
      </a>
      </section>
    </>
  )
}


