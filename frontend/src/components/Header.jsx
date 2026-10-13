import { Link, NavLink } from 'react-router-dom'

export default function Header (){
    return(
        <header className="header">
            <div className="header-inner">
                <Link to = "/" className="logo">   
                    <span className="logo-icone"></span>
                        PAMELA.DEV
                </Link>

                <nav className = "menu">
                    <NavLink to="/sobre">/SOBRE</NavLink>
                    <NavLink to="/projetos">/PROJETOS</NavLink>
                    <NavLink to="/experiencias">/EXPERIENCIAS</NavLink>
                    <NavLink to="/contato">/CONTATO</NavLink>
                </nav>

                <button className= "btn-idioma">PT | EN</button>
            </div>
        </header>
    )
}