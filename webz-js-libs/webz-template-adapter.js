
var webzTemplateAdapter = function(contentTemplate, pageScope) {

	var template = Handlebars.compile(contentTemplate);
	return template(pageScope);
	
};
