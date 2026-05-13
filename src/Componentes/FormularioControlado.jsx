import { useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";


/**
 * Componente FormularioControlado
 * 
 * Formulario controlado para poder añadir productos al catálogo de la página.
 * Gestiona el estado de cada uno de los campos que el usuario tiene que rellenar para poder crear el producto.
 * Valida que los campos necesarios esten correctamente rellenados.
 * 
 * @component
 * @returns {JSX.Element}
 */
const formularioInicial = {
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    imagen: ""
}



function FormularioControlado(){
    const [formData, setFormData] = useState(formularioInicial)
    const [error, setError] = useState({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        imagen: ""
    })

    const { addProduct, loading, error: apiError } = useCreateProduct();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prev) => ({...prev, [id]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {};
        const precio = Number(formData.precio)

        if (formData.nombre.trim() === "") newErrors.nombre = "Debes introducir un nombre para el producto"
        if (formData.descripcion.trim() === "") newErrors.descripcion = "Debes introducir una descripción del producto"
        if(!formData.categoria) newErrors.categoria = "Debes seleccionar una categoria"
        if (!precio || precio <=0) newErrors.precio = "Debes introducir un precio valido para el producto" 
        if (!formData.imagen.startsWith("http")) newErrors.imagen = "Debes introducir una URL válida para la imagen"

        setError(newErrors)

        if(Object.keys(newErrors).length === 0){
            alert("Formulario válido. Producto añadido")
            addProduct(formData)
            setFormData(formularioInicial)
        } 
    }

    return (
        
        <div className="contenedor-pantalla-centrada">
            <form
                onSubmit={handleSubmit}
                className="formulario-blanco"
                noValidate
            >
                <h1 className="titulo-seccion">
                    Añadir nuevo producto
                </h1>
                <p>{apiError}</p>

                <div className="separacion-bloque">
                    <label htmlFor="nombre" className="etiqueta-formulario">
                        Nombre del producto
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="entrada-texto"
                    />
                    {error.nombre && <p className="mensaje-error">{error.nombre}</p>}
                </div>

                <div className="separacion-bloque">
                    <label htmlFor="descripcion" className="etiqueta-formulario">
                        Descripcion del producto
                    </label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className="entrada-texto"
                    />
                    {error.descripcion && <p className="mensaje-error">{error.descripcion}</p>}
                </div>

                <div className="separacion-bloque">
                    <label htmlFor="categoria" className="etiqueta-formulario">
                        Categoria del producto
                    </label>
                    <select
                        id="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className="entrada-texto"
                    >
                    <option value="">Selecciona una opcion</option>
                    <option value="velas-aroma">Velas con aroma</option>
                    </select>
                    {error.categoria && <p className="mensaje-error">{error.categoria}</p>}
                </div>

                <div className="separacion-bloque">
                    <label htmlFor="precio" className="etiqueta-formulario">
                        Precio del producto
                    </label>
                    <input
                        id="precio"
                        type="number"
                        value={formData.precio}
                        onChange={handleChange}
                        className="entrada-texto"
                    />
                    {error.precio && <p className="mensaje-error">{error.precio}</p>}
                </div>

                <div className="separacion-bloque">
                    <label htmlFor="imagen" className="etiqueta-formulario">
                        Imagen del producto
                    </label>
                    <input
                    id="imagen"
                    type="text"
                    value={formData.imagen}
                    onChange={handleChange}
                    className="entrada-texto"
                    />
                    {error.imagen && <p className="mensaje-error">{error.imagen}</p>}
                </div>

                <button
                    type="submit"
                    className="boton-formulario"
                >
                    Añadir producto
                </button>    
            </form>
        </div>
    )
}

export default FormularioControlado
