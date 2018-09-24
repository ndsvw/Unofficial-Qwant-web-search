// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { shell } = require('electron');

let buttonSubmit = document.getElementById("buttonSubmit");
let input = document.getElementById("value");

buttonSubmit.addEventListener("click", () => {
  if (input.value != "") {
    shell.openExternal('https://qwant.com/?q=' + encodeURIComponent(input.value));
  }
});