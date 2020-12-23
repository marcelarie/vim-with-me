import {mainFolder} from "../terminal/mainFolder.js"
import {currentFileId} from '../src/data/keybindingsFun.js'
import {textArea} from '../terminal/main.js'

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

function deleteFile(fileList, folder) {
    fileList.forEach(file => {
        if (file.classList.contains('file-on-focus')) {
            const selectedFile = file.textContent
            delete folder[selectedFile]
        }
        addNerdFiles();
        // saving progress on localStorage.
        localStorage.setItem('files', JSON.stringify(mainFolder.files))
    })
}


function uploadFile(event) {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
        placeFileContent(textArea, input.files[0])
    }
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {
        target.value = content
    }).catch(error => console.log(error))
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}

export {addNerdFiles, currentFileMark, deleteFile, uploadFile}
