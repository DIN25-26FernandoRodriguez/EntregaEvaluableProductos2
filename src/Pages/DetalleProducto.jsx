import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { deleteProduct, getProductById } from '../services/productosService.js';
import { useEffect } from 'react';
import { useProductById } from '../hooks/useGetProductById.js';

/**
 * 
 * Componente DetalleProducto
 * 
 * Componente que nos va a mostrar toda la información que contiene el producto que seleccionemos
 * Necesario para cuando en una lista de productos no se muestra toda la información que tiene cada producto almacenada
 * 
 * @returns {JSX.Element}
 */
function DetalleProducto(){
    const {id} = useParams();
    const navigate = useNavigate();

    const {product : vela, loading, error } = useProductById(id)


    // Boton eliminar
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Seguro?")
        if(!confirmDelete) return;

        try {
            await deleteProduct(vela.id)
            alert("Producto eliminado correctamente")
            navigate("/listaDeProductos");
        } catch(error){
            alert("Error al eliminar el productio: " + error.message)
        }
    }
     

    if(loading) return <p className='parrafo-informativo'>Cargando producto...</p>
    if (error) return <p className='parrafo-error-rojo'>{error}</p>

    return (
        <main className="contenedor-detalle">
            <Link to="/listaDeProductos"
            className="enlace-volver">
                Volver a los productos
            </Link>

            <div className='fila-flexible-detalle'>
                <section className='seccion-detalle-izquierda'>
                    <img
                        src={`/${vela.imagen}`}
                        alt={vela.nombre}
                        className='imagen-detalle'
                    />

                    <h1 className='titulo-vela'>{vela.nombre}</h1>
                    <p className='precio-vela'>{vela.precio}</p>
                    <button className='boton-carrito'>
                        Agregar al carrito
                    </button>
                    <button
                    onClick={handleDelete}
                    className='boton-eliminar'
                    >
                        Eliminar
                    </button>
                </section>

                <section className='seccion-detalle-derecha'>
                    <h2 className='titulo-descripcion'>Descripción del producto</h2>
                    <p className='parrafo-descripcion'>{vela.descripcion}</p>
                </section>
            </div>
        </main>
    )
}

export default DetalleProducto;
