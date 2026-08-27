// Seleciona os elementos do HTML
const botao = document.getElementById('btn-ego');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
    // Frase marcante do Rin Itoshi:
    mensagem.textContent = "Egoísmo Máximo! 'O futebol é um campo de batalha onde só os fortes sobrevivem.'";
    mensagem.className = "desperto";
});