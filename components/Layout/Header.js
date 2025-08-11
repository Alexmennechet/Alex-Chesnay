import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Header.module.css';
import theme from '../../styles/theme';
import projects from '../../private/projects.json' assert { type: 'json' };

export default function Header() {
  const { asPath } = useRouter();
  const [projectsOpen, setProjectsOpen] = useState(asPath.startsWith('/projets'));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={styles.header}
      style={{
        background: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.text}`,
        color: theme.colors.text,
        padding: theme.spacing.md
      }}
    >
      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
        style={{ gap: theme.spacing.md }}
      >
        <button
          className={styles.menuButton}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <Link href="/" className={asPath === '/' ? styles.active : ''}>Accueil</Link>
        <details
          className={styles.dropdown}
          open={projectsOpen}
          onToggle={(e) => setProjectsOpen(e.target.open)}
        >
          <summary
            aria-haspopup="menu"
            aria-expanded={projectsOpen}
            className={asPath.startsWith('/projets') ? styles.active : ''}
          >
            Projets
          </summary>
          <ul className={styles.dropdownMenu} role="menu">
            {projects.map((project) => (
              <li key={project.slug} role="none">
                <Link
                  href={`/projets/${project.slug}`}
                  className={asPath === `/projets/${project.slug}` ? styles.active : ''}
                  role="menuitem"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <Link href="/services/" className={asPath.startsWith('/services') ? styles.active : ''}>Services</Link>
        <Link href="/a-propos/" className={asPath === '/a-propos' ? styles.active : ''}>À propos</Link>
        <Link href="/blog/" className={asPath.startsWith('/blog') ? styles.active : ''}>Blog</Link>
        <Link
          href="/contact/"
          className={`${asPath === '/contact' ? styles.active : ''} ${styles.contactLink}`}
        >
          Contact
        </Link>
      </nav>
      <Link
        href="/contact/"
        className={styles.contactButton}
        style={{ background: theme.colors.cyan, color: theme.colors.white }}
      >
        Contact
      </Link>
    </header>
  );
}
