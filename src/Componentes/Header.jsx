import Navbar from "./Navbar";

/**
 * 
 * Componente Header
 * 
 * Componente que va a dar forma a la cabecera de la página web
 * En ella mostraremos la imagen de la empresa y el componente NavBar donde el usuario podra navegar a través de las ventanas de la página
 * 
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <>
      <header className="cabecera-logo">
        
        <img
          src="/Icono.png"
          alt="Logo YourLittleCandle"
          className="imagen-logo"
        />

        <Navbar/>
      </header>
      
    </>
  );
}

export default Header;
