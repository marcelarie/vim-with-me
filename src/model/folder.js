import {File} from "./file.js"

class Folder {
    constructor(files = {}) {
        this.files = files;
    }

    createFile(filename, content) {
        this.files[filename] = new File(filename, content)
    }
}

export {Folder}
