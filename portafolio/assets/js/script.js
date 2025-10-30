document.addEventListener('DOMContentLoaded', function() {

    // 1. Efecto de scroll para la barra de navegación (añade sombra)
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        const handleScroll = () => {
            if (window.scrollY > 10) { 
                mainNav.classList.add('navbar-scrolled');
            } else { 
                mainNav.classList.remove('navbar-scrolled');
            }
        };
        handleScroll(); // Ejecuta al cargar
        window.addEventListener('scroll', handleScroll); // Ejecuta al hacer scroll
    }

    // 2. Scroll suave para los enlaces de ancla (navbar y otros)
    // Selecciona todos los enlaces que empiezan con '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el salto brusco

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let headerHeight = 0;
                if (mainNav) {
                    headerHeight = mainNav.offsetHeight; // Obtiene la altura del navbar
                }
                
                const targetPosition = targetElement.offsetTop - headerHeight; // Calcula la posición - altura del navbar

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Cierra el menú móvil de Bootstrap al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarResponsive');
    // Asegura que el elemento colapsable esté inicializado por Bootstrap
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false}); 

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Solo cierra si el menú está visible (en modo móvil)
            if (menuToggle.classList.contains('show')) { 
                bsCollapse.hide(); // Ciérralo
            }
        });
    });
    
    // 4. Activa los tooltips de Bootstrap (para los iconos de contacto)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

});
