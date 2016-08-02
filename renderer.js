// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require("fs")
const bobImg = document.getElementById("doesBobExist");

function checkForBob() {
    fs.access("bob.txt", fs.F_OK, function (err) {
        const image = err ? "no.png" : "yes.png"; 
        bobImg.src = image;
    });
};

setInterval(checkForBob, 1000);

