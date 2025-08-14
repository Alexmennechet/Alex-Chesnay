export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const sections = document.querySelectorAll('section');
  if (!sections.length) return;

  if (prefersReducedMotion()) {
    sections.forEach((el) => {
      el.classList.add('sr-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const { delay = 0, duration = 600 } = el.dataset;
        el.style.setProperty('--sr-delay', `${delay}ms`);
        el.style.setProperty('--sr-duration', `${duration}ms`);
        el.classList.add('sr-visible');
        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach((el) => {
    el.classList.add('sr');
    observer.observe(el);
  });
}
