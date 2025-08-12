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

  let lastFocus = null;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    toggle.textContent = open ? 'Fermer' : 'Menu';
    if (open) {
      lastFocus = document.activeElement;
      const firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.contains('open');
    setOpen(!open);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
    }
  });
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.classList.add('loaded');
  }
});
