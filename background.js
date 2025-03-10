chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        chrome.tabs.sendMessage(tabId, {
            message: 'urlChanged'
        });
    }
});

chrome.storage.local.set({
    taskClock: 0,
    sessionClock: 0,
    totalClock: 0
});