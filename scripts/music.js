let song = 0;
let ext = new Audio("audio/Extravaganza.mp3");
let bon = new Audio("audio/Bon.mp3");
let trip = new Audio("audio/Trip.mp3");
let sodg = new Audio("audio/Sjeng.mp3");
let Keel = new Audio("audio/keelhauled.mp3");

const PlayExt = document.getElementById('ext');
PlayExt.addEventListener('click', PlayExtravaganza);

const Playbon = document.getElementById('bon');
Playbon.addEventListener('click', PlayBon);

const PlayTrip = document.getElementById('Tri');
PlayTrip.addEventListener('click', PlayTri);

const PlaySjeng = document.getElementById('sog');
PlaySjeng.addEventListener('click', PlaySodg);

const PlayKeel = document.getElementById('kld');
PlayKeel.addEventListener('click', PlayKld);

function PlayExtravaganza() {
    if (song === 0) {
        song++;
        console.log(song);
        ext.play();
        setTimeout(() => { let song = 0 }, 80 * 1000);
    }
    else {
        if (song === 1) {
            song--;
            ext.pause();
            bon.pause();
            trip.pause();
            sodg.pause();
            Keel.pause();
        }
        else {
            console.log(song);
        }
        
        
    }

}
function PlayBon() {
    if (song === 0) {
        song++;
        console.log(song);
        bon.play();
        setTimeout(() => { let song = 0 }, 65 * 1000);
    }
    else {
        if (song === 1) {
            song--;
            bon.pause();
            ext.pause();
            trip.pause();
            sodg.pause();
            Keel.pause();
        }
        else {
            console.log(song);
        }
    }

}
function PlayTri() {
    if (song === 0) {
        song++;
        console.log(song);
        trip.play();
        setTimeout(() => { let song = 0 }, 65 * 1000);
        console.log(song);

    }
    else {
        if (song === 1) {
            song--;
            trip.pause();
            ext.pause();
            bon.pause();
            sodg.pause();
            Keel.pause();
        }
        else {
            console.log(song);
        }
    }

}
function PlaySodg() {
    if (song === 0) {
        song++;
        console.log(song);
        sodg.play();
        setTimeout(() => { let song = 0 }, 43 * 1000);
    }
    else {
        if (song === 1) {
            song--;
            sodg.pause();
            ext.pause();
            bon.pause();
            trip.pause();
            Keel.pause();
        }
        else {
            console.log(song);
        }
    }

}
function PlayKld() {
    if (song === 0) {
        song++;
        console.log(song);
        Keel.play();
        setTimeout(() => { let song = 0 }, 43 * 1000);
    }
    else {
        if (song === 1) {
            song--;
            Keel.pause();
            sodg.pause();
            ext.pause();
            bon.pause();
            trip.pause();
        }
        else {
            console.log(song);
        }
    }

}