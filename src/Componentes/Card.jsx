import { Link } from "react-router-dom";
import { deleteProduct } from "../services/productosService";

/**
 * Componente Card
 * Componente que va a coger la información que se le pasa por parámetro y la va a colocar dentro de un elemento con forma de Card
 * Muestra la información que se le pasa por parámetro de manera clara y ordenada
 * Necesario para cuando se quieren mostrar muchos elementos con la misma plantilla de visualización
 * 
 * @component
 * @param {image, name, price, to} props 
 * @returns {JSX.Element}
 */

function Card({image, name, price, to, children}){


return(
    <Link to={to} aria-label={`Abrir detalle de ${name}`} className="tarjeta-enlace">
        <article className="articulo-tarjeta">

            <figure className="figura-tarjeta">
                <img className="imagen-tarjeta" src={image} alt={name} />
                <figcaption className="sr-only">
                    Imagen del producto {name}
                </figcaption>
            </figure>
            <div>
                <h2 className="titulo-tarjeta">{name}</h2>
                <p><strong>{price}</strong></p>
                <p>{children}</p>
            </div>
        </article>
    </Link>
    )
}

export default Card;
