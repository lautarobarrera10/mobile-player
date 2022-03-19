import songList from './songList.js'
import { loadSong } from './loadSongs.js'

function loadControls() {
    let actualSong = 0
    let playButton = document.querySelector('.tooglePlay');
    let nextButton = document.querySelector('.nextButton');
    let prevButton = document.querySelector('.prevButton');

    
    function togglePlay(button){
        if (audio.paused) {
            audio.play();
            button.name = 'pause-outline';
        } else {
            audio.pause();
            button.name = 'play-outline';
        }
    }
    
    function nextSong(actualSongIndex) {
        actualSong = actualSongIndex + 1;
        if (actualSong == songList.length) {
            actualSong = 0;
        }
        loadSong(actualSong);
        togglePlay(playButton)
    }
    
    function prevSong(actualSongIndex) {
        actualSong = actualSongIndex - 1;
        if (actualSong == -1) {
            actualSong = songList.length - 1;
        }
        loadSong(actualSong);
        togglePlay(playButton)
    }

    // Botón play
    playButton.addEventListener('click', () => togglePlay(playButton))
    // Botón next
    nextButton.addEventListener('click', () => nextSong(actualSong));
    // Botón prev
    prevButton.addEventListener('click', () => prevSong(actualSong));

    // Pasar automaticamente a la proxima canción
    audio.addEventListener('ended', () => nextSong(actualSong))
}

export { loadControls }