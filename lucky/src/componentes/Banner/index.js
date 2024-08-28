import estilos from "./Banner.module.css";

function Banner({ imagem }) {
    return (
        <div 
            className={estilos.banner} 
            style={{ backgroundImage: `url(${imagem})` }}
        >
        </div>
    );
};

export default Banner;
