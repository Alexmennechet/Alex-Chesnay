import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

export default function Header() {
  const { asPath } = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={asPath === '/' ? styles.active : ''}>Accueil</Link>
      <Link href="/projects" className={asPath.startsWith('/projects') ? styles.active : ''}>Projets</Link>
      <Link href="/about" className={asPath === '/about' ? styles.active : ''}>À propos</Link>
      <Link href="/contact" className={asPath === '/contact' ? styles.active : ''}>Contact</Link>
    </nav>
  );
}
