import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useIdioma } from '../context/IdiomaContext'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const { idioma } = useIdioma()
  const ingles = idioma === 'en'

  const textos = ingles
    ? {
        nome: 'Name',
        seuNome: 'Your name',
        email: 'Email',
        seuEmail: 'you@example.com',
        mensagem: 'Message',
        escrever: 'Write your message...',
        enviar: 'SEND MESSAGE',
        enviando: 'SENDING...',
        sucesso: 'Message sent successfully!',
        erro: 'Could not send the message. Please try again.',
      }
    : {
        nome: 'Nome',
        seuNome: 'Seu nome',
        email: 'E-mail',
        seuEmail: 'voce@exemplo.com',
        mensagem: 'Mensagem',
        escrever: 'Escreva sua mensagem...',
        enviar: 'ENVIAR MENSAGEM',
        enviando: 'ENVIANDO...',
        sucesso: 'Mensagem enviada com sucesso!',
        erro: 'Não foi possível enviar. Confira a configuração e tente novamente.',
      }

 
    async function handleSubmit(event) {
      event.preventDefault()
      setStatus('sending')

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        const confirmationTemplateId =
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID

        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          { publicKey }
        )

        // Tenta enviar a confirmação para quem preencheu o formulário.
        try {
          if (!confirmationTemplateId) {
            throw new Error('ID do template de confirmação não configurado.')
          }

          await emailjs.sendForm(
            serviceId,
            confirmationTemplateId,
            formRef.current,
            { publicKey }
          )
        } catch (confirmationError) {
          console.error(
            'A mensagem foi enviada, mas a confirmação por e-mail falhou:',
            confirmationError
          )
        }

        setStatus('success')
        formRef.current.reset()
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
        setStatus('error')
      }
    }


  return (
    <form
      className="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label htmlFor="nome">{textos.nome}</label>
      <input
        id="nome"
        name="from_name"
        type="text"
        autoComplete="name"
        required
        maxLength={100}
        placeholder={textos.seuNome}
      />

      <label htmlFor="email">{textos.email}</label>
      <input
        id="email"
        name="reply_to"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        placeholder={textos.seuEmail}
      />

      <label htmlFor="mensagem">{textos.mensagem}</label>
      <textarea
        id="mensagem"
        name="message"
        required
        minLength={5}
        maxLength={3000}
        rows={5}
        placeholder={textos.escrever}
      />

      <button
        className="botao-pixel"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? textos.enviando : textos.enviar}
      </button>

      <p role="status" aria-live="polite">
        {status === 'sending' && textos.enviando}
        {status === 'success' && textos.sucesso}
        {status === 'error' && textos.erro}
      </p>
    </form>
  )
}