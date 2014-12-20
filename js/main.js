
var bkgAudio = new Audio("sounds/rainforest_ambience-GlorySunz-1938133500.wav"); // $("#bkg-audio")[0];

bkgAudio.volume=0.005;

bkgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
// TODO uncomment:
//bkgAudio.play();

var webzContainer = $('#webz-container');
if (webzContainer.length > 0) {
	rivets.bind(webzContainer, {ctx: window.rivetsContext});
}        	

var revelationTimeout;
var revealBody = function() {
//	$(window).unbind("load", revealBody);
//	clearTimeout(revelationTimeout);

	$("body").css("visibility", "visible");
};
//$(window).load(revealBody);
//revelationTimeout = setTimeout(revealBody, 1200);
revealBody();
