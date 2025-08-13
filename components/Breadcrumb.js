import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className={styles.breadcrumb}>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
