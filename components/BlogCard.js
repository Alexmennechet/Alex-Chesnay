import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({ title, date, excerpt, slug, image = '/assets/images/placeholder2.png' }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
          decoding="async"
          width={640}
          height={360}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <time className={styles.date}>{date}</time>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/blog/${slug}`} className={`contact-button ${styles.readButton}`}>
          Lire
        </Link>
      </div>
    </article>
  );
}
