const liked = document.querySelector(".song1")
const raftaar = document.querySelector(".song2")
const king = document.querySelector(".song3")
const aujla = document.querySelector(".song4")
const kshmr = document.querySelector(".song5")
const jokhay = document.querySelector(".song6")
const youngStunner = document.querySelector(".song7")

//selecting elements
const previousBtn = document.querySelector(".previous");
const playBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".next");
const songName = document.querySelector(".song-name");
const playPauseIcon = document.querySelector("#play-pause-icon");
var music = document.getElementsByClassName('music');
// var progressed = document.getElementById('progressed');
// var progress_bar = document.getElementById('progress_bar');
var progressBar = document.querySelector(".progress-bar");
var progressDetails = document.querySelector(".progress-details");

const songs = [
    { ele: liked, audioName: "Jamal Kudu by Tannaz Davoodi" },
    { ele: raftaar, audioName: "Trap Raa by Raftaar" },
    { ele: king, audioName: "Crown by King" },
    { ele: aujla, audioName: "Softly by Karan Aujla" },
    { ele: kshmr, audioName: "Maula by Munawar Faruqui and KSHMR" },
    { ele: jokhay, audioName: "Tasweer by Jokhay and Talha Anjum" },
    { ele: youngStunner, audioName: "Gumaan by Young Stunner" }
];

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click', () => {
    // currentSong.play()
    playPauseSong();
    // progress(currentSong);
})

nextBtn.addEventListener('click', () => {
    updateSong('next')
    playPauseSong();
});

previousBtn.addEventListener('click', () => {
    updateSong('previous')
    playPauseSong();
});
progressDetails.onclick = function (e) {
    console.log("x: "+progressDetails.offsetWidth)
    music.currentTime = ((e.offsetX / progressDetails.offsetWidth) * music.duration);
    progress(currentSong)

}

// window.addEventListener("click",event=>{
//     console.log(event.offsetX)
// })

var progress = (action) => {

    const initialTime = currentSong.currentTime;
    console.log("it"+initialTime);
    const finalTime = currentSong.duration;
    console.log("tt"+finalTime);
    let BarWidth = (initialTime / finalTime) * 100;
    console.log(BarWidth);
    progressBar.style.width = BarWidth + "%";


   

    // let progressValue = progressDetails.clientWidth;
    // let clickedOffesetX = currentSong.offsetX;
    // let musicDuration = currentSong.duration;
    // progressBar.currentTime = (clickedOffesetX / progressValue) * musicDuration;

}

var updateSong = (action) => {
    currentSong.pause()
    currentSong.currentTime = 0;
    if (action === 'next') {
        current++;
        progress(currentSong)
        if (current > songs.length - 1) {
            current = 0;
        }
    }
    if (action === 'previous') {
        current--;
        if (current < 0) {
            current = songs.length - 1;
        }
    }
    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName
    // console.log(currentSong)
    //console.log(songName);
}

const playPauseSong = (action) => {
    if (currentSong.paused) {
        currentSong.play();
        playPauseIcon.className = "fa-solid fa-pause";
    }
    else {
        currentSong.pause();
        playPauseIcon.className = "fa-solid fa-play";
    }
}

// console.log(currentSong);

// currentSong.addEventListener("timeupdate", (e) => {
//     const initialTime = e.target.currentTime;
//     const finalTime = e.target.duration;
//     let BarWidth = (initialTime / finalTime) * 100;
//     progressBar.style.width = BarWidth + "%";

//     progressDetails.addEventListener("click", (e) => {
//         let progressValue = progressDetails.clientWidth;
//         let clickedOffesetX = e.offsetX;
//         let musicDuration = currentSong.duration;
//         currentSong.currentTime = (clickedOffesetX / progressValue) * musicDuration;
//     });
// });
