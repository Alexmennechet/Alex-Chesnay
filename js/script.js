/*
 * Fichier JavaScript principal pour le portfolio.
 * Ce script gère simplement un menu responsive. D'autres interactions
 * pourront être ajoutées ultérieurement.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ----- Filtrage des cartes de projets -----
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.grid .card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // changer le bouton actif
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        // afficher toutes les cartes si filtre "all" ou correspondance de catégorie
        if (filter === 'all' || filter === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ----- Animation d'apparition pour les cartes -----
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  cards.forEach(card => {
    observer.observe(card);
  });
});