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
            if (!validarCampoInput(inputField, helpText)) { // String vazia
                formValido = false;
            } else { // String com valor
                helpText.classList.add('help__text--hidden');
                formData[inputField.name] = inputField.value;
                formValido = true;
            }
        } else { // Verificando o select (não é um input value)
            let select = fields[i].querySelector('select');
            if (select.value === '') {
                helpText.classList.remove('help__text--hidden');
                formValido = false;
            } else {
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

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    for (let i = 9; i <= 10; i++) {
        let soma = 0;
        for (let j = 0; j < i; j++) {
            soma += parseInt(cpf.charAt(j)) * (i + 1 - j);
        }
        let digito = (soma * 10) % 11;
        if (digito === 10 || digito === 11) {
            digito = 0;
        }
        if (digito !== parseInt(cpf.charAt(i))) {
            return false;
        }
    }

    return true;
}

function validarCampoInput(inputField, helpText) {
    const nomeCampo = inputField.name;
    const valor = inputField.value.trim();

    if (valor === '') {
        helpText.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            Este é um campo obrigatório.
        `;
        helpText.classList.remove('help__text--hidden');
        return false;
    }

    if (nomeCampo === 'cpf' && !validarCPF(valor)) {
        helpText.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            CPF inválido.
        `;
        helpText.classList.remove('help__text--hidden');
        return false;
    }

    helpText.classList.add('help__text--hidden');
    helpText.innerHTML = `
        <i class="fa-solid fa-circle-exclamation"></i>
        Este é um campo obrigatório.
    `;
    return true;
}

