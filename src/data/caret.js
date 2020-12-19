
function getCaretPosition(e) {
    // let selection = window.getSelection();
    return e.target.selectionStart;
};


function followCaret(element, position, key) {
    switch (key) {
        case 'h':
            element.setSelectionRange(position - 1, position)
            break;
        case 'j':
            element.setSelectionRange(position + 20, position + 20 + 1)
            break;
        case 'k':
            element.setSelectionRange(position - 20, position - 20 + 1)
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
