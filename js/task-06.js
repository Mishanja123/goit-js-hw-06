
const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length == input.dataset.length) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
        
    }
    else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
        
    }
}