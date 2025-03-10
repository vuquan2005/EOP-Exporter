chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'clickBtnExportNewWord') {
        exportNewWord();
    }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'clickBtnExportVocabulary') {
        exportVocabulary();
    }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'clickBtnExportGrammar') {
        exportGrammar();
    }
});


const exportNewWord = () => {
    //<div class="ditem"> <h4><i class="fa fa-play-circle daudio" rel="e201bb3c371fd1abec42" media-url="//c.eop.edu.vn/desktop/dictionary/1849/462d5104332t5737l0.mp3"></i>&nbsp;Band saw/ bandsaw</h4> <div class="minhhoa"> <i>/ˈbændsɔː/</i> <img src="//c.eop.edu.vn/media/auto/120/dictionary/1849/462d5104328t6037l6.png" style="border: 1px solid rgb(254, 254, 254);"> </div> <p><b>Cưa máy</b></p><br> <p>The most common use for the band saw is in cutting irregular shapes.</p> </div>
    const data = document.querySelectorAll('div.ditem');
    const dataArr = [];
    data.forEach((item) => {
        let newWord = item.querySelector('h4').textContent;
        newWord = newWord.slice(1);
        let phonetic = item.querySelector('div.minhhoa').querySelector('i').textContent;
        phonetic = phonetic.slice(1, -1);
        let meaning = item.querySelector('b').textContent;
        let example = '';
        item.querySelectorAll('p').forEach((p) => {
                if (p.textContent !== '') {
                    example = p.textContent;
                }
            });
        dataArr.push({
            newWord,
            phonetic,
            meaning,
            example
        });
    });
    console.log(dataArr);

    chrome.runtime.sendMessage({action: 'exportNewWord', data: dataArr});
};

const exportVocabulary = () => {
    const data = document.querySelectorAll('div.ditem');
    const dataArr = [];
    data.forEach((item) => {
        
    });
    console.log(dataArr);

    chrome.runtime.sendMessage({action: 'exportVocabulary', data: dataArr});
};

const exportGrammar = () => {
    const data = document.querySelectorAll('div.ditem');
    const dataArr = [];
    data.forEach((item) => {
        
    });
    console.log(dataArr);

    chrome.runtime.sendMessage({action: 'exportGrammar', data: dataArr});
}
