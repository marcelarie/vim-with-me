
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"
import {mainFolder} from "../terminal/mainFolder.js"

// HTML
const container = document.getElementById('container')
const textArea = document.createElement('div')
const terminalInput = document.createElement('div')

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


// Add the terminal lowbar
function addTerminalInput() {
    terminalInput.classList.add('terminal-input')
    terminalInput.setAttribute('contentEditable', true)
    terminalInput.setAttribute('spellcheck', false)
    terminalInput.setAttribute('wrap', false)


    container.appendChild(terminalInput)
}
addTerminalInput();


terminalInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (terminalInput.innerText.includes(':w')) {
            let fileNames = terminalInput.innerText.split(' ')
            fileNames.shift();

            fileNames.forEach(name => {
                mainFolder.saveFile(name, textArea.innerText)
            })

            console.log(mainFolder)
            terminalInput.innerText = '';
        }
    }
})

// Add line number column
function lineNumber() {
    const startPosition = textArea.selectionStart;
    const endPosition = textArea.selectionEnd;

    console.log(startPosition)
    console.log(endPosition)
    console.log('this works')
}


