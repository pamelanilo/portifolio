import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let stars = []
    let frameId

    function iniciar() {
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
      stars = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() < 0.8 ? 1.5 : 2.5,
        alpha: Math.random(),
        speed: 0.01 + Math.random() * 0.02,
      }))
    }

    function desenhar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        s.alpha += s.speed
        if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed
        ctx.fillStyle = '#64DFDF'
        ctx.globalAlpha = Math.abs(s.alpha)
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size)
      })
      frameId = requestAnimationFrame(desenhar)
    }

    iniciar()
    desenhar()
    window.addEventListener('resize', iniciar)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', iniciar)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" />
}