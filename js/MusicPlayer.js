let audio = new Audio('http://sverigesradio.se/topsy/direkt/207-hi-mp3');


function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function p4() {
    audio.src = 'http://sverigesradio.se/topsy/direkt/207-hi-mp3';
    audio.play();
}

function guld() {
    audio.src = "http://stream.dbmedia.se/gkMP3";
    audio.play();
}

function nrj() {
    audio.src = "http://tx-bauerse.sharp-stream.com/http_live.php?i=nrj_instreamtest_se_mp3";
    audio.play();

}



