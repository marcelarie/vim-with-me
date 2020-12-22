import {lineNumber} from '../../terminal/main.js'
import {mainFolder} from "../../terminal/mainFolder.js"
import {textArea, terminalInput, numberCol} from '../../terminal/main.js'
import {getCaretPosition, setCaretPosition, setSelectionRange, followCaret, caretPosition} from '../data/caret.js';
import {deleteCharOnPosition, getLines} from '../data/normal.js';
import {showVimMode, showFilePath, showLanguage, showWordCounterTotal, showWordCounterRealTime} from '../../terminal/airline.js'
import {positionsToLine} from '../data/up-down-movements.js'
import {deleteFile} from '../../terminal/nerdTree.js'

// vim modes
const vimModes = {normal: true, insert: false, visual: false, }
let counterNerdTree = 0;
let clipboard = '';
//Vim modes change 
function modeManager(mode) {
    showVimMode(mode);
    switch (mode) {
        case 'normal':
            normalMode();
            vimModes.normal = true;
            vimModes.visual = false;
            vimModes.insert = false;
            break;
        case 'visual':
            vimModes.visual = true;
            vimModes.insert = false;
            vimModes.normal = false;
            break;
        case 'insert':
            vimModes.insert = true;
            vimModes.normal = false;
            vimModes.visual = false;
            textArea.focus();
            break;
    };
};

export let currentFileId = '';
function currentFile(currentFileId) {
    let mainFiles = Object.keys(mainFolder.files)
    let fileToOverwrite = ''
    mainFiles.forEach(file => {
        if (currentFileId === mainFolder.files[file].id) {
            console.log('file with same id')
            fileToOverwrite = file
        } else {
            console.log(false)
        }
    })
    return fileToOverwrite;
}

// save with :w
function saveFile(fileNames) {
    fileNames.shift();
    let correct = true;
    let mainFiles = Object.keys(mainFolder.files)
    if (fileNames.length <= 0) {
        if (mainFiles.length > 0) {
            if (textArea.value) {
                mainFolder.files[currentFile(currentFileId)].content = textArea.value;
            } else {
                textArea.value = '\n'
                mainFolder.files[currentFile(currentFileId)].content = textArea.value;
            }
            console.log(mainFolder)
            terminalInput.value = '';
            terminalInput.classList.toggle('hide')

        } else {
            terminalInput.value = 'Please add a name to the file.'
            correct = false;
        }
    } else {
        fileNames.forEach(name => {
            if (!mainFiles.includes(name)) {
                if (name.length <= 0) {
                    terminalInput.value = 'Please add a name to the file.'
                    correct = false;
                } else {
                    mainFolder.createFile(name, textArea.value);
                    currentFileId = mainFolder.files[name].id
                    terminalInput.value = '';
                    terminalInput.classList.toggle('hide')
                }
            } else {
                terminalInput.value = 'Filename already exists.'
                correct = false;
            };
        })
        console.log(mainFolder)
    };
    // show last file insitu
    if (correct === true) {
        let lastFile = Object.keys(mainFolder.files)
        showFilePath(Object.keys(mainFolder), lastFile[lastFile.length - 1])
        showLanguage(lastFile[lastFile.length - 1])
    }
    localStorage.setItem('files', JSON.stringify(mainFolder.files))
};

// quit with :q
function quit(arr) {
    if (arr.length <= 0 && textArea.value === '') {
        window.close();
    } else if (arr.length <= 0 && textArea.value !== '') {
        alert('Save your file first with :w name-of-file');
        terminalInput.value = '';
        terminalInput.classList.toggle('hide')
    } else if (arr.length >= 1) {
        let fileNotify = false;
        arr.forEach(file => {
            file.content === textArea.value ? fileNotify = true : file.content;
        });

        if (fileNotify === true) {
            window.close();
        } else {
            alert('Save your progress with :w name-of-file.');
        }
        terminalInput.value = '';
        terminalInput.classList.toggle('hide')
    }
}

function substitutePattern(pattern) {
    const splitted = pattern.split('/')
    const currentWord = splitted[1]
    const substituteWord = splitted[2]

    textArea.value = textArea.value.replaceAll(currentWord, substituteWord)

    terminalInput.value = '';
    terminalInput.classList.toggle('hide')
}


const normalMode = e => {
    document.removeEventListener('keydown', insertMode)
    const currentLine = positionsToLine(textArea.value, caretPosition);
    const linesText = getLines(textArea)
    if (vimModes.normal === true && terminalInput.classList.contains('hide')) {
        const nerdTree = document.getElementById('nerd-tree-container')
        if (nerdTree.classList.contains('none')) {
            switch (e.key) {
                case 'h':
                    e.preventDefault();
                    followCaret(textArea, getCaretPosition(e), 'h');
                    break;
                case 'j':
                    e.preventDefault();
                    followCaret(textArea, getCaretPosition(e), 'j');
                    break;
                case 'k':
                    e.preventDefault();
                    followCaret(textArea, getCaretPosition(e), 'k');
                    break;
                case 'l':
                    e.preventDefault();
                    followCaret(textArea, getCaretPosition(e), 'l');
                    break;
                case 'i':
                    e.preventDefault();
                    insertMode();
                    break;
                case 'x':
                    e.preventDefault();
                    let oldCaretPos = getCaretPosition(e)
                    deleteCharOnPosition(textArea, getCaretPosition(e));
                    setCaretPosition(textArea, oldCaretPos)
                    followCaret(textArea, getCaretPosition(e), 'x');
                    break;
                case 'y':
                    e.preventDefault();
                    document.addEventListener('keydown', e => {
                        if (e.key === 'y') {
                            clipboard = ''
                            clipboard = linesText[currentLine]
                        }
                    })
                    break;
                case 'D':
                    e.preventDefault();
                    let oldCaretPosD = getCaretPosition(e)
                    linesText[currentLine] = ''
                    const joined = linesText.join('\n')
                    textArea.value = joined
                    setCaretPosition(textArea, oldCaretPosD)
                    break;
                case 'p':
                    e.preventDefault();
                    let oldCaretPosP = getCaretPosition(e)
                    if (clipboard !== '') {
                        const arrayLines = Object.values(linesText)
                        arrayLines.splice(currentLine, 0, clipboard)
                        textArea.value = arrayLines.join('\n')
                    }
                    setCaretPosition(textArea, oldCaretPosP)
                    lineNumber(getLines(textArea));
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ArrowDown':
                    break;
                default:
                    e.preventDefault();
            }
        } else {
            let files = []
            const fileList = document.querySelectorAll('.file-on-tree');
            const mainFiles = mainFolder.files
            fileList.forEach(file => files.push(file));
            switch (e.key) {
                case 'j':
                    e.preventDefault();
                    counterNerdTree++;
                    counterNerdTree >= files.length ? counterNerdTree = 0 : files;
                    files.forEach(filename => filename.classList.remove('file-on-focus'))
                    files[counterNerdTree].classList.add('file-on-focus')
                    break;
                case 'k':
                    e.preventDefault();
                    counterNerdTree--;
                    counterNerdTree === -1 ? counterNerdTree = files.length - 1 : files;
                    files.forEach(filename => filename.classList.remove('file-on-focus'))
                    files[counterNerdTree].classList.add('file-on-focus')
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (nerdTree.classList.contains('none')) {
                        numberCol.classList.toggle('left-border-text-area')
                    }
                    fileList.forEach(file => {
                        if (file.classList.contains('file-on-focus')) {
                            const selectedFile = file.textContent
                            currentFileId = mainFiles[selectedFile].id
                            textArea.value = mainFiles[selectedFile].content
                            nerdTree.classList.toggle('none')
                            lineNumber(getLines(textArea))
                            //          v      temporary       v
                            showFilePath(Object.keys(mainFolder), selectedFile)
                            showLanguage(selectedFile)
                            textArea.focus();
                            numberCol.classList.toggle('left-border-text-area')
                        }
                    })
                    break;
                case 'D':
                    e.preventDefault();
                    deleteFile(fileList, mainFiles)
                    nerdTree.focus();
                    break;
                default:
                    e.preventDefault();
            }
        }
    }
}
document.addEventListener('keydown', normalMode)

const insertMode = e => {
    if (vimModes.insert === true) {
        switch (e.key) {
            case 'Escape':
                normalMode();
                break;
        }
    }
}
document.addEventListener('keydown', insertMode)



export {modeManager, vimModes, saveFile, quit, substitutePattern}
