
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			content["dialogButtons"][1]["url"] = "http://mail.terems.org/";
		}
		window.rivetsContext = {webz: content};
	};
