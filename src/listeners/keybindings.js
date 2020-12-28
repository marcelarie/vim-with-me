import {showWordCounterRealTime, getTotalWordCounter} from "../../terminal/airline.js";
import {lineNumber, numberCol, terminalInput, textArea} from '../../terminal/main.js';
import {mainFolder} from "../../terminal/mainFolder.js";
import {addNerdFiles, currentFileMark, uploadFile} from '../../terminal/nerdTree.js';
import {getCaretPosition} from '../data/caret.js';
import {modeManager, quit, saveFile, substitutePattern, vimModes} from '../data/keybindingsFun.js';
import {getLines} from '../data/normal.js';


// Add event listener to terminal input
terminalInput.addEventListener('keydown', e => {
    //for Enter
    if (e.key === 'Enter') {
        e.preventDefault();
        if (terminalInput.value.includes(':w')) {                // save 
            let fileNames = terminalInput.value.split(' ')
            saveFile(fileNames);
        } else if (terminalInput.value.includes(':q')) {        // quit
            const mainFiles = Object.values(mainFolder.files)
            quit(mainFiles);
        } else if (terminalInput.value.startsWith(':%s/')) {    // substitutePattern -> :%s/word/new-word/g
            substitutePattern(terminalInput.value)
        } else if (terminalInput.value.includes('command not found')) {     // reset terminal to :
            terminalInput.value = ":"
        } else if (terminalInput.value.includes('Filename already exists.') || terminalInput.value.includes('Please add a name to the file.')) {    // reset terminal to :w
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
    showWordCounterRealTime(getTotalWordCounter(textArea), getCaretPosition(e))
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

document.getElementById('input-file').addEventListener('change', uploadFile)

