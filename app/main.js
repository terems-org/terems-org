requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.1.0',//2.3.0',
    //'jquery': '../lib/jquery/jquery-1.9.1'
    'jquery': '../lib/jquery-1.11.1'
    } 
});
 
define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');
 
   system.debug(true);
 
   app.title = 'WebZ - Terem\'s .org';//'Durandal Starter Kit';
 
   app.configurePlugins({
     router:true,
     dialog: true
   });
 
   app.start().then(function() {
		//Replace 'viewmodels' in the moduleId with 'views' to locate the view.
		//Look for partial views in a 'views' folder in the root.
		viewLocator.useConvention();
		
		//Show the app by setting the root view model for our application with a transition.
		app.setRoot('viewmodels/shell', 'entrance');
   });
});
