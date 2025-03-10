const textarea = document.getElementById('data');

const autoCopy = () => {
    textarea.select();
    document.execCommand('copy');
};

// Click button Export New Word
document.getElementById('exportNewWord').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "clickBtnExportNewWord"});
    });
});

// dataArr.push({
//     newWord,
//     phonetic,
//     meaning,
//     example
// });
//chrome.runtime.sendMessage({action: 'showData', data: dataArr});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'exportNewWord') {
        const data = msg.data;
        let text = '';
        data.forEach((item) => {
            //create cloze replace all character in newWord to _, no replace the first character and space
            const cloze = item.newWord.replace(/[^ ]/g, '_');
            text += `${item.newWord};${cloze};${item.phonetic};${item.meaning};${item.example}\n`;
        });
        textarea.value = text += '\n';
        autoCopy();
    }
});

// Click button Export Vocabulary
document.getElementById('exportVocabulary').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "clickBtnExportVocabulary"});
    });
});
