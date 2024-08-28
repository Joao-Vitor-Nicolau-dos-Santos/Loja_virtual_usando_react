import React from 'react';
import estilos from './Produtos.module.css';

function Produtos({ dados }) {
    return (
        <div className={estilos.produtos}>
            <h2>Lista de Produtos</h2>
            <ul>
                {dados.map(produto => (
                    <li key={produto.id}>
                        <h3>{produto.title}</h3>
                        <p>Preço: ${produto.price}</p>
                        <img src={produto.images[0]} alt={produto.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Produtos;
