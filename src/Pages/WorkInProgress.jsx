import { Link } from 'react-router-dom';

// Componente que muestra una página de "En construcción"
function WorkInProgress() {
  return (
    
    <div className="contenedor-pagina-alto">

{/* Enlace para volver a la página de inicio */}
      <Link
        to="/"
        className="boton-redondeado-negro"
      >
      Volver al inicio
      </Link>
      
      {/* Imagen centrada indicando que la página está en construcción */}
      <div className="texto-superpuesto-centrado">
      
      <img
        src="/5578703.png"
        alt="Logo YourLittleCandle"
        className="imagen-natural"
      />
      </div>
    </div>
  );
}

export default WorkInProgress;
