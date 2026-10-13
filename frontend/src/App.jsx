import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Experiencias from './pages/Experiencias'
import Contato from './pages/Contato'

export default function App(){
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}