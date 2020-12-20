import {mainFolder} from "../terminal/mainFolder.js"

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

export {addNerdFiles}
