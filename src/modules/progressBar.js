function progressBar() {
    // Contenedor de la barra de progreso
    const progressContainer = document.querySelector('.progress-container');

    // Barra de progreso
    const progress = document.querySelector('.progress');

    // Cambiar barra de progreso aumatico
    function updateProgressAutomatic() {
        let currentTimePorcentaje = audio.currentTime / audio.duration * 100;
        progress.style.width = `${currentTimePorcentaje}%`
    }

    // Cambiar barra de progreso manual
    function updateProgress(event) {
        const totalWidth = this.offsetWidth;
        const clickWidth = event.offsetX;
        audio.currentTime = clickWidth / totalWidth * audio.duration;
    }

    // Barra de reproducción automatica
    audio.addEventListener('timeupdate', updateProgressAutomatic);
    // Escuchar clicks en la barra de progreso
    progressContainer.addEventListener('click', updateProgress);
}

export { progressBar };