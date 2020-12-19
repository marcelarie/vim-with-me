
function deleteCharOnPosition(element, position) {
    let text = element.value;
    fakeCaret.classList.add('hide')
    if (element.classList.contains('text-area') || element.parentElement.classList.contains('text-area')) {
        element.value = text.slice(0, position) + text.slice(position + 1)
    }
}


export {deleteCharOnPosition}
