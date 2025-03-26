const form    = document.getElementById('form__register');
const fields  = form.getElementsByClassName('field');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formValido = true;

    let name = fields[0].querySelector('#name');
    let helpText = fields[0].getElementsByClassName('help-text')[0];
    
    if (name.value.trim() === '') {
        helpText.classList.remove('help__text--hidden');
        formValido = true;
    } else {
        helpText.classList.add('help__text--hidden');
        formValido = false;
    }

    if (formValido) {
        this.submit;
    }

});