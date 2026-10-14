
import { useIdioma } from '../context/IdiomaContext'

export default function Experiencias() {
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  const experiencias = [
    {
      id: 'ej',
      periodo: {
        pt: 'Fevereiro de 2026 – Atual',
        en: 'February 2026 – Present',
      },
      cargo: {
        pt: 'Membro de Governança',
        en: 'Governance Member',
      },
      organizacao: 'EJ Software & ADS — PUC Minas',
      descricao: {
        pt: 'Participação na estruturação da empresa júnior, em capacitações internas, no acompanhamento de sprints e na identificação de oportunidades de melhoria nos processos da equipe.',
        en: 'Contributing to the junior enterprise’s development, internal training, sprint monitoring, and identifying opportunities to improve team processes.',
      },
    },
    {
      id: 'agile',
      periodo: {
        pt: 'Março de 2025 – Setembro de 2025',
        en: 'March 2025 – September 2025',
      },
      cargo: {
        pt: 'Jovem Aprendiz de Desenvolvimento em TI',
        en: 'IT Development Apprentice',
      },
      organizacao: 'AGILE Empreendimentos e Serviços LTDA',
      descricao: {
        pt: 'Apoio técnico a usuários internos e equipes terceirizadas, suporte às áreas de faturamento e recursos humanos e colaboração na concepção de um sistema interno de gestão, incluindo ideias para interface e experiência do usuário (UI/UX).',
        en: 'Provided technical support to internal users and outsourced teams, assisted billing and human resources departments, and contributed to the conceptual development of an internal management system, including user interface and user experience (UI/UX) ideas.',
      },
    },
  ]

  return (
    <main className="page">
      <section className="secao-portfolio">
        <p className="rotulo-secao">
          {ingles ? 'MY PROFESSIONAL JOURNEY' : 'MINHA TRAJETÓRIA PROFISSIONAL'}
        </p>

        <h1>{ingles ? 'Experience' : 'Experiências'}</h1>

        <p className="introducao-secao">
          {ingles
            ? 'Experiences that have contributed to my technical and professional development.'
            : 'Experiências que contribuem para meu desenvolvimento técnico e profissional.'}
        </p>

        <div className="timeline">
          {experiencias.map((experiencia) => (
            <article className="timeline-item" key={experiencia.id}>
              <span className="timeline-ponto" />

              <p className="timeline-data">
                {experiencia.periodo[idioma]}
              </p>

              <h2>{experiencia.cargo[idioma]}</h2>

              <h3>{experiencia.organizacao}</h3>

              <p>{experiencia.descricao[idioma]}</p>
            </article>
          ))}
        </div>

        <section className="formacao">
          <h2>{ingles ? 'Education' : 'Formação acadêmica'}</h2>

          <article className="timeline-item">
            <p className="timeline-data">
              {ingles ? 'February 2026 – December 2030' : 'Fevereiro de 2026 – Dezembro de 2030'}
            </p>

            <h3>{ingles ? 'Software Engineering' : 'Engenharia de Software'}</h3>

            <p>PUC Minas</p>

            <p>
              {ingles
                ? 'Undergraduate degree focused on software development, programming, and software engineering principles.'
                : 'Graduação com foco em desenvolvimento de software, programação e fundamentos da engenharia de software.'}
            </p>
          </article>

          <article className="timeline-item">
            <p className="timeline-data">
              {ingles ? 'February 2022 – December 2024' : 'Fevereiro de 2022 – Dezembro de 2024'}
            </p>

            <h3>
              {ingles
                ? 'Technical Program in Internet Computing'
                : 'Técnico em Informática para Internet'}
            </h3>

            <p>SESI SENAI Horto</p>

            <p>
              {ingles
                ? 'Technical education covering web development and database fundamentals.'
                : 'Formação técnica com conteúdos de desenvolvimento web e fundamentos de bancos de dados.'}
            </p>
          </article>
        </section>

        <section className="formacao">
          <h2>{ingles ? 'Languages' : 'Idiomas'}</h2>

          <p>
            <strong>{ingles ? 'Portuguese:' : 'Português:'}</strong>{' '}
            {ingles ? 'Native' : 'Nativo'}
          </p>

          <p>
            <strong>{ingles ? 'English:' : 'Inglês:'}</strong>{' '}
            {ingles ? 'Intermediate' : 'Intermediário'}
          </p>
        </section>
      </section>
    </main>
  )
}
