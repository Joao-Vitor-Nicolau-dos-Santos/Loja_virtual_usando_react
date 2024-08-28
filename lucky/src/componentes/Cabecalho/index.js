// import estilos from "./Cabecalho.module.css";

// function Cabecalho() {
//     return(
//         <header className={estilos.cabecalho}>
//             <nav>
//                 <a href="#">Ínicio</a>
//                 <a href="#">Loja</a>
//             </nav>  
//             <span>Lucky</span>
//             <nav>
//                 <a href="#">Sobre</a>
//                 <a href="#">Contatos</a>
//             </nav>
//         </header>
//     )
// }

// export default Cabecalho;

import React, { useState } from 'react';
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
                <a href="#">Ínicio</a>
                <a href="#">Loja</a>
            </div>
            <span className={estilos.logo}>Lucky</span>
            <div className={estilos.direita}>
                <a href="#">Sobre</a>
                <a href="#">Contatos</a>
            </div>
            <nav className={menuAtivo ? estilos.active : ''}>
                <a href="#">Ínício</a>
                <a href="#">Loja</a>
                <a href="#">Sobre</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    );
}

export default Cabecalho;
