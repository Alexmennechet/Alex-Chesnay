/**
 * Gestion du menu burger.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const header = document.querySelector('.site-header');
  if (!header) return;
  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    nav.setAttribute('aria-expanded', open);
  });
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.classList.add('loaded');
  }
});
