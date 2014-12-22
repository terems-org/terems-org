requirejs.config({
  paths: {
    'text': 'vendor/require/text',
    'durandal':'vendor/durandal/js',
    'plugins' : 'vendor/durandal/js/plugins',
    'transitions' : 'vendor/durandal/js/transitions',
    'knockout': 'vendor/knockout/knockout-2.3.0',
    'jquery': 'vendor/jquery/jquery-1.9.1'
    } 
});
 
define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');
 
   system.debug(true);
 
   app.title = 'Durandal Starter Kit';
 
   app.configurePlugins({
     router:true,
     dialog: true
   });
 
   app.start().then(function() {
     app.setRoot('shell');
   });
});





var webzContainer = $('#applicationHost'); //.webz-container
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
