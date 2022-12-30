console.log("welcome to Spotjfhnsfjify")

// initialize the variable

let songindex = 0
let audioElement = new Audio('Songs/1.mp3')
// audioElement.play() 
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songsitems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
{ SongName:"Attention",filepath:"songs/1.mp3",coverpath:"cover/songcover.jpeg"},
{ SongName:"Cheap thrills",filepath:"songs/2.mp3",coverpath:"cover/songcover2.jpeg"},
{ SongName:"Bad Liar",filepath:"songs/3.mp3",coverpath:"cover/songcover3.jpeg"},
{ SongName:"Wellerman",filepath:"songs/4.mp3",coverpath:"cover/songcover4.jpeg"},
{ SongName:"Night Changes",filepath:"songs/5.mp3",coverpath:"cover/songcover5.jpeg"},
{ SongName:"Wavin's Flag",filepath:"songs/6.mp3",coverpath:"cover/songscover6.jpeg"}

    
]

songsitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].SongName
})

// handle play pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{

        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity = 1;
        
    }
})

// listem to events 
audioElement.addEventListener('timeupdate',()=>{
  
    // update seek baar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myprogressbar.value = progress;

})
 
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songindex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    audioElement.src =`songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].SongName
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle')
      masterplay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6){
        songindex =0
    }
    else{
        songindex += 1;
    }
    audioElement.src =`songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].SongName
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex -= 1;
    }
    audioElement.src =`songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].SongName
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})