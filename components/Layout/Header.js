import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import theme from '../../styles/theme';
import projects from '../../private/projects.json' assert { type: 'json' };
import Topbar from './Topbar';

export default function Header() {
  const { asPath } = useRouter();
  const [projectsOpen, setProjectsOpen] = useState(asPath.startsWith('/projets'));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <Topbar />
      <header
        className={styles.header}
        style={{
          background: theme.colors.background,
          borderBottom: `1px solid ${theme.colors.text}`,
          color: theme.colors.text,
          padding: 'var(--space-md) 0'
        }}
      >
        <div className="container">
        <nav>
          <div className={styles['nav-inner']}>
            <Link
              href="/"
              aria-current={asPath === '/' ? 'page' : undefined}
              className={styles.logo}
            >
              Alex Chesnay
            </Link>
            <button
              className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
            </button>
            <div className={`${styles['nav-scroll']} ${menuOpen ? styles.open : ''}`}>
              <ul className={styles['main-menu']}>
                <li>
                  <Link
                    href="/"
                    className={`${styles.navLink} ${asPath === '/' ? styles.active : ''}`}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
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
                </li>
                <li>
                  <Link
                    href="/services/"
                    className={`${styles.navLink} ${
                      asPath.startsWith('/services') ? styles.active : ''
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos/"
                    className={`${styles.navLink} ${
                      asPath === '/a-propos' ? styles.active : ''
                    }`}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/"
                    className={`${styles.navLink} ${
                      asPath.startsWith('/blog') ? styles.active : ''
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="/contact/"
              aria-current={asPath === '/contact' ? 'page' : undefined}
              className={`${styles.navLink} ${styles['contact-cta']} ${
                asPath === '/contact' ? styles.active : ''
              }`}
              style={{ background: theme.colors.cyan, color: theme.colors.white }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  </>
  );
}
