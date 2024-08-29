import React, { useState, useEffect } from 'react';
import estilos from "./Banner.module.css";

function Banner({ imagens }) {
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
        }, 5000);

        return () => clearInterval(intervalo); 
    }, [imagens.length]);

    return (
        <div 
            className={estilos.banner} 
            style={{ backgroundImage: `url(${imagens[indiceAtual]})` }}
        >
        </div>
    );
};

export default Banner;

