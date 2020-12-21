import {getLines} from "../data/normal.js"

function positionsToLine(text, direction, position) {
    const splitted = text.split('');
    let result = ''
    for (let character = 0; character < position; character++) {
        result += splitted[character]
    }
    let final = result.split('\n')
    return final.length - 1
}


export {positionsToLine}
