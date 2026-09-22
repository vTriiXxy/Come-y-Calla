document.addEventListener("DOMContentLoaded", function() {
    // Inicializar AOS (Animate On Scroll) para el efecto 'fade-up' y 'zoom-in'
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,           // La animación se ejecuta una sola vez para mayor fluidez al navegar
            offset: 80,           // Inicia la animación 80px antes de llegar al elemento
            duration: 800,        // Duración estándar de 0.8s
            easing: 'ease-in-out' // Transición suave
        });
    } else {
        console.warn("AOS no se pudo cargar. Revisa la conexión de red o los enlaces del CDN.");
    }
    console.log("¡Invitación cargada con estética 3D!");
});