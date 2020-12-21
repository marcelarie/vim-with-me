
import { Folder } from "../src/model/folder.js"
import { File } from "../src/model/file.js"
import { mainFolder } from "../terminal/mainFolder.js"
import { getLines } from '../src/data/normal.js';
import { showFilePath } from '../terminal/airline.js'

// HTML
export const container = document.getElementById('container')
export const textArea = document.createElement('textarea')
export const numberCol = document.createElement('div')
export const terminalInput = document.createElement('div')
export const nerdTree = document.createElement('div')

// Creating the text area.
function addTextArea() {
    container.classList.add('display-flex')
    //text area
    textArea.classList.add('text-area')
    textArea.setAttribute('contentEditable', true)
    textArea.setAttribute('spellcheck', false) //left numbers
    numberCol.classList.add('number-column')
    //nerd tree
    nerdTree.classList.add('nerd-tree', 'none')
    nerdTree.id = 'nerd-tree'

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


function addAirLine() {
    const airLine = document.createElement('div')
    airLine.classList.add('air-line')
    // modes
    const mode = document.createElement('div')
    mode.classList.add('mode-air-line')
    mode.id = 'mode-air-line'
    mode.textContent = 'NORMAL'
    // branch
    const branch = document.createElement('div')
    branch.classList.add('branch-air-line')
    branch.id = 'branch-air-line'
    branch.textContent = 'ᚠ main'
    // folder
    const folder = document.createElement('div')
    folder.classList.add('folder-air-line')
    folder.id = 'folder-air-line'
    folder.textContent = 'file/index.html';
    //language of file
    const language = document.createElement('div')
    language.classList.add('language-air-line')
    language.id = 'language-air-line'
    language.textContent = '-'

    //line/word counter
    const wordCounter = document.createElement('div')
    wordCounter.classList.add('word-counter-air-line')
    wordCounter.id = 'word-counter-air-line'
    wordCounter.textContent = '0% 1/1'

    airLine.appendChild(mode)
    airLine.appendChild(branch)
    airLine.appendChild(folder)
    airLine.appendChild(language)
    airLine.appendChild(wordCounter)
    container.appendChild(airLine)
}
addAirLine();
showFilePath(Object.keys(mainFolder), '');



export { lineNumber }


