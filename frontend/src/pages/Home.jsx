import { Link } from 'react-router-dom'
import StarField from '../components/StarField'

export default function Home(){
    return (
        <section className="hero">
            <StarField />

            <div className="hero-conteudo">
                <div className="selo">PUC MINAS • ENGENHARIA DE SOFTWARE</div>
                <h1> Bem-Vindos!</h1>
                <p>Frase sobre o que eu faço</p>
                <Link to ="/sobre" className="botao-pixel">CONHECER PERFIL</Link>
            </div>

            <svg className="hero-curva" viewBow="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C300, 90 600,110,1200,30, L1200, 120 L0,120 Z" fill = "#FFFFFF" />
            </svg>
        </section>
    )
}