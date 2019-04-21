const port = 8000;

let currChannel = document.getElementById('currChannel');

const url = 'http://localhost:8000';

const http = new XMLHttpRequest();

/*
STREAM-ENDPOINTS

P4
http://sverigesradio.se/topsy/direkt/207-hi-mp3';

Guld
http://stream.dbmedia.se/gkMP3

NRJ
http://tx-bauerse.sharp-stream.com/http_live.php?i=nrj_instreamtest_se_mp3

 */

let p4Data = {station: 'http://sverigesradio.se/topsy/direkt/207-hi-mp3'};

let guldData = {station: 'http://stream.dbmedia.se/gkMP3'};

let nrjData = {station: 'http://tx-bauerse.sharp-stream.com/http_live.php?i=nrj_instreamtest_se_mp3'};

function playMusic() {
    http.open('POST', url + '/play', true);
    http.send();
}

function pauseMusic() {
    http.open('POST', url + '/pause');
    http.send();
}

function guld() {
    //currChannel.innerText = 'Guld Kanalen';
    http.open('POST', url + '/change', true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(guldData));
}

function p4() {
    //currChannel.innerText = 'P4';
    http.open('POST', url + '/change', true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(p4Data));
}

function nrj() {
    //currChannel.innerText = 'NRJ';
    http.open('POST', url + '/change', true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(nrjData));
}
