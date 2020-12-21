import {vimModes} from '../src/data/keybindingsFun.js'

const modes = document.getElementById('mode-air-line')
const branch = document.getElementById('branch-air-line')
const folder = document.getElementById('folder-air-line')
const language = document.getElementById('language-air-line')
const wordCounter = document.getElementById('word-counter-air-line')

function showVimMode(mode) {
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

export {showVimMode}
