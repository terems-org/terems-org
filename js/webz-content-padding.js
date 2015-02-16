
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			
			content["pageTitle"] = ".: New Tab :.";
			
			content["navLinks"][0] = {"url": "https://www.youtube.com/", "title": "YouTube"};
			content["navLinks"][2] = {"url": "https://github.com/teremterem/webz-platform/issues/1", "title": "Todo"};
			
			var sections = content["sections"];
			sections.splice(0, 0, {
						"title": "http://localhost/",
						"titleUrl": "http://localhost/",
					},{
						"title": "pull WebZ from origin",
						"titleUrl": "https://www.pinterest.com/pin/409475791095970527/",
					});
			sections.pop();
			sections.push({
						"title": "Internal (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/internal/",
					},{
						"title": "local Artifactory",
						"titleUrl": "http://localhost:8081/",
					});
			
			var dialogButtons = content["dialogButtons"];
			dialogButtons[0] = {
				"text": "<h1 style='width:100%;text-align:center'>Platform</h1><p style='width:100%;text-align:center'>-&nbsp;Internal Issues&nbsp;-</p>",
				"url": "https://github.com/teremterem/webz-platform/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc",
			};
			dialogButtons[1]["url"] = "http://mail.terems.org/";
			dialogButtons.pop();
			dialogButtons.push({
						"text": "<p style='width:100%;text-align:center'><i>Lingvo</i></p>",
						"url": "http://www.lingvo.ua/ru",
					});
		}
		
		window.rivetsContext = {webz: content};
	};
