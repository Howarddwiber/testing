

document.querySelectorAll('.header__link[href="#home"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
});

document.querySelectorAll('.faq__toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.toggle('faq__item--open');
    btn.querySelector('span').textContent = isOpen ? '×' : '+';
  });
});