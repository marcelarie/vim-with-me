import { mainFolder } from "../terminal/mainFolder.js"

const branch = document.getElementById('branch-air-line')
const language = document.getElementById('language-air-line')
const wordCounter = document.getElementById('word-counter-air-line')

function showVimMode(mode) {
    const modes = document.getElementById('mode-air-line')
    switch (mode) {
        case 'normal':
            modes.textContent = 'NORMAL';
            modes.style.backgroundColor = 'var(--gruvbox-grey-comment)'
            break;
        case 'visual':
            modes.textContent = 'VISUAL';
            modes.style.backgroundColor = 'var(--gruvbox-orange)'
            break;
        case 'insert':
            modes.textContent = 'INSERT';
            modes.style.backgroundColor = 'var(--gruvbox-light-blue)'
            break;
    }
}

function showBranch(branch) {
    // IN PROCESS
}

function showFilePath(father, file) {
    const folder = document.getElementById('folder-air-line')
    folder.textContent = father + '/' + file
}

export { showVimMode, showFilePath }
