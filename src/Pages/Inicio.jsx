
// Componente de la página de inicio
function Inicio() {
  return (
    <div className="contenedor-fondo-alto">
      {/* Imagen de fondo de la página de inicio */}
      <img
        src="/landingImage.png"
        alt="Logo YourLittleCandle"
        className="imagen-ajustada"
      />

      {/* Contenido superpuesto en el centro de la imagen */}
      <div className="texto-superpuesto-centrado">
        <h1 className="titulo-grande-negrita">Bienvenido a YourLittleCandle</h1>
        <p className="parrafo-grande">Explora nuestros productos.</p>
      </div>
    </div>
  );
}

export default Inicio;
