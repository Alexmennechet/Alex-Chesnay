import Link from 'next/link';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ name, slug }) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      {name}
    </Link>
  );
}
