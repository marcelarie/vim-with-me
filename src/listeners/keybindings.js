import { Folder } from "../model/folder.js";
import { File } from "../model/file.js";
import { mainFolder } from "../../terminal/mainFolder.js";
import { textArea, terminalInput } from '../../terminal/main.js';
import { modeManager, vimModes, saveFile, quit } from '../data/keybindingsFun.js';


// Add event listener to terminal input
terminalInput.addEventListener('keydown', e => {
    //for Enter
    if (e.key === 'Enter') {
        e.preventDefault();
        if (terminalInput.innerText.includes(':w')) {
            let fileNames = terminalInput.innerText.split(' ')
            saveFile(fileNames);
        } else if (terminalInput.innerText.includes(':q')) {
            const mainFiles = Object.values(mainFolder.files)
            quit(mainFiles);
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
            textArea.classList.add('hideCaret')
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





