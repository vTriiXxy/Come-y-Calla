document.addEventListener("DOMContentLoaded", function() {
    // Inicializar AOS (Animate On Scroll) para el efecto 'fade-up' y 'zoom-in'
    AOS.init({
        once: false,          // La animación ocurre cada vez que se hace scroll
        offset: 100,          // Inicia la animación 100px antes de llegar al elemento
        duration: 800,        // Duración estándar de 0.8s
        easing: 'ease-in-out' // Transición suave
    });
    console.log("¡Invitación cargada con estética 3D!");
});