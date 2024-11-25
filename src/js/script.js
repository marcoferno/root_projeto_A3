/* TRATAMENTO DE ERROS NOS FROMS DE LOGIN E CADASTRO*/

document.querySelector('form')?.addEventListener('submit', function(e) {
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem');

    mensagem.style.display = "none";

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

/* TEMPORIZADOR DA INTERATIVIDADE JAVASCRIPT*/
const frases = [
    "Organize, colabore e conquiste Resultados.",
    "Gerencie projetos com eficiência.",
    "Simplifique sua gestão com PDGP."
];

const textoElement = document.getElementById('animated-text');

// Configurações de tempo (em milissegundos)
const intervalo = 3000; 
const duracaoTransicao = 800;

let indice = 0;

if (textoElement) {
    textoElement.style.transition = `opacity ${duracaoTransicao}ms ease-in-out`;
    textoElement.style.opacity = 1;

    function alternarFrases() {
        textoElement.style.opacity = 0;
        setTimeout(() => {
            textoElement.textContent = frases[indice];
            textoElement.style.opacity = 1; 
            indice = (indice + 1) % frases.length; 
        }, duracaoTransicao); 
    }

    setInterval(alternarFrases, intervalo);
}