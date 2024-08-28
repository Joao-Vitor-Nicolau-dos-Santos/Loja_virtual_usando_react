import estilos from "./Conteudo.module.css";

function Conteudo({children}) {
    return(
        <sections className={estilos.conteudo}>
            {children}
        </sections>
    );
}

export default Conteudo;