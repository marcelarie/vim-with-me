import { mainFolder } from "../terminal/mainFolder.js"
import { currentFileId } from '../src/data/keybindingsFun.js'

function addNerdFiles() {
    const nerdTree = document.getElementById('nerd-tree')
    nerdTree.innerHTML = ''
    const files = Object.keys(mainFolder.files)
    const folder = document.createElement('div')
    folder.classList.add('folders')
    folder.textContent = Object.keys(mainFolder)
    nerdTree.appendChild(folder)
    files.forEach(file => {
        const fileOnTree = document.createElement('div');
        fileOnTree.classList.add('file-on-tree');
        fileOnTree.textContent = file;
        fileOnTree.id = file
        nerdTree.appendChild(fileOnTree)
    })
}

function currentFileMark() {
    const files = Object.values(mainFolder.files)
    files.forEach(file => {
        if (file.id === currentFileId) {
            document.getElementById(file.name).classList.add('current-file')
        }
    })
}

export { addNerdFiles, currentFileMark }
