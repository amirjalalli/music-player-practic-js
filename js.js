let audioElem = document.querySelector('audio')

let musicsSrc = [
    'media/html.m4a',
    'media/kar.m4a',
    'media/bazar.m4a',
]
let audioIndex = 0

function previousMusiceHandler(){
    audioIndex--
    
    if (audioIndex < 0){
        audioIndex = 2
    }
  
    
    console.log(musicsSrc[audioIndex]);
    audioElem.setAttribute('src', musicsSrc[audioIndex])
    playHandler()
}

function playHandler () {
    audioElem.play()
    console.log('play shod :)')

    setInterval(function (){
        console.log(Math.floor(audioElem.currentTime))
    }, 1000);
}

function pauseHandler () {
      audioElem.pause()
    console.log('pause shood :)')
}

        


function nextMusicHandler(){
    audioIndex++
    
    if (audioIndex > musicsSrc.length - 1){
        audioIndex = 0
    }
  
    
    console.log(musicsSrc[audioIndex]);
    audioElem.setAttribute('src', musicsSrc[audioIndex])
    playHandler()
}
function musicSpeedHandler(){
    audioElem.playbackRate = 2
    console.log('2X')
}

function timeMinuMusiceHandler(){
    audioElem.currentTime -= 5
}
function timePlusMusiceHandler(){
    audioElem.currentTime += 5
}
