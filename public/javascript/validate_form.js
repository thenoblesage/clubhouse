const password_field = document.querySelector('#password')
const confirm_field = document.querySelector('#confirm')
const submit_btn = document.querySelector('#submit')

submit_btn.disabled = true

const toggleBtn = () => {
    if (password_field.value === confirm_field.value) {
        submit_btn.disabled = false
    } else {
        submit_btn.disabled = true
    }
}

confirm_field.addEventListener('change', toggleBtn)
password_field.addEventListener('change', toggleBtn)
