
/**
 * 
 * Componente SearchBar
 * 
 * Componente que nos va a permitir filtrar en la lista de productos mediante la palabra que nosotros le indiquemos
 * en un cuadro de texto
 * 
 * @param {*} param0 
 * @returns {JSX.Element}
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
    return (
        <div className="contenedor-busqueda">
            <label htmlFor="search-input" className="sr-only ">
                {placeholder}
            </label>
            <input
                id="search-input"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                // Llama a la función proporcionada por el padre en cada cambio
                onChange={(e) => onSearchChange(e.target.value)}
                className="entrada-busqueda"
                aria-label={placeholder}
            />
        </div>
    );
}
export default SearchBar;
