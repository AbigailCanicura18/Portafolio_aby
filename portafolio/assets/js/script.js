
document.addEventListener('DOMContentLoaded', function() {

    // Efecto de scroll para la barra de navegación (añade sombra)
    const mainNav = document.querySelector('#mainNav');
    
    if (mainNav) {
        // Función para manejar el scroll
        const handleScroll = () => {
            if (window.scrollY > 10) { // Si hay scroll (más de 10px), añade la clase
                mainNav.classList.add('navbar-scrolled');
            } else { // Si está al inicio, quita la clase
                mainNav.classList.remove('navbar-scrolled');
            }
        };

        // Ejecuta la función una vez al cargar la página
        handleScroll();
        
        // Añade el event listener al hacer scroll
        window.addEventListener('scroll', handleScroll);
    }

    // El comportamiento de desplazamiento suave lo maneja el CSS: html { scroll-behavior: smooth; }
    // Bootstrap se encarga de la funcionalidad del menú colapsable (navbar-toggler).

});