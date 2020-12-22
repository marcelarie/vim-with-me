
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"

export const mainFolder = new Folder()

if (localStorage.getItem('files') !== null) {
    const storage = localStorage.getItem('files');
    mainFolder.files = JSON.parse(storage)
}

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
mainFolder.createFile('style.css',
    `
:root {
    /*gruvbox*/
    --gruvbox-background: #282828;
    --gruvbox-background-light: #fbf1c7;
    --gruvbox-red : #cc241d;
    --gruvbox-green : #98971a;
    --gruvbox-yellow : #d79921;
    --gruvbox-blue: #458588;
    --gruvbox-purple: #b16286;
    --gruvbox-aqua: #689d6a;
    --gruvbox-gray: #a89984;
    --gruvbox-orange: #fe8019;
    --gruvbox-light-red : #fb4934;
    --gruvbox-light-green : #b8bb26;
    --gruvbox-light-yellow : #fabd2f;
    --gruvbox-light-blue: #83a598;
    --gruvbox-light-purple: #d3869b;
    --gruvbox-light-aqua: #8ec07c;
    --gruvbox-fg: #ebdbb2;
    --gruvbox-grey-comment: #928374;
    --gruvbox-grey-dark: #504945;
    --gruvbox-grey-darker: #3C3836;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}

body {
    background-color: var(--gruvbox-background); 
} `)
mainFolder.createFile('main.js',
    `
import {File} from "./file.js"

class Folder {
    constructor(files = {}) {
        this.files = files;
    }

    createFile(filename, content) {
        this.files[filename] = new File(filename, content)
    }
}

export {Folder} `)


console.log(mainFolder)
