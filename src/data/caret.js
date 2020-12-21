import {positionsToLine} from "../data/visual.js"
import {textArea} from "../../terminal/main.js"

let caretPosition = ''
function getCaretPosition(e) {
    caretPosition = e.target.selectionStart;
    return e.target.selectionStart;
};

function followCaret(element, position, key) {
    switch (key) {
        case 'h':
            element.setSelectionRange(position - 1, position)
            console.log(positionsToLine(textArea.value, 'up', caretPosition));
            break;
        case 'j':
            element.setSelectionRange(position + 91, position + 91 + 1)
            break;
        case 'k':
            element.setSelectionRange(position - 91, position - 91 + 1)
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



export {getCaretPosition, setCaretPosition, setSelectionRange, followCaret};
