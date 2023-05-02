
const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length >= input.dataset.length) {
         event.currentTarget.classList.remove('invalid')
        event.currentTarget.classList.add('valid')
        
    }
    else {
        event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
        
    }
}