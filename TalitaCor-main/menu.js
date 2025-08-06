document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!menuToggle || !navMenu) {
    console.warn("Menu toggle ou nav menu não encontrado.");
    return;
  }

  // Evento para abrir/fechar o menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('bx-menu');
      icon.classList.toggle('bx-x');
    }
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('#nav-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');

      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.add('bx-menu');
        icon.classList.remove('bx-x');
      }
    });
  });
});
