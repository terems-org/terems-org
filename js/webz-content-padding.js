
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			
			content["pageTitle"] = ".: New Tab :.";
			
			content["navLinks"][0] = {"url": "http://www.lingvo.ua/ru", "title": "Lingvo"};
			content["navLinks"][2] = {"url": "https://github.com/teremterem/webz-platform/issues/1", "title": "Todo"};
			
			var sections = content["sections"];
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
					});
			
			var dialogButtons = content["dialogButtons"];
			dialogButtons[0] = {
				"text": "<h1 style='width:100%;text-align:center'>Platform</h1><p style='width:100%;text-align:center'>-&nbsp;Internal Issues&nbsp;-</p>",
				"url": "https://github.com/teremterem/webz-platform/issues",
			};
			dialogButtons[1]["url"] = "http://mail.terems.org/";
		}
		
		window.rivetsContext = {webz: content};
	};
