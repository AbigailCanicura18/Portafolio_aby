document.addEventListener('DOMContentLoaded', function() {

    // Scroll suave para los enlaces del navbar
    document.querySelectorAll('#mainNav .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Cierra el menú responsive si está abierto (para móviles)
            const navbarCollapse = document.getElementById('navbarResponsive');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scroll({
                        top: targetElement.offsetTop - (document.querySelector('#mainNav').offsetHeight), // Ajusta por la altura del navbar fijo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Efecto de scroll para la barra de navegación (cambia el fondo)
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                mainNav.classList.remove('navbar-scrolled');
            } else {
                mainNav.classList.add('navbar-scrolled');
            }
        };

        handleScroll(); // Ejecuta una vez al cargar
        window.addEventListener('scroll', handleScroll);
    }
});