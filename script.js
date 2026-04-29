document.addEventListener("DOMContentLoaded", function() {
    const calendarBtn = document.getElementById("calendarBtn");
    const miniCalendar = document.getElementById("miniCalendar");

    // Función para alternar visibilidad del calendario
    function toggleCalendar(event) {
        // Evita que el clic se propague al documento y cierre el calendario de inmediato
        if (event) event.stopPropagation(); 
        miniCalendar.classList.toggle("hidden");
    }

    // Al hacer clic en el botón
    calendarBtn.addEventListener("click", toggleCalendar);

    // Al hacer clic en cualquier parte del documento
    document.addEventListener("click", function(event) {
        // Si el calendario está visible y el clic no fue dentro del calendario ni en el botón
        if (!miniCalendar.classList.contains("hidden")) {
            if (!miniCalendar.contains(event.target) && event.target !== calendarBtn) {
                miniCalendar.classList.add("hidden");
            }
        }
    });

    // Evitar que un clic DENTRO del panel del calendario lo cierre
    miniCalendar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
