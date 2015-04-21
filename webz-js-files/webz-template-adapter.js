
var indexTemplate = null;

var webzInit = function(webzFiles) {
	indexTemplate = Handlebars.compile(webzFiles.getFile("/index.html").getFileDownloader().getContentAsStringAndClose());
};

var webzPreparePageContext = function(webzContext, fullUrl) {
	var currentFile = webzContext.getCurrentFile();
	return {
		"WEBZ-ROOT": {"FULL-URI": webzContext.resolveUri(webzContext.getFile("/"))},
		"WEBZ-FILE": {"NAME": currentFile.getMetadata().getName()},
		"MAIN-CONTENT": marked(currentFile.getFileDownloader().getContentAsStringAndClose())
	};
};

var webzRenderPage = function(pageContext) {
	return indexTemplate(pageContext);
};
