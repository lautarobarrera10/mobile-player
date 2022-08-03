// Lista de canciones
const songList = [
    {
        title: 'Si estuviésemos juntos',
        artist: 'Bad Bunny',
        file: 'juntos.mp3',
        cover: 'juntos.png',
    },
    {
        title: 'La noche de anoche',
        artist: 'Bad Bunny ft La Rosalia',
        file: 'la-noche-de-anoche.mp3',
        cover: 'la-noche-de-anoche.png',
    },
    {
        title: 'BZRP Music Session 48',
        artist: 'Tiago PZK ft BZRP',
        file: 'Session48.mp3',
        cover: 'Session48.png',
    },
];

// Capturar elementos del DOM para trabajar con JS
const audio = document.querySelector('audio');
const songs = document.querySelector('.song-list');
const cover = document.querySelector('.cover');
const title = document.querySelector('.title');
const artist = document.querySelector('.artist');

// --- CARGAR CANCIONES ---

// Canción actual
let actualSong = 1;

// Mostrar el listado de canciones y cargar canciones
function loadSongs(){
    songList.map((song, index) => {
        // Crear li
        const li = document.createElement('li');

        // Crear link
        const link = document.createElement('a');
        // Asignar valor al link
        link.textContent = song.title;
        link.href = '#';

        // Crear ícono
        const icon = document.createElement('ion-icon');
        // Agregar atributos al ícono
        icon.name = 'play-outline';
        icon.className = 'tooglePlay';

        // Escuchar clicks
        link.addEventListener('click', () => playSong(index, icon));
        icon.addEventListener('click', () => playSong(index, icon));

        // Agregar hijos a ul
        li.appendChild(link);
        li.appendChild(icon);
        // Agregar li a ul
        songs.appendChild(li);
    });
};

// Cargar todas las canciones
loadSongs();

// Cargar primer canción
loadSong(actualSong)

// Todos los botones de play
const playButtons = document.querySelectorAll('.tooglePlay');

// Cargar canción seleccionada
function loadSong(indexSong, icon){
    // Preparar audio
    audio.src = './music/' + songList[indexSong].file;

    cover.src = './images/' + songList[indexSong].cover;
    title.textContent = songList[indexSong].title;
    artist.textContent = songList[indexSong].artist;
}

let playButton = document.querySelector('.tooglePlay');

// Reproducir canción seleccionada
function playSong(index, icon) {
    console.log(icon)
    if (index == actualSong) {
        if(audio.paused) {
            Array.prototype.forEach.call(playButtons, button => button.name = 'play-outline')
            audio.play()
            icon.name = 'pause-outline'
            playButton.name = 'pause-outline'
        } else {
            audio.pause();
            Array.prototype.forEach.call(playButtons, button => button.name = 'play-outline')
        }
    } else {
        actualSong = index;
        loadSong(actualSong)
        audio.play()
        Array.prototype.forEach.call(playButtons, button => button.name = 'play-outline')
        icon.name = 'pause-outline'
        playButton.name = 'pause-outline'
    }
}


// --- BARRA DE PROGRESO ---

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


// --- CONTROLES ---

// Botones
let nextButton = document.querySelector('.nextButton');
let prevButton = document.querySelector('.prevButton');


// Cambiar a la siguiente canción
function nextSong(actualSongIndex) {
    actualSong = actualSongIndex + 1;
    if (actualSong == songList.length) {
        actualSong = 0;
    }
    loadSong(actualSong);

    const iconInList = Array.prototype.find.call(playButtons, (button, index) => index - 1 == actualSong);
    playSong(actualSong, iconInList);
}

// Cambiar a la canción anterior
function prevSong(actualSongIndex) {
    actualSong = actualSongIndex - 1;
    if (actualSong == -1) {
        actualSong = songList.length - 1;
    }
    loadSong(actualSong);

    const iconInList = Array.prototype.find.call(playButtons, (button, index) => index - 1 == actualSong);
    playSong(actualSong, iconInList);
}

// Cambiar a la canción anterior
function playActualSong(actualSongIndex) {
    actualSong = actualSongIndex;

    const iconInList = Array.prototype.find.call(playButtons, (button, index) => index - 1 == actualSong);
    playSong(actualSong, iconInList);
}

// Escuchar botones
playButton.addEventListener('click', () => playActualSong(actualSong))
nextButton.addEventListener('click', () => nextSong(actualSong));
prevButton.addEventListener('click', () => prevSong(actualSong));

// Pasar automaticamente a la proxima canción
audio.addEventListener('ended', () => nextSong(actualSong));

// --- SWIPE UP ---

// Contenedor de la lista
const songListContainer = document.querySelector('.song-list-container');

// Botón de swipe
const swipeUp = document.querySelector('.swipe-up');
    

swipeUp.addEventListener('click', () => {
    if (songListContainer.classList.contains('playing')) {
        console.log("entramos")
        songListContainer.classList.remove('playing');
        console.log(songListContainer.className)
    } else {
        songListContainer.className += ' playing';
    }
})




// --- REPRODUCIR DESDE LA LISTA ---




// Al hacer click en un botón
// Array.prototype.forEach.call(playButtons, button => {
//     button.onclick = () => {
//         console.log("hicimos click")
//         if (audio.paused) {

//         }
//         if (button.name == 'pause-outline') {
//             togglePlay()
//         } else {
//             // Todos los botones se ponen con el ícono play
//             Array.prototype.forEach.call(playButtons, button => button.name = 'play-outline')
//             button.name = 'pause-outline'
//             togglePlay(button)
//         }
//     }
// })