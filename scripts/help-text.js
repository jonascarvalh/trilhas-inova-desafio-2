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

    let dateInput = fields[1].querySelector('#data_nascimento');
    let helpText = fields[1].getElementsByClassName('help-text')[0];

    if (dateInput.value.trim() === '') {
        helpText.classList.remove('help__text--hidden');
        formValido = false;
    } else {
        helpText.classList.add('help__text--hidden');
        formValido = true;
    }

    if (formValido) {
        this.submit;
    }


    let cpfInput = fields[2].querySelector('#cpf');
    let helpText = fields[2].getElementsByClassName('help-text')[0];

    if (cpfInput.value.trim() === '') {
        helpText.classList.remove('help__text--hidden');
        formValido = false;
    } else {
        helpText.classList.add('help__text--hidden');
        formValido = true;
    }

    if (formValido) {
        this.submit;
    }


    let sexoInput = fields[3].querySelector('#sexo');
    let helpText = fields[3].getElementsByClassName('help-text')[0];

    if (sexoInput.value.trim() === '') {
        helpText.classList.remove('help__text--hidden');
        formValido = false;
    } else {
        sexoHelpText.classList.add('help__text--hidden');
    }

    if (formValido) {
        this.submit;
    }