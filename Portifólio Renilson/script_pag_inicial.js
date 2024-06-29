document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#nav');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(10px)'; // Movimento inicial para baixo

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateX(0)';
    }, 0); // Atraso para iniciar a animação após 300 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#section_um_top');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateX(5px)'; // Movimento inicial para baixo

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 400); // Atraso para iniciar a animação após 300 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#img_section');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(10px)'; // Movimento inicial para baixo

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 700); // Atraso para iniciar a animação após 300 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#portifolio');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateX(-500px)'; // Movimento inicial para a esquerda

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateX(0)';
    }, 1500); // Atraso para iniciar a animação após 1500 milissegundos
});



