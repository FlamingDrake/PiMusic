const {spawn} = require('child_process');
const express = require('express');

const port = 8000;
let radio;

let vlcLocation = 'C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe';
let currentStation = 'http://sverigesradio.se/topsy/direkt/207-hi-mp3';
let options = {stdio: ['pipe', 'inherit', 'inherit']};
let app = express();
let alreadyPlaying = false;


app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    next();
});

let play = express.Router();

play.post('/play', function (req, res, next) {
    req.accepts('application/json');
    if (!alreadyPlaying) {
        alreadyPlaying = true;
        radio = spawn(vlcLocation, [currentStation, options]);
    }
    res.end();
});


let pause = express.Router();
pause.post('/pause', function (req, res, next) {
    if (alreadyPlaying) {
        alreadyPlaying = false;
        radio.kill(9);
    }
    res.end();
});

let changeStation = express.Router();
changeStation.post('/change', function (req, res) {
    currentStation = req.body.station;
    if (alreadyPlaying) {
        radio.kill(9);
        radio = spawn(vlcLocation, [currentStation], options);
    } else {
        alreadyPlaying = true;
        radio = spawn(vlcLocation, [currentStation], options);
    }
    res.end();
});

app.use(play);
app.use(pause);
app.use(changeStation);