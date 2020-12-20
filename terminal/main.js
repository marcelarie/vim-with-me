
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"
import {mainFolder} from "../terminal/mainFolder.js"
import {getLines} from '../src/data/normal.js';

// HTML
export const container = document.getElementById('container')
export const textArea = document.createElement('textarea')
export const numberCol = document.createElement('div')
export const terminalInput = document.createElement('div')
export const nerdTree = document.createElement('div')

// Creating the text area.
function addTextArea() {
    container.classList.add('display-flex')
    textArea.classList.add('text-area')
    textArea.setAttribute('contentEditable', true)
    textArea.setAttribute('spellcheck', false)
    numberCol.classList.add('number-column')
    nerdTree.classList.add('nerd-tree')
    // nerdTree.classList.add('none')
    container.appendChild(nerdTree);
    container.appendChild(numberCol);
    container.appendChild(textArea);
    lineNumber(getLines(textArea));
}
addTextArea();


// Add the terminal lowbar
function addTerminalInput() {
    terminalInput.classList.add('terminal-input', 'hide')
    terminalInput.setAttribute('contentEditable', true)
    terminalInput.setAttribute('spellcheck', false)
    terminalInput.setAttribute('wrap', false)
    container.appendChild(terminalInput)
}
addTerminalInput();




// Add line number column
function lineNumber(items) {
    numberCol.innerHTML = ''
    for (let item = 0; item < items.length; item++) {
        let newItem = document.createElement('div')
        newItem.classList.add('number-left')
        newItem.textContent = item
        numberCol.appendChild(newItem)
    }
}



export {lineNumber}


