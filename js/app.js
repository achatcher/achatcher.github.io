//-----  Music Player  -------//
var music = document.getElementById("alienAudio");

function toggleMusic() {
  music.volume = 0.1;
  return music.paused ? music.play() : music.pause();
}

//-----  Play/Pause Icon Toggle  -------//
function toggleIcon() {
    if (music.paused) {
        document.getElementById('musicPause').style.display = 'none';
        document.getElementById('musicPlay').style.display = 'block';
    } else {
        document.getElementById('musicPause').style.display = 'block';
        document.getElementById('musicPlay').style.display = 'none';
    }
}