// Efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo simples de interação no botão de compra
const buttons = document.querySelectorAll('.buy-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho! Marque sua presença.');
    });
});