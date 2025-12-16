/*!
 * Leadmark JS (Optimizado)
 */

// 1. SMOOTH SCROLL (jQuery)
// Mantiene el desplazamiento suave al hacer clic en los links del menú
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// 2. PORTFOLIO FILTERS (jQuery + Isotope)
// Mantiene la funcionalidad de filtrado de imágenes
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
});

// 3. SCROLL EVENTS & UI (Vanilla JS)
// Aquí unificamos el botón "Volver arriba" y el "Navbar Logo"
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos los elementos
    const backToTopBtn = document.getElementById("backToTop");
    const navbar = document.querySelector(".custom-navbar"); // Seleccionamos el navbar

    // Un solo evento 'scroll' para manejar todo (Mejor rendimiento)
    window.addEventListener("scroll", function() {
        
        // Obtenemos la posición actual
        const scrollPos = window.scrollY;

        // --- LÓGICA 1: Botón Volver Arriba (> 300px) ---
        if (backToTopBtn) { // Verificamos que exista para evitar errores
            if (scrollPos > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }

        // --- LÓGICA 2: Ocultar Logo Navbar (> 50px) ---
        if (navbar) {
            if (scrollPos > 50) {
                navbar.classList.add("nav-scrolled");
            } else {
                navbar.classList.remove("nav-scrolled");
            }
        }
    });

    // Evento Click del botón "Volver arriba"
    if(backToTopBtn) {
        backToTopBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
