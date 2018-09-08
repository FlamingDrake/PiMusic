let audio = new Audio('http://sverigesradio.se/topsy/direkt/207-hi-mp3');

function playMusic() {
    audio.play().then();
}

function pauseMusic() {
    audio.pause();
}

