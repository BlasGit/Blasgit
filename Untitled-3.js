document.addEventListener("DOMContentLoaded", function() {
    const calendarBtn = document.getElementById("calendarBtn");
    const miniCalendar = document.getElementById("miniCalendar");

    // Mostrar/Ocultar el calendario al hacer clic en el botón
    calendarBtn.addEventListener("click", function(event) {
        event.stopPropagation(); 
        miniCalendar.classList.toggle("hidden");
    });

    // Cerrar el calendario si se hace clic en cualquier parte fuera de él
    document.addEventListener("click", function(event) {
        if (!miniCalendar.contains(event.target) && event.target !== calendarBtn) {
            if (!miniCalendar.classList.contains("hidden")) {
                miniCalendar.classList.add("hidden");
            }
        }
    });

    // Prevenir que clics dentro del menú del calendario lo cierren
    miniCalendar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});