const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio");


let musicIndex = 6;
window.addEventListener("load", ()=> {
    loadMusic(musicIndex);  // calling load Function once windows loaded
})


// Load Music Function :::::
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb -1].name;
    musicArtist.innerText = allMusic[indexNumb -1].artist;
    musicImg.src = `images/${allMusic[indexNumb -1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb -1].src}.mp3`;
}

