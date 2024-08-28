import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from "./componentes/Banner";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import Produtos from './componentes/Produtos';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
      axios.get('https://api.escuelajs.co/api/v1/products')
          .then(response => {
              setProdutos(response.data);
          })
          .catch(error => {
              console.error('Erro ao buscar dados:', error);
          });
  }, []);
  return (
    <>
      <Cabecalho />

      <Banner />

      <Conteudo>
        <Produtos dados={produtos} />
      </Conteudo> 

      <Rodape />
    </>
  );
}

export default App;
