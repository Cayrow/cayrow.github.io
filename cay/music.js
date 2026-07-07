//window.onload = function() {
//    document.getElementById("song").play();
//}
var bgAudio = new Audio('/cay/song.mp3');

function play() {
    
    if (bgAudio && !bgAudio.paused) {
        pause();
        return;
    }
    else if (bgAudio && bgAudio.paused) {
        bgAudio.volume = document.getElementById("volumeSlider").value;
        bgAudio.loop = true;
        bgAudio.play();
        document.getElementById("playButton").innerHTML = "Pause Audio";
        return;
    }
    
    
    

}

function pause() {
    document.getElementById("playButton").innerHTML = "Play Audio";
    bgAudio.pause();
}

function changeVolume() {
    var volume = document.getElementById("volumeSlider").value;
    bgAudio.volume = volume;
}

