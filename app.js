const form = document.querySelector('form')
const email = document.getElementById('email');
const postcode = document.getElementById('postcode');
const country = document.getElementById('country');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

email.addEventListener('input', () => {
    if(email.validity.typeMismatch) {
        showError(email,'Please enter a correct email address')
    } else {
        hideError(email)
    }
})

postcode.addEventListener('input', ()=> {
    if(postcode.validity.tooShort || postcode.validity.tooLong || postcode.validity.patternMismatch) {
        showError(postcode,'Please enter valid Australia postcode. E.g: 3000')
    } else {
        hideError(postcode)
    }
})

country.addEventListener('input', ()=> {
    if(country.validity.patternMismatch) {
        showError(country, 'Please enter a valid Country')
    } else {
        hideError(country)
    }
})

password.addEventListener('input', ()=> {
    if(password.validity.patternMismatch) {
        showError(password, 'Password must contain at least 8 characters with one letter and one number')
    } else {
        hideError(password)
    }
}) 

passwordConfirmation.addEventListener('input', ()=> {
    if(passwordConfirmation.value !== password.value) {
        showError(passwordConfirmation, 'Password not match')
    } else {
        hideError(passwordConfirmation)
    }
})

const button = document.querySelector('button')

form.addEventListener('submit', (e) => {
    const fields = document.querySelectorAll('input')
    fields.forEach((field)=> {
        if (field.value === '') {
            e.preventDefault()
            showError(button, 'Please fill out all the fields');
            setTimeout(() => {
                button.nextElementSibling.className = 'submit-error hidden'
            }, 500)
        }
    })
})

function showError(input, message) {
    input.nextElementSibling.classList.remove('hidden')
    input.nextElementSibling.textContent = message
}

function hideError(input) {
    input.nextElementSibling.className = 'error hidden'
}