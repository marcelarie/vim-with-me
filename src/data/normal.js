
function deleteCharOnPosition(element, position) {
    let text = element.value;
    if (element.classList.contains('text-area') || element.parentElement.classList.contains('text-area')) {
        element.value = text.slice(0, position) + text.slice(position + 1)
    }
}

function getLines(element, position) {
    let text = element.value.split('\n');
    console.log(text)
    return text
}


export {deleteCharOnPosition, getLines}
