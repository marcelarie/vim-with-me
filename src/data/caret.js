
function getCaretPosition(e) {
    // let selection = window.getSelection();
    return e.target.selectionStart;
};


function followCaret(element, arrowDirection) {
    let selection = window.getSelection();
    const caretX = selection.getRangeAt(0).getBoundingClientRect().left
    const caretY = selection.getRangeAt(0).getBoundingClientRect().top

    switch (arrowDirection) {
        case 'ArrowRight':
            element.style.left = caretX + 10 + 'px';
            element.style.top = caretY + 'px';
            break;
        case 'ArrowLeft':
            element.style.left = caretX - 18 + 'px';
            element.style.top = caretY + 'px';
            break;
        case 'ArrowUp':
            element.style.left = caretX + 'px';
            element.style.top = caretY - 30 + 'px';
            break;
        case 'ArrowDown':
            element.style.left = caretX + 'px';
            element.style.top = caretY + 30 + 'px';
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
