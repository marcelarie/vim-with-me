
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"

export const mainFolder = new Folder()

mainFolder.createFile('index.html',
    `<!DOCTYPE html>
    < html lang = "en" >
    <head>
        <meta charset="UTF-8">
            <title></title>
    </head>
        <body>

        </body>
    </html> `)
mainFolder.createFile('alba', 'amor')
mainFolder.createFile('jose', 'redes')
mainFolder.createFile('juan', 'creciendo')
mainFolder.createFile('roser', 'libros')


console.log(mainFolder)
