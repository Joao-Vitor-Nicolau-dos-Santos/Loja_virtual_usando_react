import React from 'react';
import estilos from './Ordenacao.module.css';

function OrdenarProdutos({ criterio, setCriterio }) {
    const handleOrdenacao = (e) => {
        setCriterio(e.target.value);
    };

    return (
        <div clasName={estilos.ordenacao}>
            <label htmlFor="ordenacao">Ordenar por: </label>
            <select id="ordenacao" onChange={handleOrdenacao}>
                <option value="">Selecione</option>
                <option value="preco-asc">Preço: Menor para Maior</option>
                <option value="preco-desc">Preço: Maior para Menor</option>
                <option value="nome-asc">Nome: A-Z</option>
                <option value="nome-desc">Nome: Z-A</option>
            </select>
        </div>
    );
}

export default OrdenarProdutos;
