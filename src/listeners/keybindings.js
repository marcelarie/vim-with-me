import { Folder } from "../model/folder.js"
import { File } from "../model/file.js"
import { mainFolder } from "../../terminal/mainFolder.js"
import { textArea, terminalInput } from '../../terminal/main.js'

// vim modes

const vimModes = {
    normal: true,
    insert: false,
    visual: false,
}

// Add event listener to terminal input
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
            terminalInput.classList.toggle('hide')
        }
    }
})


// calling with :
const hideTerminal = e => {
    if (e.key === ':' && terminalInput.classList.contains('hide')) {
        terminalInput.classList.toggle('hide')
        terminalInput.focus();
        textArea.setAttribute('contentEditable', false)
        vimModes.normal = false;
    };
};
document.addEventListener('keydown', hideTerminal);

// escape key
const escKey = e => {
    if (e.key === 'Esc' && vimModes.normal === false) {
        console.log('works')
        e.preventDefault;
        textArea.setAttribute('contentEditable', false)
        vimModes.normal = true;
    }
};
document.addEventListener('keydown', escKey);
// insert mode with i

const insertMode = e => {
    if (e.key === 'i' && vimModes.normal === true) {
        textArea.setAttribute('contentEditable', true);
        textArea.focus();
    }
};

document.addEventListener('keydown', insertMode);

// vim modes changes


document.addEventListener('change', vimModes => {
    console.log(vimModes)
});

