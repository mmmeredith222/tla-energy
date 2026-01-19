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
  // Team Accordion
  const accordionHeaders = document.querySelectorAll('.team-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;

      // Toggle active class
      item.classList.toggle('active');

      // Toggle max-height
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
