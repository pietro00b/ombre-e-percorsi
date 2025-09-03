// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // Chiudi menu quando si clicca su un link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
  
  // Smooth scroll per anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
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
  
  // Lazy loading per immagini
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});
