document.getElementById("taskClock").addEventListener("click", function() {
    chrome.runtime.sendMessage({message: "taskClock"});
});

document.getElementById("sessionClock").addEventListener("click", function() {
    chrome.runtime.sendMessage({message: "sessionClock"});
});

document.getElementById("totalClock").addEventListener("click", function() {
    chrome.runtime.sendMessage({message: "totalClock"});
});
