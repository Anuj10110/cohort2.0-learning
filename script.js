let songsArr = [
    {title : 'Arjun Vailey Ne', song : './songs/Arjan Vailly Ne.mp3', img : './images/animal.jpg'},
    {title : 'Jale 2', song : './songs/Jale 2.mp3', img : './images/jale.jpg'},
    {title : 'Pehle Bhi Main', song : './songs/Pehle Bhi Main.mp3', img : './images/animal.jpg'},
    {title : 'Ram Siya Ram', song : './songs/Ram Siya Ram.mp3', img : './images/ram.jpg'},
]

var poster = document.querySelector('#left');
var allSongs = document.querySelector('#all-songs');
var audio = new Audio();
var selectedSong = 0;

var playbtn = document.querySelector('#play');
var forwardbtn = document.querySelector('#forward');
var backwardbtn = document.querySelector('#backward');

function showSongs () {
    let clutter = "";
    songsArr.forEach(function (songsObj, idx) {
        clutter += `<div class="song-card" id = "${idx}">
                    <div class="part-1">
                        <img src="${songsObj.img}" alt="">
                        <h3>${songsObj.title}</h3>
                    </div>
                    <h6>2:52</h6>
                </div>`;
    })
    allSongs.innerHTML = clutter;
    audio.src = songsArr[selectedSong].song;
    poster.style.backgroundImage = `url(${songsArr[selectedSong].img})`;


    if (selectedSong === 0) {
        backwardbtn.style.opacity = 0.3;
        backwardbtn.style.pointerEvents = 'none';
    } else {
        backwardbtn.style.opacity = 1;
        backwardbtn.style.pointerEvents = 'auto';
    }
    if (selectedSong === songsArr.length - 1) {
        forwardbtn.style.opacity = 0.3;
        forwardbtn.style.pointerEvents = 'none';
    } else {
        forwardbtn.style.opacity = 1;
        forwardbtn.style.pointerEvents = 'auto';
    }
}

allSongs.addEventListener('click', function (details) {
    selectedSong = details.target.id;
    playbtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    showSongs(); 
    audio.play();
})

showSongs();

var flag = 0;
playbtn.addEventListener('click', function () {
    if (flag === 0) {
        playbtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        audio.play()
        flag = 1
    } else {
        playbtn.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        audio.pause()
        flag = 0
    }
})

forwardbtn.addEventListener('click', function () {
    if (selectedSong < songsArr.length - 1) {
        selectedSong++;
        showSongs();
        audio.play();
    } 
    if (selectedSong === songsArr.length - 1) {
        forwardbtn.style.opacity = 0.3;
        forwardbtn.style.pointerEvents = 'none';
    }
})

backwardbtn.addEventListener('click', function () {
    if (selectedSong > 0) {
        selectedSong--;
        showSongs();
        audio.play();
    } 
})