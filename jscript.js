console.log("Welcome to Spotify");

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Ranjha.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongname = document.getElementById('masterSongname');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Ranjha - B.praak,J.Royal", filePath: "songs/1.mp3", CoverPath: "Covers/1.jpg" },
    { songName: "Faded", filePath: "songs/2.mp3", CoverPath: "Covers/2.jpg" },
    { songName: "Khairiyat ", filePath: "songs/3.mp3", CoverPath: "Covers/3.jpg" },
    { songName: "Nayan- Dhvani Bhanushali", filePath: "songs/4.mp3", CoverPath: "Covers/4.jpg" },
    { songName: "Shopping-Jass Manak", filePath: "songs/5.mp3", CoverPath: "Covers/5.jpg" },
    { songName: "Yaara Teri Yaari", filePath: "songs/6.mp3", CoverPath: "Covers/6.jpg" },
    { songName: "Mashup", filePath: "songs/7.mp3", CoverPath: "Covers/7.jpg" },
    { songName: "Lehanga-Jass Manak", filePath: "songs/8.mp3", CoverPath: "Covers/8.jpg" },
    { songName: "Ek Tarfa ", filePath: "songs/9.mp3", CoverPath: "Covers/9.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songsname")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handele play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongname.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongname.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongname.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})