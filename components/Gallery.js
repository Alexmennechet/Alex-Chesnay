import { useRef } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function Gallery({ images = [], alts = [], layout = 'stack', sizes = {} }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  if (layout === 'slider') {
    return (
      <div className="gallery gallery--slider">
        <div className="gallery__track" ref={trackRef}>
          {images.map((img, idx) => {
            const size = sizes[img] || {};
            return (
              <div className="gallery__slide" key={idx}>
                <Zoom>
                  <img
                    src={img}
                    alt={alts[idx] || `Image ${idx + 1}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    width={size.width}
                    height={size.height}
                  />
                </Zoom>
              </div>
            );
          })}
        </div>
        <button type="button" className="gallery__prev" aria-label="Image précédente" onClick={() => scroll(-1)}>
          ‹
        </button>
        <button type="button" className="gallery__next" aria-label="Image suivante" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    );
  }

  return (
    <div className={`gallery gallery--${layout}`}>
      {images.map((img, idx) => {
        const size = sizes[img] || {};
        return (
          <Zoom key={idx}>
            <img
              src={img}
              alt={alts[idx] || `Image ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width={size.width}
              height={size.height}
            />
          </Zoom>
        );
      })}
    </div>
  );
}
