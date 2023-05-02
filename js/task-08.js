const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const mail = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value
    const data = {
        mail, password
    }
    console.log(data);
}
