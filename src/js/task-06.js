
const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length >= input.dataset.value) {
        event.currentTarget.classList.add('valid')
        
    }
    else{
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
}