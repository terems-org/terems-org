
var indexTemplate = null;

var webzInit = function(webzFiles) {
	indexTemplate = Handlebars.compile(webzFiles.getFile("/index.html").getFileDownloader().getContentAsStringAndClose());
	// indexTemplate({}); // for some reason this does some kind of template initialization (which otherwise happens upon first pageload)
};

var webzPreparePageContext = function(webzContext, fullUrl) {
	var currentFile = webzContext.getCurrentFile();
	return {
		"WEBZ-ROOT": {"FULL-URI": webzContext.resolveUri(webzContext.getFile("/"))},
		"WEBZ-FILE": {"NAME": currentFile.getMetadata().getName()},
		"MAIN-CONTENT": currentFile.getFileDownloader().getContentAsStringAndClose()
	};
};

var webzRenderPage = function(pageContext) {
	pageContext['MAIN-CONTENT'] = marked(pageContext['MAIN-CONTENT']);
	return indexTemplate(pageContext);
};
