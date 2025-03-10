const textarea = document.getElementById("data");

const autoCopy = () => {
	textarea.select();
	document.execCommand("copy");
};

// Click button Export New Word
document.getElementById("exportNewWord").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "clickBtnExportNewWord",
		});
	});
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.action === "exportNewWord") {
		const data = msg.data;
		// dataArr.push({
		//     newWord,
		//     phonetic,
		//     meaning,
		//     example
		// });
		//chrome.runtime.sendMessage({action: 'showData', data: dataArr});
		let text = "";
		data.forEach((item) => {
			//create cloze replace all character in newWord to _, no replace the first character and space
			const cloze = item.newWord.replace(/[^ ]/g, "_");
			text += `${item.newWord};${cloze};${item.phonetic};${item.meaning};${item.example}\n`;
		});
		textarea.value = text += "\n";
		autoCopy();
	}
});

// Click button Export Vocabulary
document.getElementById("exportVocabulary").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "clickBtnExportVocabulary",
		});
	});
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "exportVocabulary") {
        const data = msg.data;
        
        let text = "";
        
        textarea.value = text += "\n";
        autoCopy();
    }
});

// Click button Export Grammar
document.getElementById("exportGrammar").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "clickBtnExportGrammar",
		});
	});
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "exportGrammar") {
        const data = msg.data;
        
        let text = "";
        
        textarea.value = text += "\n";
        autoCopy();
    }
});
