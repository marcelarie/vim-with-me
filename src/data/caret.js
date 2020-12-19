
function getCaretPosition() {
    let selection = window.getSelection();
    return selection.focusOffset;
};

function getElementOnCaret() {
    let selection = window.getSelection();
    return selection.anchorNode.parentElement
};


function setCaretPosition() {}
function setSelectionRange() {};

export {getCaretPosition, setCaretPosition, setSelectionRange, getElementOnCaret};
