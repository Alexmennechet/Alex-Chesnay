import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import theme from '../../styles/theme';

export default function Header() {
  const { asPath } = useRouter();
  return (
    <nav
      className={styles.nav}
      style={{
        background: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.text}`,
        color: theme.colors.text,
        gap: theme.spacing.md,
        padding: theme.spacing.md
      }}
    >
      <Link href="/" className={asPath === '/' ? styles.active : ''}>Accueil</Link>
      <Link href="/projects" className={asPath.startsWith('/projects') ? styles.active : ''}>Projets</Link>
      <Link href="/about" className={asPath === '/about' ? styles.active : ''}>À propos</Link>
      <Link href="/contact" className={asPath === '/contact' ? styles.active : ''}>Contact</Link>
    </nav>
  );
}
