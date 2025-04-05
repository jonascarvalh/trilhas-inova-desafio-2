const form    = document.getElementById('form__register');
const fields  = form.getElementsByClassName('field');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formValido = true;
    let formData = {};

    // Verificando os campos que podem possuir texto ou anexo
    for (let i = 0; i < fields.length; i++) { 
        let inputField = fields[i].querySelector('input');
        let helpText   = fields[i].querySelector('.help-text');
        
        if (inputField != null) { // Vai ser texto
            if (inputField.value.trim() === '') { // String vazia
                helpText.classList.remove('help__text--hidden');
                formValido = false;
            } else { // String com valor
                helpText.classList.add('help__text--hidden');
                formData[inputField.name] = inputField.value;
                formValido = true;
            }
        } else { // Verificando o select (não é um input value)
            let select = fields[i].querySelector('select');
            if (select.value == '') {
                helpText.classList.remove('help__text--hidden');
                formValido = false;
            } else {
                helpText.classList.add('help__text--hidden');
                formData[select.name] = select.value;
                formValido = true;
            }
        }
    }

    // Validação dos radio buttons
    let radios = document.querySelectorAll('input[name="radio-trilha"]');
    let radioSelecionado = false;
    for (let radio of radios) {
        if (radio.checked) {
            radioSelecionado = true;
            formData['radio-trilha'] = radio.value;
            break;
        }
    }
    
    let helpTextRadios = document.querySelector('.cards__trilhas_container .help-text');
    if (!radioSelecionado) {
        helpTextRadios.classList.remove('help__text--hidden');
        formValido = false;
    } else {
        helpTextRadios.classList.add('help__text--hidden');
        formValido = true;
    }

    
    // Validação checkbox de política e privacidade
    let termsDiv = document.querySelector('.terms');
    let helpTextTerms = termsDiv.querySelector('.help-text');
    let statusCheckbox = termsDiv.querySelector('#term_highlight');

    if (!statusCheckbox.checked) {
        helpTextTerms.classList.remove('help__text--hidden');
        formValido = false;
    } else {
        helpTextTerms.classList.add('help__text--hidden');
        formData['termos-condicoes'] = statusCheckbox.checked;
        formValido = true;
    }
    
    if (formValido) {
        sessionStorage.setItem('formData', JSON.stringify(formData));
        // console.log(sessionStorage.getItem('formData'));
        this.submit();
    }

});