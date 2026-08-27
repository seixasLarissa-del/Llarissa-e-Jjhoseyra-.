document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o botão do Rin
    const btnRin = document.getElementById('btn-rin');
    const msgRin = document.getElementById('msg-rin');

    if (btnRin && msgRin) {
        btnRin.addEventListener('click', () => {
            msgRin.textContent = "Egoísmo Máximo! 'O futebol é um campo de batalha onde só os fortes sobrevivem.'";
            msgRin.className = "desperto";
        });
    }

    // Lógica para o botão do Isagi
    const btnIsagi = document.getElementById('btn-isagi');
    const msgIsagi = document.getElementById('msg-isagi');

    if (btnIsagi && msgIsagi) {
        btnIsagi.addEventListener('click', () => {
            msgIsagi.textContent = "Metavision Ativado! 'Eu vou devorar esse jogo.'";
            msgIsagi.className = "desperto";
        });
    }
});