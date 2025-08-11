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
        padding: 'var(--space-md) 0'
      }}
    >
      <div className={`container ${styles.inner}`}>
        <nav
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
          style={{ gap: 'var(--space-md)' }}
        >
          <button
            className={styles.menuButton}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <Link href="/" className={`${styles.navLink} ${asPath === '/' ? styles.active : ''}`}>Accueil</Link>
          <details
            className={styles.dropdown}
            open={projectsOpen}
            onToggle={(e) => setProjectsOpen(e.target.open)}
          >
            <summary
              aria-haspopup="menu"
              aria-expanded={projectsOpen}
              className={`${styles.navLink} ${
                asPath.startsWith('/projets') ? styles.active : ''
              }`}
            >
              Projets
            </summary>
            <ul className={styles.dropdownMenu} role="menu">
              {projects.map((project) => (
                <li key={project.slug} role="none">
                  <Link
                    href={`/projets/${project.slug}`}
                    className={`${styles.navLink} ${
                      asPath === `/projets/${project.slug}` ? styles.active : ''
                    }`}
                    role="menuitem"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link
            href="/services/"
            className={`${styles.navLink} ${asPath.startsWith('/services') ? styles.active : ''}`}
          >
            Services
          </Link>
          <Link
            href="/a-propos/"
            className={`${styles.navLink} ${asPath === '/a-propos' ? styles.active : ''}`}
          >
            À propos
          </Link>
          <Link
            href="/blog/"
            className={`${styles.navLink} ${asPath.startsWith('/blog') ? styles.active : ''}`}
          >
            Blog
          </Link>
          <Link
            href="/contact/"
            aria-current={asPath === '/contact' ? 'page' : undefined}
            className={`${styles.navLink} ${
              asPath === '/contact' ? styles.active : ''
            } ${styles.contactLink}`}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact/"
          aria-current={asPath === '/contact' ? 'page' : undefined}
          className={styles.contactButton}
          style={{ background: theme.colors.cyan, color: theme.colors.white }}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
