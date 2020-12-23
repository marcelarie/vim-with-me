import {Folder} from "../model/folder.js";
import {File} from "../model/file.js";
import {mainFolder} from "../../terminal/mainFolder.js";
import {textArea, terminalInput, lineNumber, numberCol} from '../../terminal/main.js';
import {modeManager, vimModes, saveFile, quit, substitutePattern} from '../data/keybindingsFun.js';
import {getLines} from '../data/normal.js'
import {addNerdFiles, currentFileMark} from '../../terminal/nerdTree.js'
import {showLanguage, showWordCounterTotal, showWordCounterRealTime} from "../../terminal/airline.js";
import {getCaretPosition, setCaretPosition} from '../data/caret.js'


// Add event listener to terminal input
terminalInput.addEventListener('keydown', e => {
    //for Enter
    if (e.key === 'Enter') {
        e.preventDefault();
        if (terminalInput.value.includes(':w')) {
            let fileNames = terminalInput.value.split(' ')
            saveFile(fileNames);
        } else if (terminalInput.value.includes(':q')) {
            const mainFiles = Object.values(mainFolder.files)
            quit(mainFiles);
        } else if (terminalInput.value.startsWith(':%s/')) {
            substitutePattern(terminalInput.value)
        } else if (terminalInput.value.includes('command not found')) {
            terminalInput.value = ":"
        } else if (terminalInput.value.includes('Filename already exists.') || terminalInput.value.includes('Please add a name to the file.')) {
            terminalInput.value = ":w "
        } else {
            terminalInput.value = "command not found"
        }
    }
})

// calling with :
const showTerminal = e => {
    if (e.key === ':' && terminalInput.classList.contains('hide')) {
        e.preventDefault()
        terminalInput.classList.toggle('hide')
        terminalInput.value = ':'
        terminalInput.focus();
        terminalInput.selectionStart = terminalInput.selectionEnd = 1;
    };
};
document.addEventListener('keydown', showTerminal);

// escape key
const escKey = e => {
    if (e.key === 'Escape') {
        if (!terminalInput.classList.contains('hide')) {
            terminalInput.classList.toggle('hide')
            document.activeElement.blur();
            terminalInput.value = '';
        } else if (vimModes.insert === true) {
            modeManager('normal');
        } else if (vimModes.visual === true) {
            modeManager('normal');
        };
    };
};
document.addEventListener('keydown', escKey);

// insert mode with i
const insertMode = e => {
    if (e.key === 'i' && vimModes.normal === true && terminalInput.classList.contains('hide')) {
        modeManager('insert');
    }
};
document.addEventListener('keydown', insertMode);


// listener on every input of textArea
textArea.addEventListener('input', () => {
    lineNumber(getLines(textArea));
})

textArea.addEventListener('keydown', e => {
    showWordCounterRealTime(showWordCounterTotal(textArea), getCaretPosition(e))
})


// listener on nerdTree 

document.addEventListener('keydown', e => {
    if (e.key === 'N' && vimModes.normal === true && terminalInput.classList.contains('hide')) {
        const nerdTree = document.getElementById('nerd-tree-container')
        nerdTree.classList.toggle('none')
        numberCol.classList.toggle('left-border-text-area')
        nerdTree.focus();
        addNerdFiles();
        currentFileMark();
    }
})




