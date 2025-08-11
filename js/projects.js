document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.project-filters a');
  const cards = document.querySelectorAll('.project-gallery .project-card');

  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      const category = filter.getAttribute('data-filter');
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
