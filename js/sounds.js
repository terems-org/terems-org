
var bkgAudio = new Audio("sounds/rainforest_ambience-GlorySunz-1938133500.wav"); // $("#bkg-audio")[0];
bkgAudio.volume=0.005;

bkgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bkgAudio.play();
