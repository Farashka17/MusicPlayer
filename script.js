const prevButton=document.getElementById("prevButton")
const playButton=document.getElementById("playButton")
const nextButton=document.getElementById("nextButton")

const imageEl=document.getElementById("image")
const titleEl=document.getElementById("title")
const artistEl=document.getElementById("artist")

const progressContainerEl=document.getElementById("progress-container")
const progressEl=document.getElementById("progress")

const currentTimeEl=document.getElementById("currentTime")
const durationEl=document.getElementById("duration")
const songEl=document.getElementById("song")
console.log(songEl);

let isPlaying = false

const playSong=() => {
    songEl.play();
    isPlaying=true;
    playButton.innerHTML='<img src="./pauseMusic.svg"  class="w-12 h-12" >'
}
const pauseSong=() => {
    songEl.pause();
    isPlaying=false;
    playButton.innerHTML='<img src="./playMusic.svg"  class="w-12 h-12">'
}

playButton.addEventListener('click',() => {
isPlaying ? pauseSong() : playSong() 
});

songEl.addEventListener('timeupdate',(event) => {
    const { duration,currentTime }=songEl
   
    const durationMinute=Math.floor(duration / 60)
    const durationSecond=Math.floor(duration % 60)
    const currentTimeMinute=Math.floor(currentTime / 60)
    const currentTimeSecond=Math.floor(currentTime % 60)

    durationEl.textContent=`${durationMinute}:${String(durationSecond).padStart(2,0)}`
    currentTimeEl.textContent=`${currentTimeMinute}:${String(currentTimeSecond).padStart(2,0)}`
});
