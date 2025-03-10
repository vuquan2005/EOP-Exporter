// Select the EOP Body element
const eopBody = document.querySelector("body.blank");

const taskClock = document.createElement("p");
eopBody.insertAdjacentElement("afterbegin", taskClock);

taskClock.style.position = "fixed";
taskClock.style.top = "0";
taskClock.style.left = "0";
taskClock.style.minWidth = "50px";
taskClock.style.color = "#000";
taskClock.style.backgroundColor = "#fff";
taskClock.style.fontSize = "15px";
taskClock.style.margin = "3px";
taskClock.style.padding = "2px";
taskClock.style.padding = "auto";
taskClock.style.zIndex = "1000";
taskClock.style.borderRadius = "5px";
taskClock.style.border = "1px solid #aaa";

const sessionClock = document.createElement("p");
eopBody.insertAdjacentElement("afterbegin", sessionClock);

sessionClock.style.position = "fixed";
sessionClock.style.top = "30px";
sessionClock.style.left = "0";
sessionClock.style.minWidth = "50px";
sessionClock.style.color = "#000";
sessionClock.style.backgroundColor = "#fff";
sessionClock.style.fontSize = "15px";
sessionClock.style.margin = "3px";
sessionClock.style.padding = "2px";
sessionClock.style.padding = "auto";
sessionClock.style.zIndex = "1000";
sessionClock.style.borderRadius = "5px";
sessionClock.style.border = "1px solid #aaa";

const totalClock = document.createElement("p");
eopBody.insertAdjacentElement("afterbegin", totalClock);
totalClock.style.position = "fixed";
totalClock.style.top = "60px";
totalClock.style.left = "0";
totalClock.style.minWidth = "50px";
totalClock.style.color = "#000";
totalClock.style.backgroundColor = "#fff";
totalClock.style.fontSize = "15px";
totalClock.style.margin = "3px";
totalClock.style.padding = "2px";
totalClock.style.padding = "auto";
totalClock.style.zIndex = "1000";
totalClock.style.borderRadius = "5px";
totalClock.style.border = "1px solid #aaa";


// Initialize the timer
taskClock.textContent = "⏱️: 0";
sessionClock.textContent = "⏱️: 0";
totalClock.textContent = "⏱️: 0";


var time = 0;
let timer = setInterval(() => {
    time++;
    taskClock.textContent = "⏱️: " + time;
}, 1000);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "urlChanged") {
            // Reset the timer when the URL changes
            time = 0;
        }
    }
);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "taskClock") {
            taskClock.style.display = "none";
            time = 0;
        }
    }
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "sessionClock") {
            sessionClock.style.display = "none";
            time = 0;
        }
    }
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "totalClock") {
            totalClock.style.display = "none";
            time = 0;
        }
    }
);



