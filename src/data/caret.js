
function getCaretPosition(textArea) {
    let selection = window.getSelection();
    console.log(selection.anchorOffset)
    return selection;
};


// function setCaretPosition() { };

function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange();
            console.log(range)
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function setSelectionRange() {};

export {getCaretPosition, setCaretPosition, setSelectionRange};
