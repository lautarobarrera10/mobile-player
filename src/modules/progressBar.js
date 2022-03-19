function progressBar() {
    // Contenedor de la barra de progreso
    const progressContainer = document.querySelector('.progress-container');

    // Barra de progreso
    const progress = document.querySelector('.progress');

    // Cambiar barra de progreso aumatico
    function updateProgressAutomatic() {
        let currentTimePorcentaje = audio.currentTime / audio.duration * 100;
        progress.style.width = `${currentTimePorcentaje}%`;
    }

    // Cambiar barra de progreso manual
    function updateProgress(event) {
        const totalWidth = this.offsetWidth;
        const clickWidth = event.offsetX;
        audio.currentTime = clickWidth / totalWidth * audio.duration;
    }

    // Sección de tiempo
    const audio = document.querySelector('#audio');

    // Setear la duración
    audio.addEventListener('loadeddata', () => {
        let durationDOM = document.querySelector('.duration');
        let currentTime = document.querySelector('.current');

        let totalMin = Math.floor(audio.duration / 60);
        let totalSec = Math.floor(audio.duration % 60);

        currentTime.textContent = '0:00';
        durationDOM.textContent = `${totalMin}:${totalSec}`;
    })

    // Actualizar el tiempo transcurrido
    audio.addEventListener('timeupdate', () => {
        let currentTime = document.querySelector('.current');

        let totalMin = Math.floor(audio.currentTime / 60);

        let totalSec = Math.floor(audio.currentTime % 60)
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        currentTime.textContent = `${totalMin}:${totalSec}`;
    })

    // Barra de reproducción automatica
    audio.addEventListener('timeupdate', updateProgressAutomatic);
    // Escuchar clicks en la barra de progreso
    progressContainer.addEventListener('click', updateProgress);
    
}

export { progressBar };