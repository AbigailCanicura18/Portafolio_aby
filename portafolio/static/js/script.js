/* === Código para el menú hamburguesa (navbar flexible) === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Alterna el icono (de hamburguesa a "X" y viceversa)
    menuIcon.classList.toggle('fa-times'); 
    // Alterna la clase 'active' en la navbar para mostrarla u ocultarla
    navbar.classList.toggle('active');
};


/* === Código para el scroll-spy y el header "sticky" (Réplica) === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    
    // --- Sticky Header ---
    // Agrega la clase 'sticky' al header cuando el scroll es mayor a 100px
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Active Link on Scroll (Scroll-spy) ---
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Ajuste para que se active un poco antes
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Quita la clase 'active' de todos los enlaces
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Añade 'active' al enlace correspondiente a la sección visible
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    /* === Cierra el menú móvil al hacer clic en un enlace o hacer scroll === */
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};