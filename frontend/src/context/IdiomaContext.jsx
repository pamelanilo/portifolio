
import { createContext, useContext, useState } from 'react'

const IdiomaContext = createContext(null)

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'pt'
  })

  function alternarIdioma() {
    setIdioma((atual) => {
      const novoIdioma = atual === 'pt' ? 'en' : 'pt'

      localStorage.setItem('portfolio-language', novoIdioma)
      document.documentElement.lang = novoIdioma

      return novoIdioma
    })
  }

  return (
    <IdiomaContext.Provider value={{ idioma, alternarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  )
}

export function useIdioma() {
  return useContext(IdiomaContext)
}
