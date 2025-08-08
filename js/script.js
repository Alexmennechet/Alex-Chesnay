/*
 * Fichier JavaScript principal pour le portfolio.
 * Ce script gère simplement un menu responsive. D'autres interactions
 * pourront être ajoutées ultérieurement.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const filterButtons = document.querySelectorAll('.secondary-nav [data-filter]');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cats = card.dataset.cat.split(' ');
        card.hidden = filter !== 'all' && !cats.includes(filter);
      });
    });
  });
});

window.addEventListener('beforeunload', () => {
  document.body.classList.remove('loaded');
});

(() => {
  const SPEED = 40; // pixels per second

  const scroller = document.getElementById('hero-scroller');
  if (!scroller) return;

  const content = scroller.querySelector('.scroller__content');
  if (!content) return;

  const alreadyCloned = scroller.querySelectorAll('.scroller__content').length > 1;
  if (!alreadyCloned) {
    const clone = content.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    scroller.appendChild(clone);
  }

  function setDuration() {
    const width = content.scrollWidth + parseFloat(getComputedStyle(scroller).gap || 0);
    const duration = width / SPEED;
    scroller.style.setProperty('--duration', `${duration}s`);
  }

  setDuration();
  let to;
  window.addEventListener('resize', () => {
    clearTimeout(to);
    to = setTimeout(setDuration, 150);
  });
})();
