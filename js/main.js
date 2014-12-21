
var webzContainer = $('#webz-container');
if (webzContainer.length > 0) {
	rivets.bind(webzContainer, {ctx: window.rivetsContext});
}        	

//var revelationTimeout;
var revealBody = function() {
//	clearTimeout(revelationTimeout);

	$("body").css("visibility", "visible");
};
//$(window).load(revealBody);
//revelationTimeout = setTimeout(revealBody, 1200);
revealBody();
