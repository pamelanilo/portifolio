import { useEffect, useRef, useState } from 'react'
import lunaAnimada from '../assets/luna-animada.gif'

export default function Luna() {
  const [versao, setVersao] = useState(0)
  const elementoRef = useRef(null)
  const jaEntrou = useRef(false)

  useEffect(() => {
    const elemento = elementoRef.current

    if (!elemento) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          if (jaEntrou.current) {
            setVersao((atual) => atual + 1)
          }

          jaEntrou.current = true
        }
      },
      { threshold: 0.5 }
    )

    observador.observe(elemento)

    return () => observador.disconnect()
  }, [])

  function reiniciarAnimacao() {
    setVersao((atual) => atual + 1)
  }

  return (
    <div
      ref={elementoRef}
      className="luna-sprite"
      onMouseEnter={reiniciarAnimacao}
      role="img"
      aria-label="Luna, personagem em pixel art"
    >
      <img
        key={versao}
        src={lunaAnimada}
        alt=""
        draggable="false"
      />
    </div>
  )
}
