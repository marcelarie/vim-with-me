
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"
import {mainFolder} from "../terminal/mainFolder.js"

// HTML
const container = document.getElementById('container')
const textArea = document.createElement('div')

// Creating the text area.

function addTextArea() {
    container.classList.add('display-flex')

    textArea.classList.add('text-area')
    textArea.setAttribute('contentEditable', true)
    textArea.setAttribute('spellcheck', false)

    textArea.textContent = 'test';

    const numberCol = document.createElement('div')
    numberCol.classList.add('number-column')
    container.appendChild(numberCol);
    container.appendChild(textArea);
}
addTextArea();

function lineNumber() {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;

    console.log(startPosition)
    console.log(endPosition)
    console.log('this works')
}


mainFolder.saveFile('filename', textArea.innerText);
console.log(mainFolder)
