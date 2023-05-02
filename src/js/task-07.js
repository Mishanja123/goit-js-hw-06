const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


input.addEventListener("input", getFontSize)

text.style.fontSize = 56 + "px"

function getFontSize() {
    text.style.fontSize = event.currentTarget.value + "px"
}