import { lineNumber } from '../../terminal/main.js'
import { mainFolder } from "../../terminal/mainFolder.js"
import { textArea, terminalInput, numberCol } from '../../terminal/main.js'
import { getCaretPosition, setCaretPosition, setSelectionRange, followCaret } from '../data/caret.js';
import { deleteCharOnPosition, getLines } from '../data/normal.js';
import { showVimMode, showFilePath, showLanguage, showWordCounterTotal, showWordCounterRealTime } from '../../terminal/airline.js'

// vim modes
const vimModes = { normal: true, insert: false, visual: false, }
let counterNerdTree = 0;
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
    let mainFiles = Object.keys(mainFolder.files)
    if (fileNames.length <= 0) {
        if (mainFiles.length > 0) {
            mainFolder.files[currentFile(currentFileId)].content = textArea.value;
            console.log(mainFolder)
        } else {
            alert('Please add a name to the file with :w name-of-file.');
        }
    } else {
        fileNames.forEach(name => {
            if (!mainFiles.includes(name)) {
                mainFolder.createFile(name, textArea.value);
                currentFileId = mainFolder.files[name].id
            } else {
                alert('Filename already exists.')
            };
        })
        console.log(mainFolder)
    };
    terminalInput.innerText = '';
    terminalInput.classList.toggle('hide')
    // show last file insitu
    let lastFile = Object.keys(mainFolder.files)
    showFilePath(Object.keys(mainFolder), lastFile[lastFile.length - 1])
    showLanguage(lastFile[lastFile.length - 1])
};

// quit with :q
function quit(arr) {
    if (arr.length <= 0 && textArea.value === '') {
        window.close();
    } else if (arr.length <= 0 && textArea.value !== '') {
        alert('Save your file first with :w name-of-file');
        terminalInput.innerText = '';
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
        terminalInput.innerText = '';
        terminalInput.classList.toggle('hide')
    }
}


const normalMode = e => {
    document.removeEventListener('keydown', insertMode)
    if (vimModes.normal === true && terminalInput.classList.contains('hide')) {
        // lineNumber(getLines(textArea))
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
                case 'v':
                    e.preventDefault();
                    let visualCaretPos = getCaretPosition(e)
                    //visualMode();
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
                    numberCol.classList.toggle('left-border-text-area')
                    fileList.forEach(file => {
                        if (file.classList.contains('file-on-focus')) {
                            const selectedFile = file.textContent
                            currentFileId = mainFiles[selectedFile].id
                            textArea.value = mainFiles[selectedFile].content
                            nerdTree.classList.toggle('none')
                            lineNumber(getLines(textArea))
                            //           v      temporal       v
                            showFilePath(Object.keys(mainFolder), selectedFile)
                            showLanguage(selectedFile)
                            textArea.focus();
                        }
                    })
                    break;
                default:
                    e.preventDefault();
            }
        }
    }
}
document.addEventListener('keydown', normalMode)

const insertMode = e => {
    textArea.classList.remove('greenCaret')
    if (vimModes.insert === true) {
        switch (e.key) {
            case 'Escape':
                normalMode();
                break;
        }
    }
}
document.addEventListener('keydown', insertMode)



export { modeManager, vimModes, saveFile, quit }
