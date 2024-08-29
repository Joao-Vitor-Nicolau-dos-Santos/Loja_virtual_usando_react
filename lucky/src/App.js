import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from "./componentes/Banner/index.js";
import Cabecalho from "./componentes/Cabecalho/index.js";
import Conteudo from "./componentes/Conteudo/index.js";
import Rodape from "./componentes/Rodape/index.js";
import Produtos from './componentes/Produtos/index.js';
import OrdenarProdutos from './componentes/Ordenacao/index.js';

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

  return (
    <>
    
      <Cabecalho />

      <Banner imagens={imagens} />

      <Conteudo>
        <OrdenarProdutos criterio={criterioOrdenacao} setCriterio={setCriterioOrdenacao} />
        <Produtos dados={ordenarProdutos(produtos, criterioOrdenacao)} />
      </Conteudo> 

      <Rodape />
    </>
  );
}

export default App;
