import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Banner from "./componentes/Banner/index.js";
import Cabecalho from "./componentes/Cabecalho/index.js";
import Conteudo from "./componentes/Conteudo/index.js";
import Rodape from "./componentes/Rodape/index.js";
import Produtos from './componentes/Produtos/index.js';
import OrdenarProdutos from './componentes/Ordenacao/index.js';
import FiltrarTipo from './componentes/Tipo/index.js';
import Carrinho from './componentes/Carrinho/index.js';

import estilos from './componentes/Carrinho/Carrinho.module.css';

import Inicio from './paginas/Inicio/inicio.js';
import Contato from './paginas/Contato/contatos.js';
import Sobre from './paginas/Sobre/sobre.js';

const imagens = [
    'https://i.imgur.com/QkIa5tT.jpeg',
    'https://i.imgur.com/Qphac99.jpeg',
    'https://i.imgur.com/ZANVnHE.jpeg',
    'https://i.imgur.com/qNOjJje.jpeg',
    'https://i.imgur.com/BG8J0Fj.jpeg'
];

function App() {
  const [produtos, setProdutos] = useState([]);
  const [criterioOrdenacao, setCriterioOrdenacao] = useState('');
  const [tipo, setTipo] = useState(''); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      axios.get('https://api.escuelajs.co/api/v1/products')
          .then(response => {
              setProdutos(response.data);
          })
          .catch(error => {
              console.error('Erro ao buscar dados:', error);
          });
  }, []);

  const ordenarProdutos = (produtos, criterio) => {
      switch (criterio) {
          case 'preco-asc':
              return [...produtos].sort((a, b) => a.price - b.price);
          case 'preco-desc':
              return [...produtos].sort((a, b) => b.price - a.price);
          case 'nome-asc':
              return [...produtos].sort((a, b) => a.title.localeCompare(b.title));
          case 'nome-desc':
              return [...produtos].sort((a, b) => b.title.localeCompare(a.title));
          default:
              return produtos;
      }
  };

  const filtrarProdutos = (produtos, tipo) => {
      if (tipo) {
          return produtos.filter(produto => produto.category.name === tipo); 
      }
      return produtos;
  };

  const addToCart = (produto) => {
      setCartItems([...cartItems, produto]);
  };

  const getTotalItemsInCart = () => {
      return cartItems.length;
  };

  return (
    <Router>
      <Cabecalho />

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Conteudo>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Banner imagens={imagens} />
                <FiltrarTipo tipo={tipo} setTipo={setTipo} /> 
                <OrdenarProdutos criterio={criterioOrdenacao} setCriterio={setCriterioOrdenacao} />
                <Produtos dados={ordenarProdutos(filtrarProdutos(produtos, tipo), criterioOrdenacao)} addToCart={addToCart} />
              </>
            } 
          />
          <Route 
            path="/carrinho" 
            element={
              <Carrinho cartItems={cartItems} />
            } 
          />
        </Routes>
      </Conteudo> 

      <Link to="/carrinho" className={estilos.iconeCarrinho}>
        🛒
        {getTotalItemsInCart() > 0 && (
          <span className={estilos.contadorCarrinho}>{getTotalItemsInCart()}</span>
        )}
      </Link>

      <Rodape />
    </Router>
  );
}

export default App;



