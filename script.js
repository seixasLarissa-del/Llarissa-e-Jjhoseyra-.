// Seleciona os elementos do HTML
const botao = document.getElementById('btn-ego');
const mensagem = document.getElementById('mensagem');

// Adiciona o evento de clique no botão
botao.addEventListener('click', () => {
    mensagem.textContent = "Metavision Ativado! 'Eu vou devorar esse jogo.'";
    mensagem.className = "desperto";
});