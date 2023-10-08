const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

function updateDateTime() {
    const currentDateTime = new Date();
    dateElement.textContent = currentDateTime.toLocaleDateString('es-ES');
    timeElement.textContent = currentDateTime.toLocaleTimeString('es-ES');
}

// Actualizar fecha y hora cada segundo
setInterval(updateDateTime, 1000);
