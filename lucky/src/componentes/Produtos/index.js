import React from 'react';
import estilos from './Produtos.module.css';

function Produtos({ dados, addToCart }) { // Adiciona a função addToCart como prop
    return (
        <div className={estilos.produtos}>
            <h2>Lista de Produtos</h2>
            <ul>
                {dados.map(produto => (
                    <li key={produto.id}>
                        <h3>{produto.title}</h3>
                        <p>Preço: ${produto.price}</p>
                        <img src={produto.images[0]} alt={produto.title} />
                        <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button> {/* Botão para adicionar ao carrinho */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Produtos;

