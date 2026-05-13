import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * 
 * Componente Navbar
 * 
 * Componente que va a controlar y mostrar las diferentes páginas que la web contiene
 * Mediante el Navbar mostraremos al usuario las opciones de navegación que tiene
 * Se mantendrá siempre a la vista para que el usuario pueda redirigirse en cualquier momento
 * 
 * @returns {JSX.Element}
 */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (

    // Contenedor principal de la barra de navegación
    <div className="barra-navegacion">

  

      {/* Navegación para pantallas medianas y grandes */} 
    <nav
      className="enlaces-navegacion" aria-label="Barra de navegación">
      <Link to="/">Inicio</Link>
      <Link to="/listaDeProductos">Nuestras velas</Link>
      <Link to="/quienes">Quienes somos</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/administracion">Administracion</Link>
    </nav>

    {/* Configuración para esconder el boton hamburguesa en pantallas medianas y grandes*/}
    <button onClick={() => setOpen(!open)} className="boton-hamburguesa" aria-label="Menú hamburguesa" 
    aria-expanded={open} aria-controls="menu-movil">☰</button>

    {/* Configuración para que el menu hamburguesa se vea solamente en pantallas pequeñas*/}
    {/* Le he tenido que configurar z-50 porque cuando abria el menu hamburguesa, me costaba seleccionar las opciones y era porque el menu hamburguesa
    se superponia a las opciones. Esto pone encima del menu las opciones y ya no crea problema de usabilidad */}
    <nav id ="menu-movil" className={`menu-movil-desplegable ${open ? "flex" : "hidden"}`} aria-label="Menú para móvil">
                <NavLink to="/" className="enlace-subrayado" onClick={() => setOpen(false)} >Inicio</NavLink>
                <NavLink to="/listaDeProductos"  className="enlace-subrayado" onClick={() => setOpen(false)}>Nuestras velas</NavLink>
                <NavLink to="/quienes"  className="enlace-subrayado" onClick={() => setOpen(false)}>Quienes somos</NavLink>
                <NavLink to="/contacto"  className="enlace-subrayado" onClick={() => setOpen(false)}>Contacto</NavLink>
                <NavLink to="/administracion"  className="enlace-subrayado" onClick={() => setOpen(false)}>Administracion</NavLink>
            </nav>
    </div>

  );
}

export default Navbar;
