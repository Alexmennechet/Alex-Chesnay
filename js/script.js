/*
 * Fichier JavaScript principal pour le portfolio.
 * Ce script gère simplement un menu responsive. D'autres interactions
 * pourront être ajoutées ultérieurement.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const navLinks = document.querySelectorAll('.secondary-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

window.addEventListener('beforeunload', () => {
  document.body.classList.remove('loaded');
});

