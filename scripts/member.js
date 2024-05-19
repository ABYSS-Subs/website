const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const teamMembers = document.querySelectorAll('.team-member');

    let currentSlide = 0;

    function goToSlide(index) {
      const slideWidth = teamMembers[0].offsetWidth + 16; // Add margin
      const offset = slideWidth * index;
      carousel.style.transform = `translateX(-${offset}px)`;
      currentSlide = index;
    }

    prevBtn.addEventListener('click', () => {
      const prevSlide = (currentSlide - 1 + teamMembers.length) % teamMembers.length;
      goToSlide(prevSlide);
    });

    nextBtn.addEventListener('click', () => {
      const nextSlide = (currentSlide + 1) % teamMembers.length;
      goToSlide(nextSlide);
    });