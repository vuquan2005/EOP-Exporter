//event click on the button
document.getElementById('exportNewWord').addEventListener('click', () => {
    
    //send message click to content.js
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


// listen for messages from the content script and run show data to textarea
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'exportNewWord') {
        // get the data from the message
        const data = msg.data;
        // create a variable to store the data
        let text = '';
        // loop through the data and add it to the text
        data.forEach((item) => {
            //create cloze replace all character in newWord to _, no replace the first character and space
            const cloze = item.newWord.replace(/[^ ]/g, '_');
            // add the data to the text
            text += `${item.newWord};${cloze};${item.phonetic};${item.meaning};${item.example}\n`;
        });
        // add the text to the textarea
        textarea.value = text;
    }
});

const textarea = document.getElementById('data');