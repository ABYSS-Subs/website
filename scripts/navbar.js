

function updateContentVisibility3() {
  var content = document.querySelector('.menu');
  content.style.display = window.innerWidth >= 650 ? 'flex' : 'none';
}

function updateContentVisibility4() {
  var content = document.querySelector('.hamburger-menu');
  content.style.display = window.innerWidth >= 650 ? 'none' : 'block';
  
}



// Run on page load
updateContentVisibility3();
updateContentVisibility4();

// Run on window resize

window.addEventListener('resize', updateContentVisibility3);
window.addEventListener('resize', updateContentVisibility4)