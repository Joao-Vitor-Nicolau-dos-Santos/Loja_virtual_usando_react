import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import estilos from './Cabecalho.module.css';



function Cabecalho() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    return (
        <header className={estilos.cabecalho}>
            <button className={estilos.menuBtn} onClick={toggleMenu}>
                {menuAtivo ? 'X' : '☰'}
            </button>
            <div className={estilos.esquerda}>
                <Link to="/inicio">Início</Link>
                <Link to="/">Loja</Link>
            </div>
            <span className={estilos.logo}>Lucky</span>
            <div className={estilos.direita}>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contatos</Link>
            </div>
            <nav className={`${estilos.nav} ${menuAtivo ? estilos.active : ''}`}>
                <Link to="/inicio">Início</Link>
                <Link to="/">Loja</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contatos</Link>
            </nav>
        </header>
    );
}

export default Cabecalho;

