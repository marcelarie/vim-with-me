
function deleteCharOnPosition(element, position) {
    let text = element.textContent;
    if (element.classList.contains('text-area')) {
        element.textContent = text.slice(0, position) + text.slice(position + 1)
    }
}

export {deleteCharOnPosition}
