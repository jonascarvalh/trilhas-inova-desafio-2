const form    = document.getElementById('form__register');
const fields  = form.getElementsByClassName('field');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formValido = true;

    let nameInput = fields[0].querySelector('#name');
    let helpText = fields[0].getElementsByClassName('help-text')[0];

    if (nameInput.value.trim() === '') { // String vazia
        helpText.classList.remove('help__text--hidden');
        formValido = false;
    } else { // String preenchida
        helpText.classList.add('help__text--hidden');
        formValido = true;
    }

    if (formValido) {
        this.submit;
    }

});