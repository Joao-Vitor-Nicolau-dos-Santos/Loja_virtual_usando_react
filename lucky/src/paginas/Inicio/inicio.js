import Estilos from './Inicio.module.css';
import { BrowserRouter as Link } from 'react-router-dom';

function Inicio(){
    return(
        <div className={Estilos.inicio}>
            <h1>Seja mais do que bem-vindo a Lucky.</h1>
            <h3>Somos uma pequena loja que vende todo tipo de produto, de eletrônicos a sapatos, de roupas a móveis.</h3>
            <h4>Seja o que for que você busca nós; da Lucky, temos para fornecer para você</h4>
            <h2>Aproveite nossos produtos.</h2>

            <Link to="/" className={Estilos.btnLoja}>Vamos comprar?</Link>
        </div>
    );
};

export default Inicio;