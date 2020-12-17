import {Folder} from "../model/folder.js"
import {File} from "../model/file.js"
import {mainFolder} from "../../terminal/mainFolder.js"
import {textArea, terminalInput} from '../../terminal/main.js'

// vim modes
const vimModes = {normal: true, insert: false, visual: false, }

// Add event listener to terminal input
terminalInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (terminalInput.innerText.includes(':w')) {
            let fileNames = terminalInput.innerText.split(' ')
            fileNames.shift();
            if (fileNames.length <= 0) {
                alert('Please add a name to the file with :w name-of-file.')
            } else {
                fileNames.forEach(name => {
                    mainFolder.saveFile(name, textArea.innerText)
                })
                console.log(mainFolder)
            };
            terminalInput.innerText = '';
            terminalInput.classList.toggle('hide')
        } else if (terminalInput.innerText.includes(':q')) {
            const mainFiles = Object.values(mainFolder.files)
            console.log(mainFiles)
            if (mainFiles.length <= 0 && textArea.innerText === '') {
                window.close();
            } else if (mainFiles.length <= 0 && textArea.innerText !== '') {
                alert('Save your file first with :w name-of-file');
                terminalInput.innerText = '';
                terminalInput.classList.toggle('hide')
            } else if (mainFiles.length >= 1) {
                mainFiles.forEach(file => {
                    file.content === textArea.innerText ? window.close() : alert('Save your progress first with :w');
                });
                terminalInput.innerText = '';
                terminalInput.classList.toggle('hide')
            }
        }
    }
})


// calling with :
const showTerminal = e => {
    if (e.key === ':' && terminalInput.classList.contains('hide')) {
        terminalInput.classList.toggle('hide')
        terminalInput.focus();
    };
};
document.addEventListener('keydown', showTerminal);

// escape key
const escKey = e => {
    if (e.key === 'Escape') {
        if (!terminalInput.classList.contains('hide')) {
            terminalInput.classList.toggle('hide')
            document.activeElement.blur();
            terminalInput.innerText = '';
        } else if (vimModes.insert === true) {
            modeManager('normal');
        } else if (vimModes.visual === true) {
            modeManager('visual');
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

//Vim modes change 
function modeManager(mode) {
    switch (mode) {
        case 'normal':
            console.log('normal');
            vimModes.normal = true;
            vimModes.visual = false;
            vimModes.insert = false;
            textArea.setAttribute('contentEditable', false);
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
            textArea.setAttribute('contentEditable', true);
            textArea.focus();
            break;
    }
}




