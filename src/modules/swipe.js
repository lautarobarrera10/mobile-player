function swipe(){
    const songListContainer = document.querySelector('.song-list-container');

    songListContainer.addEventListener('click', () => {
        if (songListContainer.classList.contains('playing')) {
            console.log("entramos")
            songListContainer.classList.remove('playing');
            console.log(songListContainer.className)
        } else {
            songListContainer.className += ' playing';
        }
    })
}

export { swipe }