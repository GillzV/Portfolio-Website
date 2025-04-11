// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Project switching logic
  const projectItems = document.querySelectorAll('.project-list li');
  const projects = document.querySelectorAll('.project');
  
  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.project-list li.active').classList.remove('active');
      item.classList.add('active');
  
      projects.forEach(project => project.style.display = 'none');
      document.getElementById(`project-${item.dataset.project}`).style.display = 'block';
    });
  });
  
  // Carousel functionality
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
      
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    }

    // Add click event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    // Initialize the carousel
    updateCarousel();
  });
  