const sections = document.querySelectorAll('.fade-in-section');

sections.forEach((section) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('in-view');
      }
    });
  });
  observer.observe(section);
});