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

// Canción actual
let actualSong = 0;

// Capturar elementos del DOM para trabajar con JS
const songs = document.querySelector('.song-list');
const audio = document.querySelector('#audio');
const cover = document.querySelector('.cover');
const title = document.querySelector('.title');
const artist = document.querySelector('.artist');

let playButton = document.querySelector('.tooglePlay');
let nextButton = document.querySelector('.nextButton');
let prevButton = document.querySelector('.prevButton');

const swipeContainer = document.querySelector('.song-list-container');
const swipeButton = document.querySelector('.swipe-up');

// Manipular el swipe up
swipeButton.addEventListener('click', () => toggleSwipe());

function toggleSwipe(){
    if (swipeContainer.className === 'song-list-container') {
        swipeContainer.className += ' playing';
    } else {
        swipeContainer.className = 'song-list-container';
    }
}

// Botón play
playButton.addEventListener('click', () => togglePlay(playButton))

function togglePlay(button){
    if (audio.paused) {
        audio.play();
        button.name = 'pause-outline';
    } else {
        audio.pause();
        button.name = 'play-outline';
    }
}

// Botón next
nextButton.addEventListener('click', () => nextSong(actualSong));

function nextSong(actualSongIndex) {
    actualSong = actualSongIndex + 1;
    if (actualSong == songList.length) {
        actualSong = 0;
    }
    loadSong(actualSong);
    togglePlay(playButton)
}

// Botón prev
prevButton.addEventListener('click', () => prevSong(actualSong));

function prevSong(actualSongIndex) {
    actualSong = actualSongIndex - 1;
    if (actualSong == -1) {
        actualSong = songList.length - 1;
    }
    loadSong(actualSong);
    togglePlay(playButton)
}


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
        link.addEventListener('click', () => loadSong(index, icon));
        icon.addEventListener('click', () => loadSong(index, icon));

        // Agregar hijos a ul
        li.appendChild(link);
        li.appendChild(icon);
  

        // Agregar li a ul
        songs.appendChild(li);
    });
};

// Cargar canción seleccionada
function loadSong(indexSong, icon){
    // Preparar audio
    audio.src = './music/' + songList[indexSong].file;

    // togglePlay(icon);
    // icon.addEventListener('click', () => togglePlay(icon))

    // Personalizar tarjeta
    cover.src = './images/' + songList[indexSong].cover;
    title.textContent = songList[indexSong].title;
    artist.textContent = songList[indexSong].artist;

    // Activar links
    const links = document.querySelector('a');
}

// GO
loadSong(actualSong, playButton)
loadSongs();


let allPlaysButtons = document.querySelectorAll('.tooglePlay');
