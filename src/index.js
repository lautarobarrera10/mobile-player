import { loadSongs, loadSong } from './modules/loadSongs.js'
import { progressBar } from './modules/progressBar.js'
import { loadControls } from './modules/controls.js'
import { swipe } from './modules/swipe.js'

// Capturar elementos del DOM para trabajar con JS
let playButton = document.querySelector('.tooglePlay');

// Función que inicia todo
function startApp() {
    // Cargar todas las canciones
    loadSongs();
    // Cargar canción actual
    loadSong(0, playButton)
    
    // Cargar barra de progreso
    progressBar();

    // Cargar controles
    loadControls();

    // Habilitar swipe up
    swipe();
}

startApp();