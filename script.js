// Interatividade para a mudança de cor do cabeçalho ao rolar a página
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Adiciona animação de fade-in para o título principal
window.addEventListener('DOMContentLoaded', function () {
    const heroHeading = document.querySelector('.hero h2');
    heroHeading.classList.add('fade-in');
});
