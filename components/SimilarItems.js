import Link from 'next/link';
import theme from '../styles/theme';

export default function SimilarItems({ items, imageSizes }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="similar-items" style={{ margin: `${theme.spacing.lg} 0` }}>
      <h2>Projets similaires</h2>
      <div className="grid">
        {items.map((p) => {
          const size = imageSizes[p.images[0]] || { width: 800, height: 600 };
          return (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}.html`}
              className="project-card"
            >
              <img
                src={p.images[0]}
                alt={p.imageAlts ? p.imageAlts[0] : p.title}
                className="project-img"
                loading="lazy"
                decoding="async"
                width={size.width}
                height={size.height}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
