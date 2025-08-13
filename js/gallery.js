document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery--slider').forEach((gallery) => {
    const track = gallery.querySelector('.gallery__track');
    const prev = gallery.querySelector('.gallery__prev');
    const next = gallery.querySelector('.gallery__next');
    if (!track || !prev || !next) return;
    const scroll = (dir) => {
      const width = track.clientWidth;
      track.scrollBy({ left: dir * width, behavior: 'smooth' });
    };
    prev.addEventListener('click', () => scroll(-1));
    next.addEventListener('click', () => scroll(1));
  });
});
