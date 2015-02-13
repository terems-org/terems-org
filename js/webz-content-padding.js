
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			
			content["pageTitle"] = ".: New Tab :.";
			
			content["navLinks"][0] = {"url": "http://www.lingvo.ua/ru", "title": "Lingvo"};
			content["navLinks"][2] = {"url": "https://github.com/terems-org/webz-server/issues/4", "title": "Todo"};
			
			var sections = content["sections"];
			sections.splice(0, 0, {
						"title": "Pull WebZ From Origin...",
						"titleUrl": "https://www.pinterest.com/pin/409475791095970527/",
					});
			sections.pop();
			sections.push({
						"title": "Miscellaneous (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/miscellaneous/",
					},{
						"title": "Internal (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/internal/",
					},{
						"title": "Licensing (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/licensing/",
					},{
						"title": "Local Artifactory",
						"titleUrl": "http://localhost:8081/",
					});
			
			var dialogButtons = content["dialogButtons"];
			dialogButtons[0] = {
				"text": "<h1 style='width:100%;text-align:center'>Platform</h1><p style='width:100%;text-align:center'>-&nbsp;Internal Issues&nbsp;-</p>",
				"url": "https://github.com/teremterem/webz-platform/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc",
			};
			dialogButtons[1]["url"] = "http://mail.terems.org/";
		}
		
		window.rivetsContext = {webz: content};
	};
