

function updateContentVisibility3() {
  var content1 = document.querySelector('.img_svg_head_bttm');
  content1.style.display = window.innerWidth >= 650 ? 'none' : 'block';
}

function updateContentVisibility1() {
  var content = document.querySelector('.img_svg_head');
  content.style.display = window.innerWidth >= 650 ? 'block' : 'none';
  
}



// Run on page load
updateContentVisibility3();
updateContentVisibility4();

// Run on window resize

window.addEventListener('resize', updateContentVisibility3);
window.addEventListener('resize', updateContentVisibility1)