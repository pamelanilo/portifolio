
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
        mensagem: 'Message',
        seuEmail: 'you@example.com',
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
        mensagem: 'Mensagem',
        seuEmail: 'voce@exemplo.com',
        escrever: 'Escreva sua mensagem...',
        enviar: 'ENVIAR MENSAGEM',
        enviando: 'ENVIANDO...',
        sucesso: 'Mensagem enviada com sucesso!',
        erro: 'Não foi possível enviar. Tente novamente.',
      }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

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
