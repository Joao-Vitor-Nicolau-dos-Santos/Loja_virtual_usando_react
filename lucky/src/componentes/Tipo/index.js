import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estilos from './Tipo.module.css';

function FiltrarTipo({ tipo, setTipo }) {
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => {
                setTipos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar tipos de produtos:', error);
            });
    }, []);

    const handleFiltro = (e) => {
        setTipo(e.target.value);
    };

    return (
        <div className={estilos.filtroTipo}>
            <label htmlFor="filtroTipo">Filtrar por tipo: </label>
            <select id="filtroTipo" value={tipo} onChange={handleFiltro}>
                <option value="">Todos</option>
                {tipos.map(t => (
                    <option key={t.id} value={t.name}>
                        {t.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltrarTipo;
