
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('Enviando...')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setStatus('Mensagem enviada com sucesso!')
      formRef.current.reset()
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setStatus('Não foi possível enviar. Tente novamente.')
    }
  }

  return (
    <form
      className="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="from_name"
        type="text"
        autoComplete="name"
        required
        maxLength={100}
        placeholder="Seu nome"
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="reply_to"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        placeholder="voce@exemplo.com"
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="message"
        required
        minLength={5}
        maxLength={3000}
        rows={5}
        placeholder="Escreva sua mensagem..."
      />

      <button
        className="botao-pixel"
        type="submit"
        disabled={status === 'Enviando...'}
      >
        {status === 'Enviando...' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
      </button>

      <p role="status" aria-live="polite">{status}</p>
    </form>
  )
}
