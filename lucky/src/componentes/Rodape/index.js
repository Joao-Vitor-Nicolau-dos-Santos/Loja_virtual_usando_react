import estilos from "./Rodape.module.css";

function Rodape() {
    return(
        <footer className={estilos.rodape}>
            <h2>Lucky &copy; Desenvolvido por João Vitor Nicolau dos Santos</h2>
            
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://github.com">GitHub</a>
                    <a href="https://www.facebook.com">Facebook</a>
                
        </footer>
    );
}

export default Rodape;