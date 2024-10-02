/* TRATAMENTO DE ERROS NOS FROMS DE LOGIN E CADASTRO*/

document.querySelector('form').addEventListener('submit', function(e) {
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem');

    mensagem.style.display = "none"; // Esconde a mensagem por padrão

    if (senha !== confirmSenha) {
        e.preventDefault();
        mensagem.innerText = 'As senhas não coincidem!';
        mensagem.style.display = "block";
        return;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        e.preventDefault();
        mensagem.innerText = 'Formato de email inválido!';
        mensagem.style.display = "block";
        return;
    }
});