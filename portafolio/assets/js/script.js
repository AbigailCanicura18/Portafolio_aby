document.addEventListener('DOMContentLoaded', function() {

    // 1. Efecto de scroll para la barra de navegación (añade sombra)
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        const handleScroll = () => {
            // Comprueba si el menú móvil está colapsado o no
            const isMenuOpen = document.getElementById('navbarResponsive')?.classList.contains('show');
            
            // Solo aplica el efecto si el menú NO está abierto o si estamos en pantalla grande
            if (!isMenuOpen || window.innerWidth > 991) { 
                if (window.scrollY > 10) { 
                    mainNav.classList.add('navbar-scrolled');
                } else { 
                    mainNav.classList.remove('navbar-scrolled');
                }
            }
        };
        handleScroll(); // Ejecuta al cargar
        window.addEventListener('scroll', handleScroll); // Ejecuta al hacer scroll
    }

    // 2. Scroll suave para los enlaces de ancla (navbar y otros)
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

                // Cierra el menú móvil si está abierto
                const menuToggle = document.getElementById('navbarResponsive');
                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                if (bsCollapse && menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // 3. Cierra el menú móvil de Bootstrap al hacer clic en un enlace (Doble seguridad)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarResponsive');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false}); 

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) { 
                bsCollapse.hide(); 
            }
        });
    });
    
    // 4. Activa los tooltips de Bootstrap (para los iconos de contacto y footer)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

});