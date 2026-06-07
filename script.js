document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const page = document.body.dataset.page;

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  navLinkItems.forEach(link => {
    if (link.textContent.trim().toLowerCase() === page) {
      link.classList.add('active');
    }
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  const fadeElements = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(el => observer.observe(el));

  const orderForm = document.querySelector('.order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for your order request. Our team will contact you shortly.');
      orderForm.reset();
    });
  }
});
