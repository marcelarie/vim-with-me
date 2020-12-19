import {Folder} from "../model/folder.js"
import {File} from "../model/file.js"
import {mainFolder} from "../../terminal/mainFolder.js"
import {textArea, terminalInput} from '../../terminal/main.js'
import {getCaretPosition, setCaretPosition, setSelectionRange} from '../data/caret.js'

// vim modes
const vimModes = {normal: true, insert: false, visual: false, }
//Vim modes change 
function modeManager(mode) {
    switch (mode) {
        case 'normal':
            console.log('normal');
            normalMode();
            vimModes.normal = true;
            vimModes.visual = false;
            vimModes.insert = false;
            break;
        case 'visual':
            console.log('visual');
            vimModes.visual = true;
            vimModes.insert = false;
            vimModes.normal = false;
            break;
        case 'insert':
            console.log('insert');
            vimModes.insert = true;
            vimModes.normal = false;
            vimModes.visual = false;
            textArea.focus();
            break;
    };
};

let currentFileId = '';
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
            mainFolder.files[currentFile(currentFileId)].content = textArea.innerText;
            console.log(mainFolder)
        } else {
            alert('Please add a name to the file with :w name-of-file.');
        }
    } else {
        fileNames.forEach(name => {
            if (!mainFiles.includes(name)) {
                mainFolder.createFile(name, textArea.innerText);
                currentFileId = mainFolder.files[name].id
            } else {
                alert('Filename already exists.')
            };
        })
        console.log(mainFolder)
    };
    terminalInput.innerText = '';
    terminalInput.classList.toggle('hide')
};

// quit with :q
function quit(arr) {
    if (arr.length <= 0 && textArea.innerText === '') {
        window.close();
    } else if (arr.length <= 0 && textArea.innerText !== '') {
        alert('Save your file first with :w name-of-file');
        terminalInput.innerText = '';
        terminalInput.classList.toggle('hide')
    } else if (arr.length >= 1) {
        let fileNotify = false;
        arr.forEach(file => {
            file.content === textArea.innerText ? fileNotify = true : file.content;
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
        switch (e.key) {
            case 'h':
                e.preventDefault();
                break;
            case 'j':
                e.preventDefault();
                break;
            case 'k':
                e.preventDefault();
                break;
            case 'l':
                e.preventDefault();
                break;
            case 'i':
                e.preventDefault();
                insertMode();
                break;
            case 'v':
                e.preventDefault();
                //visualMode();
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                break;
            default:
                e.preventDefault();
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



export {modeManager, vimModes, saveFile, quit}
