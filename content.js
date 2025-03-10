// listen for messages from the popup and run the function
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'clickBtnExportNewWord') {
        exportNewWord();
    }
});

// arow function to export data
const exportNewWord = () => {
    // get all the data from the page
    const data = document.querySelectorAll('div.ditem');

    // create an array to store the data
    const dataArr = [];
    // loop through the data and push it to the array
    data.forEach((item) => {
        // get the text content from h4 tags
        let newWord = item.querySelector('h4').textContent;
        // remove the firt character from the text content
        newWord = newWord.slice(1);

        // get the text content from div.minhhoa tags
        let phonetic = item.querySelector('div.minhhoa').querySelector('i').textContent;
        // remove the first and last character from the text content
        phonetic = phonetic.slice(1, -1);

        // get the text content from b tags
        let meaning = item.querySelector('b').textContent;
        // duyệt qua toàn bộ thẻ p và lấy ra thẻ p không null
        let example = '';
        item.querySelectorAll('p').forEach((p) => {
                if (p.textContent !== '') {
                    example = p.textContent;
                }
            });

        // push the data to the array
        dataArr.push({
            newWord,
            phonetic,
            meaning,
            example
        });
    });

    // log the data to the console
    console.log(dataArr);

    // send the data to the popup
    // send message to popup.js
    chrome.runtime.sendMessage({action: 'exportNewWord', data: dataArr});
};
    //<div class="ditem"> <h4><i class="fa fa-play-circle daudio" rel="e201bb3c371fd1abec42" media-url="//c.eop.edu.vn/desktop/dictionary/1849/462d5104332t5737l0.mp3"></i>&nbsp;Band saw/ bandsaw</h4> <div class="minhhoa"> <i>/ˈbændsɔː/</i> <img src="//c.eop.edu.vn/media/auto/120/dictionary/1849/462d5104328t6037l6.png" style="border: 1px solid rgb(254, 254, 254);"> </div> <p><b>Cưa máy</b></p><br> <p>The most common use for the band saw is in cutting irregular shapes.</p> </div>


