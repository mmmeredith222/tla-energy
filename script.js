document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Contact form handler
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const originalText = btn.innerText;
      
      btn.innerText = 'Sending...';
      btn.style.opacity = '0.7';
      
      setTimeout(() => {
        alert('Thank you for your message. We will be in touch shortly.');
        form.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
      }, 1500);
    });
  }
});
