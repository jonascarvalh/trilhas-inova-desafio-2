
document.addEventListener("DOMContentLoaded", function() {

    console.log("carregou essa bagaça?");

    document.getElementById("loginForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMessage = document.getElementById("error-message");

        const user = "usuario";
        const pass = "12345678";

        if (username === user && password === pass) {
            alert("Inscrição realizada com sucesso! Bem-vindo(a), " + username + "!");
            
            localStorage.setItem("usuarioLogado", username);

            // Maria vai fazer isso aqui funcionar
            window.location.href = "https://trilhas-inova-desafio-3.vercel.app/" + "index.html";
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos!";
            errorMessage.style.color = "red";
        }
    });
});


