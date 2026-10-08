document.addEventListener( 'DOMContentLoaded' , () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');
  const curiosityButton = document.getElementById('curiosityButton');
  const curiosityText = document.getElementById('curiosityText');

 if (curiosityButton && curiosityText) {
  curiosityButton.addEventListener('click', () => {
    curiosityText.classList.toggle('curiosity-hidden');
   });
  }

  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton
      .getAttribute( 'aria-expanded' ) === 'true' ;
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded ) ;
    mainNav.classList.toggle( 'nav-open' ) ; // Alterna la clase 'nav-open'
  } ) ;

  // Cierra el menú si se hace clic fuera de él en dispositivos móviles
  document.addEventListener( 'click' , (event) => {
    if( !mainNav.contains( event.target ) &&
        !hamburgerButton.contains( event.target ) &&
        mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ;
      mainNav.classList.remove( 'nav-open' ) ;
    }
  } ) ;

  window.addEventListener( 'resize' , () => {
    if( window.innerWidth >= 768 ) { // Si es pantalla grande
      mainNav.classList.remove( 'nav-open' ) ;
      // Asegura que no tenga la clase nav-open
      hamburgerButton.setAttribute('aria-expanded', 'false') ;
    }
    // En pantallas pequeñas, el estado del menú se maneja solo con el clic
    // del botón
  } ) ;

} ) ;
