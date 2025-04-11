# Formulário de Inscrição - Trilhas Inova
> Projeto construído para o desafio 3 do programa trilhas inova.
> 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=flat-square)


Este projeto é uma aplicação web simples composta por uma tela de login e um formulário de inscrição para o Programa Trilhas. Todo o fluxo é feito no navegador, utilizando tecnologias front-end, sem back-end.

## Funcionalidades

- Autenticação de usuário com credenciais pré-definidas.
- Redirecionamento automático para o formulário após login bem-sucedido.
- Validação de campos obrigatórios no formulário de inscrição.
- Máscara de entrada para CPF, telefone e CEP.
- Upload de documentos (Identidade e Comprovante de Residência).
- Armazenamento de dados utilizando LocalStorage e SessionStorage.
- Design responsivo para desktop e mobile.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- FontAwesome (para ícones)
- IMaskJS (para máscaras de entrada)

## Como Executar o Projeto

1. Clone ou baixe o repositório no seu computador.
2. Abra o arquivo `lndex.html` em um navegador moderno.
3. Faça seu cadastro forcendo um usuário e senha.
4. Você será redirecionado para o formulário de inscrição (`inscrição.html`).
5. Faça login utilizando seu usuário cadastrado.
6. Após o login, você será redirecionado para uma página informando que você realizou o login (`login-success.html`).
7. Preencha todos os campos obrigatórios e envie a inscrição.

## Estrutura de Pastas

```
/projeto-trilhas
│
├── assets/
│   ├── icons/        # Ícones utilizados no projeto
│   └── images/       # Ilustrações e imagens
│
├── css/
│   ├── login.css     # Estilos específicos da página de login
│   └── styles.css    # Estilos da página de formulário
│
├── scripts/
│   ├── login.js      # Validação do login
│   └── main.js       # Validação do formulário de inscrição
│
├── index.html        # Página do formulário de inscrição
├── login.html        # Página de login
└── README.md         # Arquivo de documentação
```

## Principais Comportamentos do Projeto

- **Login:** A validação é feita no `login.js`. Se o usuário e senha estiverem corretos, ele é direcionado para a página de inscrição.
- **Formulário:** No `main.js`, é feita a validação dos campos obrigatórios. Máscaras são aplicadas automaticamente nos campos de CPF, telefone, CEP e número da residência.
- **Uploads:** O usuário pode anexar arquivos de identidade e comprovante de residência, visualizando o nome do arquivo selecionado.
- **Armazenamento Local:** Os dados preenchidos no formulário são armazenados usando `SessionStorage` até a submissão.

## Observações

- O projeto não realiza integração com servidor, sendo apenas uma simulação de um fluxo real de autenticação e cadastro.
- Ideal para estudos de front-end (HTML, CSS e JS).
- Responsivo para diferentes tamanhos de tela.

## Licença

#### Permissão de utilização para fins educacionais.
