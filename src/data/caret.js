
function getCaretPosition(textArea) {
    let selection = window.getSelection();
    selection.modify('move', 'forward')
};


function setCaretPosition() { };
function setSelectionRange() { };

export { getCaretPosition, setCaretPosition, setSelectionRange };
