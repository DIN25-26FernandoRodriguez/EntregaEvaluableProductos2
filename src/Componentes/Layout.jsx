
/**
 * 
 * Componente Layout
 * 
 * Componente que va a envolver todo el contenido que se va a ver en la pantalla del navegador.
 * Representa el lienzo donde vamos a dibujar todo lo que queremos que se muestre en la pantalla
 * 
 * @param {*} param0 
 * @returns {JSX.Element}
 */
function Layout({ children }) {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="contenedor-principal"
    >
      <section aria-labelledby="main-section-title" className="seccion-centrada">
        {children}
      </section>
    </main>
  );
}

export default Layout
