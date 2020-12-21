
function positionsToLine(linesText, direction, position) {
    let characterCount = 0;
    Object.entries(linesText).forEach(line => {
        characterCount += line[1].length;
        console.log(position)
        if (characterCount >= position) {
            console.log(line[1])
            console.log(characterCount)
        }
    })
}


export { positionsToLine }
