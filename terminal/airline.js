
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

function showBranch(input) {
    const branch = document.getElementById('branch-air-line')
    // IN PROCESS
}

function showFilePath(father, file) {
    const folder = document.getElementById('folder-air-line')
    folder.textContent = father + '/' + file
}

function showLanguage(file) {
    const language = document.getElementById('language-air-line')
    const splitted = file.split('.')
    const fileType = splitted[splitted.length - 1]
    switch (fileType) {
        case 'js':
            language.textContent = 'javascript'
            break;
        default:
            language.textContent = fileType;
    };
}

export { showVimMode, showFilePath, showLanguage }
