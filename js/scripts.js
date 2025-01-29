// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Adiciona funcionalidade ao botão "Conheça nossos Serviços" na página inicial
  const serviceButton = document.querySelector('.button');
  if (serviceButton) {
    serviceButton.addEventListener('click', () => {
      window.location.href = 'services.html';
    });
  }

  // Scroll suave para links de navegação
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mensagem no console para indicar carregamento do site
  console.log('%cCSI2 - Site carregado com sucesso!', 'color: green; font-size: 16px;');
});
