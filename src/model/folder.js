export {Folder}
import {File} from "./file.js"

class Folder {
    constructor(files = {}) {
        this.files = files;
    }

    saveFile(filename, content) {
        this.files[filename] = new File(filename, content)
    }
}
