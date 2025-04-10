document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const helpText = document.querySelector(".help-text");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Recupera lista de usuários do sessionStorage
        const dados = sessionStorage.getItem("listaUsuarios");
        const listaUsuarios = dados ? JSON.parse(dados) : [];

        // Procura um usuário que bata com username e password
        const usuarioEncontrado = listaUsuarios.find(
            user => user.idUsuario === username && user.senhaUsuario === password
        );

        if (usuarioEncontrado) {
            // Login bem-sucedido
            helpText.classList.add("help__text--hidden");
            alert("Login realizado com sucesso! Bem-vindo(a), " + usuarioEncontrado.username + "!");

            // Redireciona
            window.location.href = "https://trilhas-inova-desafio-3.vercel.app/login-success.html";
        } else {
            // Mostra mensagem de erro
            helpText.classList.remove("help__text--hidden");
        }
    });
});
