
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			var dialogButtons = content["dialogButtons"];
			dialogButtons[1]["url"] = "http://mail.terems.org/";
			dialogButtons.push({
					"text": "<p style='width:100%;text-align:center'>Issues</p>",
					"url": "https://github.com/teremterem/webz-platform/issues",
				});
		}
		window.rivetsContext = {webz: content};
	};
