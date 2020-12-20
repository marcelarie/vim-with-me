import {mainFolder} from "../terminal/mainFolder.js"

function addNerdFiles() {
    const files = mainFolder.files
    console.log(files.name)
}

export {addNerdFiles}
