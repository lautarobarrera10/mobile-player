import songList from './songList.js';

const songs = document.querySelector('.song-list');
const cover = document.querySelector('.cover');
const title = document.querySelector('.title');
const artist = document.querySelector('.artist');

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
    audio.src = '../../music/' + songList[indexSong].file;

    cover.src = '../../images/' + songList[indexSong].cover;
    title.textContent = songList[indexSong].title;
    artist.textContent = songList[indexSong].artist;

    // Activar links
    const links = document.querySelector('a');
}

export { loadSongs, loadSong }