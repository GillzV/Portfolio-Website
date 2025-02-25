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
  