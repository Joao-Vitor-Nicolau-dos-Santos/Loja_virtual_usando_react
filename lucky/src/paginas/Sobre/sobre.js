import estilos from './Sobre.module.css';

function Sobre(){
    return(
        <div className={estilos.conteudo}>
            <h1>Conheça nossa história:</h1>
            <span>Esse site foi feito para um processo seletivo de para programador Front-End desenvolvido pelo
            João Vitor Nicolau dos Santos. O projeto usa React e Css, fique a vontade para usar como base para 
            o seu projeto; eu só agradeceria se quem for usar desse os créditos.
            <br></br>Obrigado por escolher esse código.<br></br></span>
            <br></br>
            <h3>Aproveite 🍀</h3>
        </div>
    );
};

export default Sobre;