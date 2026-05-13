import { Link } from "react-router-dom";

/**
 * 
 * Componente Footer
 * 
 * Componente que va a dar forma a la parte inferior de la página web
 * En el se mostrara toda la información necesaria referente a la empresa como correos electrónicos, redes sociales y enlaces de interes
 * 
 * @returns {JSX.Element}
 */
function Footer(){
    return(
        <footer
            className="pie-pagina"
            aria-label="Footer">
                <Link to="/redes"> Nuestras redes</Link>
                <Link to="/ubicaciones">Ubicación</Link>
            </footer>
    )
}

export default Footer;
