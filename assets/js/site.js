document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const filterButtons = document.querySelectorAll('[data-filter]');
  const publications = document.querySelectorAll('.publication[data-theme]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach(b => b.classList.toggle('active', b === button));
    publications.forEach(pub => { pub.hidden = !(filter === 'all' || pub.dataset.theme === filter); });
  }));
});
