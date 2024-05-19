const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuContent = document.querySelector('.hamburger-menu-content');


function openmenu() {
  hamburgerMenuContent.style.display = hamburgerMenuContent.style.display === 'none' ? 'block' : 'none';
}



hamburgerMenu.addEventListener('click', openmenu);