import {getLines} from "../data/normal.js"

function positionsToLine(text, position) {
    const splitted = text.split('');
    let result = ''
    for (let character = 0; character < position; character++) {
        result += splitted[character]
    }
    let final = result.split('\n')
    return final.length - 1
}


function extractPosition(text, line, position, direction) {
    const splittedLines = Object.values(getLines(text));
    if (direction === 'up') {
        const restOfLines = Object.values(splittedLines).slice(0, line)
        let counter = 0;

        restOfLines.forEach(line => counter += line.length);
        counter += restOfLines.length;

        const charactersToStartOfLine = position - counter
        try {
            const charactersToOtherLine = splittedLines[line - 1].length - charactersToStartOfLine

            if (charactersToOtherLine > 0) {
                return charactersToOtherLine + charactersToStartOfLine
            } else {
                return charactersToStartOfLine + 1
            }
        } catch (error) {
        }
    } else if (direction === 'down') {
        const restOfLines = Object.values(splittedLines).slice(line + 1)
        let counter = 0

        restOfLines.forEach(line => counter += line.length);
        counter += restOfLines.length;

        const charactersToFinishTheLine = text.value.length - (position + counter)
        const charactersToOtherLine = splittedLines[line].length - charactersToFinishTheLine

        if (charactersToOtherLine > 0) {
            try {
                if (splittedLines[line + 1].length < charactersToOtherLine && splittedLines[line + 1].length > 0) {
                    return splittedLines[line + 1].length + charactersToFinishTheLine
                } else {
                    return charactersToOtherLine + charactersToFinishTheLine + 1
                }
            } catch (error) {
            }
        } else {
            return charactersToFinishTheLine + 1
        }
    }

}


export {positionsToLine, extractPosition}
