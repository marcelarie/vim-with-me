
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"

export const mainFolder = new Folder()

mainFolder.createFile('marcel', 'abcdefg')
mainFolder.createFile('alba', 'amor')
mainFolder.createFile('jose', 'redes')
mainFolder.createFile('juan', 'creciendo')
mainFolder.createFile('roser', 'libros')


console.log(mainFolder)
