/*
 * Fichier JavaScript principal pour le portfolio.
 * Ce script gère simplement un menu responsive. D'autres interactions
 * pourront être ajoutées ultérieurement.
*/

// Sanitize dynamic user-provided content to mitigate XSS attacks
// Usage: const safe = window.sanitizeInput(userInput);
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

window.sanitizeInput = sanitizeInput;

document.addEventListener('DOMContentLoaded', () => {
  ['header', 'footer'].forEach(name => {
    const el = document.getElementById(`${name}-placeholder`);
    if (el) {
      fetch(`/components/${name}.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
        });
    }
  });
  document.body.classList.add('loaded');
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

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

// Filtering logic for static index.html gallery
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.secondary-nav a');
  const cards = document.querySelectorAll('.project-card');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const category = link.textContent.trim();

      navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        card.style.display =
          category === 'Featured' || cardCategory === category
            ? ''
            : 'none';
      });
    });
  });
});
