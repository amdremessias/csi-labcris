// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Atualiza o conteúdo do widget
  const widgetContainer = document.getElementById('widget-container');

  if (widgetContainer) {
    widgetContainer.innerHTML = `
      <div style="padding: 10px; border-radius: 5px; background-color: #222; color: #e0e0e0;">
        <h3>Bem-vindo ao Widget CSI2!</h3>
        <p>Aqui você encontra soluções de segurança personalizadas.</p>
        <button id="learn-more" style="background-color: #007bff; color: #fff; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;">Saiba mais</button>
      </div>
    `;

    // Adiciona um evento ao botão "Saiba mais"
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
      learnMoreButton.addEventListener('click', () => {
        alert('Mais informações estarão disponíveis em breve!');
      });
    }
  } else {
    console.error('Elemento widget-container não encontrado. Verifique o HTML.');
  }

  // Adiciona scroll suave para os links do menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Mensagem de inicialização no console
  console.log('%cSite CSI2 está funcionando perfeitamente!', 'color: green; font-size: 16px;');
});
