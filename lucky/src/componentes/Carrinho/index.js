import React from 'react';
import estilos from './Carrinho.module.css';

function Carrinho({ cartItems, removeFromCart, finalizePurchase }) {
    return (
        <div className={estilos.carrinho}>
            <h2>Seu Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className={estilos.itemCarrinho}>
                            <img src={item.images[0]} alt={item.title} className={estilos.imagemProduto} />
                            <div className={estilos.detalhesProduto}>
                                <h3>{item.title}</h3>
                                <p>Preço: ${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remover</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <button onClick={finalizePurchase} className={estilos.finalizarCompra}>Finalizar Compra</button>
            )}
        </div>
    );
}

export default Carrinho;
