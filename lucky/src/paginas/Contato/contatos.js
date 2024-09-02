import Estilos from "./Contato.module.css";

function Contato(){
    return(
        <div className={Estilos.Contato}>
            <h1>Tem alguma dúvida?</h1>
            <h3>Entre em contato conosco.</h3>
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://github.com">Facebook</a>
                    <a href="https://github.com">Github</a>
                    <a href="https://web.whatsapp.com">Whatsapp</a>
        </div>
    );
};

export default Contato;