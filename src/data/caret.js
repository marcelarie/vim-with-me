import { positionsToLine, extractPosition } from "../data/visual.js"
import { textArea } from "../../terminal/main.js"

let caretPosition = ''
function getCaretPosition(e) {
    caretPosition = e.target.selectionStart;
    return e.target.selectionStart;
};

function followCaret(element, position, key) {
    const currentLine = positionsToLine(textArea.value, caretPosition);
    switch (key) {
        case 'h':
            element.setSelectionRange(position - 1, position)
            break;
        case 'j':
            const charactersToPositionDown = extractPosition(textArea, currentLine, caretPosition, 'down')
            element.setSelectionRange(position + charactersToPositionDown, position + charactersToPositionDown + 1)
            break;
        case 'k':
            const charactersToPositionUp = extractPosition(textArea, currentLine, caretPosition, 'up')
            element.setSelectionRange(position - charactersToPositionUp - 1, position - charactersToPositionUp)
            break;
        case 'l':
            element.setSelectionRange(position + 1, position + 2)
            break;
        case 'x':
            element.setSelectionRange(position, position + 1)
            break;
    }
}


function setCaretPosition(element, position) {
    element.setSelectionRange(position, position)
}
function setSelectionRange(element, position) {
    element.focus();
    element.setSelectionRange(position, position)
};



export { getCaretPosition, setCaretPosition, setSelectionRange, followCaret };
